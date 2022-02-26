import { TagProps } from "@components/Tag";

export const sortTags = (tags: TagProps[]) =>
  tags.sort((a, b) => b.count - a.count);
