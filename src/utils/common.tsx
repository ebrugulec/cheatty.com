import { TagProps } from "@components/Tag";

export const sortTags = (tags: TagProps[]) =>
  tags.sort((a, b) => b.count - a.count);

export const readingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;

  return Math.ceil(words / wordsPerMinute);
}
