import { SecureStore } from "../storage";
import { ErrorCode } from "./../core/constants/errorCode";
import { Alert } from "react-native";

export interface SignInPayload {
  username: string;
  password: string;
  appCode: string;
  platform: string;
}

export interface SignInResponse {
  userInfo: any;
  errorCode: string;
  errorMessage: string;
}

const ACCESS_TOKEN_STORAGE_KEY = "accessToken";
const CURRENT_USER = "user";

export const getAccessToken = (): Promise<string | null> =>
  SecureStore.getItemAsync(ACCESS_TOKEN_STORAGE_KEY);

export const setAccessToken = (accessToken: string): Promise<void> => {
  return SecureStore.setItemAsync(ACCESS_TOKEN_STORAGE_KEY, accessToken);
};

export const setCurrentUser = (userInfo: string): Promise<void> => {
  return SecureStore.setItemAsync(CURRENT_USER, userInfo);
};

export const signIn = async (
  payload: SignInPayload
): Promise<SignInResponse> => {
  const url = "http://192.168.76.6:8888/api/auth/v1.0/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return data;
};

export const signOut = async (): Promise<void> =>
  SecureStore.deleteItemAsync(ACCESS_TOKEN_STORAGE_KEY);
