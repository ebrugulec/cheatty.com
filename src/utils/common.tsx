import { TagProps } from "../components/tag/tag";

export const sortTags = (tags: TagProps[]) => (
  tags.sort((a, b) => b.count - a.count)
)
