import { signal } from "@preact/signals";
import { useCollection, SubscriptionEvent } from "./useCollection";

export const PMESSAGES_COLLECTION = "pmessage";

export type PmessagesCollection = {
  id: string
  collectionId: string
  collectionName: "pmessage";
  created: string
  updated: string
  author: string
  recipient: string
  text: string
};

export type PmessageSubscriptionEvent = SubscriptionEvent<PmessagesCollection>

export const pmessages_collection = signal<PmessagesCollection[]>([]);

export const usePmessages = useCollection<PmessagesCollection>(
  PMESSAGES_COLLECTION,
  pmessages_collection
);
