import { TagProps } from "../components/tag/tag";

export const sortTags = (tags: TagProps[]) => (
    tags.sort((a, b) => (a.count < b.count) ? 1 : -1)
)
