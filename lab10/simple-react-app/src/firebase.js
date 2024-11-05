import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getApiKey, getAuthDomain, getProjectId, getStorageBucket, getMessagingSenderId, getAppId } from './config';

const firebaseConfig = {
  apiKey: getApiKey(),
  authDomain: getAuthDomain(),
  projectId: getProjectId(),
  storageBucket: getStorageBucket(),
  messagingSenderId: getMessagingSenderId(),
  appId: getAppId()
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
