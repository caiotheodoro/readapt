
import { MAX_FILE_SIZE } from '@/src/lib/constants';
import { createUploadUrl } from './files';
import { v4 as uuidv4 } from 'uuid';
export const processFile = async (folder: string, file: File) => {
  if (file.size > MAX_FILE_SIZE) {
    throw new Error('Max file size is 8MB');
  }

  const newFileName = uuidv4();
  const newFile = new File([file], newFileName, { type: file.type });

  const uploadUrl = await createUploadUrl(folder, newFile.name, newFile.type);

  await fetch(uploadUrl, {
    method: 'PUT',
    body: newFile,
  });

  return newFile.name;
};