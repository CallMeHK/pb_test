import { signal } from "@preact/signals";
import { useCollection } from "./useCollection";
import { MarkdownCollection } from './useMarkdwon'

export const PAGE_COLLECTION = "page";

export type PageCollection = {
  id: string;
  collectionId: string;
  collectionName: "page";
  created: string;
  updated: string;
  title: string;
  markdown: string[];
  expand: {
    markdown: MarkdownCollection[];
  }
};

export const page_collection = signal<PageCollection[]>([]);

export const usePages = useCollection<PageCollection>(
  PAGE_COLLECTION,
  page_collection
);
