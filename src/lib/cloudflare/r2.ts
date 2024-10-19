'use server';

import { env } from '@/src/env';
import {
  DeleteObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';


const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: env.CLOUDFLARE_ACCESS_KEY_ID,
    secretAccessKey: env.CLOUDFLARE_SECRET_ACCESS_KEY,
  },
});

async function createFolder(Bucket: string, Key: string) {
  const command = new PutObjectCommand({ Bucket, Key });
  return s3Client.send(command);
}

async function existsFolder(Bucket: string, Key: string) {
  const command = new HeadObjectCommand({ Bucket, Key });

  try {
    await s3Client.send(command);
    return true;
  } catch (error: any) {
    if (error.name === 'NotFound') {
      return false;
    } else {
      throw error;
    }
  }
}

async function createFolderIfNotExist(Bucket: string, Key: string) {
  if (!(await existsFolder(Bucket, Key))) {
    return createFolder(Bucket, Key);
  }
}

export async function deleteFile(Key: string) {
  const client = new S3Client();
  const command = new DeleteObjectCommand({ Bucket: env.BUCKET_NAME, Key });
  return client.send(command);
}

export const getFileName = (folder: string, key: string) => `${folder}/${key}`;

export async function getSignedUrlForS3Object(
  folder: string,
  key: string,
  type: string,
) {
  await createFolderIfNotExist(env.BUCKET_NAME, folder);

  return await getSignedUrl(
    s3Client,
    new PutObjectCommand({
      Bucket: env.BUCKET_NAME,
      Key: `${folder}/${key}`,
      ContentType: type,
    }),
    { expiresIn: 3600 },
  );
}

export async function getSignedUrlForS3Objects(
  folder: string,
  files: { name: string; type: string }[],
) {
  await createFolderIfNotExist(env.BUCKET_NAME, folder);

  return Promise.all(
    files.map((file) =>
      getSignedUrl(
        s3Client,
        new PutObjectCommand({
          Bucket: env.BUCKET_NAME,
          Key: `${folder}/${file.name}`,
          ContentType: file.type,
        }),
        { expiresIn: 3600 },
      ),
    ),
  );
}
