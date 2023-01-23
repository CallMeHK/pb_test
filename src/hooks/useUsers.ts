import { signal } from "@preact/signals";
import { useCollection } from "./useCollection";

export const USER_COLLECTION = "users";

export type UserCollection = {
  id: string;
  collectionId: "_pb_users_auth_";
  collectionName: "users";
  created: string;
  updated: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: string;
  name: string;
  avatar: string;
};

export const users_collection = signal<UserCollection[]>([]);

export const useUsers = useCollection<UserCollection>(
  USER_COLLECTION,
  users_collection
);
