import { signal } from "@preact/signals";
import { useCollection } from "./useCollection";

export const MARKDOWN_COLLECTION = "markdown";

export type MarkdownCollection = {
  id: string
  collectionId: string
  collectionName: "markdown"
  created: string
  updated: string
  md: string // this is markdown
  name: string
  tags: string[]
  expand: {};
};

export const markdwon_collection = signal<MarkdownCollection[]>([]);

export const useMarkdown = useCollection<MarkdownCollection>(
  MARKDOWN_COLLECTION,
  markdwon_collection
);
