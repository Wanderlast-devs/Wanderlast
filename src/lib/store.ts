import type { Analytics } from "firebase/analytics";
import type { FirebaseApp } from "firebase/app";
import { writable, type Writable } from "svelte/store";

export const firebase_app: Writable<FirebaseApp | null>  = writable(null);
export const firebase_analytics: Writable<Analytics | null> = writable(null);