import { env } from "@/src/env";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getBucketPath(filename: string): string {
  if (filename?.startsWith('data:image') || filename?.startsWith('http')) {
    return filename;
  }


  return `${env.NEXT_PUBLIC_R2_URL}/${filename}`;

}
