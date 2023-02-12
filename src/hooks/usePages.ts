import { signal } from "@preact/signals";
import { useCollection } from "./useCollection";

export const PAGE_COLLECTION = "page";

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

export type PageCollection = {
  id: string;
  collectionId: string;
  collectionName: "page";
  created: string;
  updated: string;
  title: string;
  markdown: string[];
  expand: MarkdownCollection[];
};

export const page_collection = signal<PageCollection[]>([]);

export const usePages = useCollection<PageCollection>(
  PAGE_COLLECTION,
  page_collection
);
