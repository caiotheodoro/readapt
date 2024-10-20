import { getSignedUrlForS3Object, getSignedUrlForS3Objects } from "@/src/lib/cloudflare/r2";


export async function createUploadUrl(
  folder: string,
  key: string,
  type: string,
) {
  return await getSignedUrlForS3Object(folder, key, type);
}

export async function createUploadUrls(
  folder: string,
  files: { name: string; type: string }[],
) {
  return await getSignedUrlForS3Objects(folder, files);
}
