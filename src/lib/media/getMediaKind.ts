// src/lib/media/getMediaKind.ts

export function getMediaKind(
  fileName: string,
  cloudinaryResourceType: string
): "image" | "video" | "audio" {
  const ext = fileName.split(".").pop()?.toLowerCase() || "";
  const audioExts = ["mp3", "wav", "ogg", "m4a", "aac", "flac", "wma", "aiff"];

  if (audioExts.includes(ext)) {
    return "audio";
  }

  return cloudinaryResourceType === "image" ? "image" : "video";
}
