import 'dotenv/config';
import { Gutendex, Book as GutendexBook } from '../src/lib/Gutendex.js';
import { getSignedUrlForS3Object, getFileName } from '../src/lib/cloudflare/r2.js';
import fetch from 'node-fetch';
import { bookService } from '@/src/services/elysia/book/index.js';

const gutendex = new Gutendex();
const BOOKS_PER_PAGE = 32; // Gutendex returns 32 books per page
const TOTAL_BOOKS = 1000;

async function downloadAndUploadEpub(downloadUrl: string, bookId: number): Promise<string> {
  const response = await fetch(downloadUrl);
  const arrayBuffer = await response.arrayBuffer();

  // Convert ArrayBuffer to Buffer
  const buffer = Buffer.from(arrayBuffer);

  const fileName = getFileName('books', `${bookId}.epub`);
  const signedUrl = await getSignedUrlForS3Object('books', `${bookId}.epub`, 'application/epub+zip');

  await fetch(signedUrl, {
    method: 'PUT',
    body: buffer,
    headers: { 'Content-Type': 'application/epub+zip' },
  });

  return fileName;
}

async function processBook(book: GutendexBook) {
  try {
    const r2FileName = await downloadAndUploadEpub(book.downloadUrl, book.id);
    await bookService.addBook({
      id: book.id,
      title: book.title,
      author: book.author,
      cover: book.cover,
      downloadUrl: r2FileName,
    });
    console.log(`Added book: ${book.title}`);
  } catch (error) {
    console.error(`Failed to process book ${book.id}: ${book.title}`, error);
  }
}

async function populateBooks() {
  const totalPages = Math.ceil(TOTAL_BOOKS / BOOKS_PER_PAGE);

  for (let page = 1; page <= totalPages; page++) {
    console.log(`Fetching page ${page} of ${totalPages}`);
    try {
      const books = await gutendex.searchBooks(`?page=${page}`);
      await Promise.all(books.map(processBook));
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
    }
  }

  console.log('Finished populating books');
}

populateBooks().catch(console.error);
