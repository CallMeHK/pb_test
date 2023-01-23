import { useSignal, Signal } from "@preact/signals";
import { RecordListQueryParams } from "pocketbase";
import { useEffect, useMemo, useCallback } from "preact/hooks";
import { pb, user_data } from "../signals";

type SubscriptionEvent<T> = {
  action: string;
  record: T;
};

type Subscription<T> = {
  events: string | "*";
  callback: (event: SubscriptionEvent<T>) => void;
};

type UseCollectionOpts<T> =
  | RecordListQueryParams
  | {
      skipMountFetch?: boolean;
      subscription?: Subscription<T>;
      singletonSignal?: boolean;
    };

export const useCollection =
  <T>(collectionName: string, collectionSignal?: Signal<T[]>) =>
  (opts?: UseCollectionOpts<T>) => {
    const options = useMemo(() => opts || {}, [opts]);

    const collection = collectionSignal || useSignal<T[]>([]);
    const loading = useSignal(!options?.skipMountFetch);
    const error = useSignal<any>(null);

    useEffect(() => {
      const { subscription, skipMountFetch, ...params } = options;
      if (!skipMountFetch) {
        console.info(` - Fetching ${collectionName} collection...`);
        loading.value = true
        pb.collection(collectionName)
          .getFullList<T>(200 /* batch size */, { sort: "-created", ...params })
          .then((response) => {
            loading.value = false;
            collection.value = response;
            console.info(
              ` - Successfully fetched ${collectionName} collection.`
            );
          })
          .catch((e) => {
            loading.value = false;
            error.value = e;
            console.error(` - Failed to fetch ${collectionName} collection.`);
          });
      }
    }, [options]);

    const create = useCallback(
      async (
        newCollection: Omit<T, "id">,
        opts: { update: boolean } = { update: false }
      ) => {
        try {
          console.info(` - Creating new ${collectionName}...`);
          const record = await pb
            .collection(collectionName)
            .create<T>(newCollection);
          console.info(` - Successfully created ${collectionName}.`);
          if (opts.update) {
            collection.value = [record, ...collection.value];
          }
          return { success: true, data: record };
        } catch (e) {
          console.error(` - Failed to create ${collectionName}.`);
          return { success: false, error: e };
        }
      },
      []
    );

    return {
      data: collection.value,
      loading: loading.value,
      error: error.value,
      create,
    };
  };
