import { signal, effect } from "@preact/signals";
import PocketBase from "pocketbase";

console.log('using backend: ', import.meta.env.PROD ? 'https://beer.tylergregg.me' : 'http://127.0.0.1:8090')
export const pb = new PocketBase(import.meta.env.PROD ? 'https://beer.tylergregg.me' : 'http://127.0.0.1:8090');
window.pb = pb;

type LoginRecord = {
  record: {
    avatar: string;
    collectionId: "_pb_users_auth_";
    collectionName: "users";
    created: string;
    email: string;
    emailVisibility: boolean;
    id: string;
    name: string;
    updated: string;
    username: string;
    verified: boolean;
    expand: {};
  };
  token: string;
};

type UserData = { id: string; user: string; email: string } | {};
export const user_data = signal<UserData>({} as UserData);
export const is_authenticated = signal(false);
export const has_auth_refresh_run = signal(false);

pb.authStore.onChange(() => {
  console.log("running auth onchange...");
  if (is_authenticated.value !== pb.authStore.isValid) {
    console.log("setting is_authenticated", pb.authStore.isValid);
    is_authenticated.value = pb.authStore.isValid;
  }
  if (!user_data.value?.id && !has_auth_refresh_run.value) {
    try {
      console.log("running auth refresh");
      has_auth_refresh_run.value = true;
      pb.collection("users").authRefresh();
    } catch {}
  }
  if (pb.authStore?.baseModel?.id !== user_data.value?.id) {
    console.log("setting user_data to", pb.authStore?.baseModel?.id);
    user_data.value = !!pb.authStore?.baseModel?.id
      ? {
          id: pb.authStore?.baseModel?.id,
          username: pb.authStore?.baseModel?.username,
          email: pb.authStore?.baseModel?.email,
        }
      : {};
  }
}, true);

effect(() => {
  console.log("auth data updated", is_authenticated.value, user_data.value);
});

export const login = async (username: string, password: string) => {
  try {
    await pb.collection("users").authWithPassword(username, password);
    return { success: true };
  } catch (e) {
    console.error("failed login", e);
    return { success: false, error: e };
  }
};

export const logout = () => pb.authStore.clear()

export const count = signal(0);
