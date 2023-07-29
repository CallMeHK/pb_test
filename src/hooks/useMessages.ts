import { signal } from "@preact/signals";
import { useCollection } from "./useCollection";

export const MESSAGES_COLLECTION = "messages";

export type MessagesCollection = {
  id: string;
  collectionId: string;
  collectionName: "messages";
  created: string;
  updated: string;
  text: string
  author: string
  chat: string
};

export const messages_collection = signal<MessagesCollection[]>([]);

export const useMessages = useCollection<MessagesCollection>(
  MESSAGES_COLLECTION,
  messages_collection
);
