import { signal } from "@preact/signals";
import { useCollection } from "./useCollection";

export const CHATS_COLLECTION = "chats";

export type ChatsCollection = {
  id: string
  collectionId: string
  collectionName: "chats";
  created: string
  updated: string
  users: [user1: string, user2: string];
  messages: string[];
};

export const chats_collection = signal<ChatsCollection[]>([]);

export const useChats = useCollection<ChatsCollection>(
  CHATS_COLLECTION,
  chats_collection
);
