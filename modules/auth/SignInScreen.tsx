import React from "react";
import { StyleSheet, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { View, Text } from "../../components/Themed";
import { SignInForm } from "./components";
import { useSignIn } from "./hooks";
import { SignInPayload } from "./service";
import { authActions } from "./slide";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
});

export const SignInScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [signIn, { loading }] = useSignIn();

  const onSignIn = async (payload: SignInPayload) => {
    const response = await signIn(payload);
    if (response?.errorCode === '0') {
      dispatch(authActions.updateAccessToken(JSON.stringify(response)));
    } else {
      Alert.alert("Đăng nhập thất bại!", response?.errorMessage);
    }
  };
  return (
    <SignInForm onSubmit={onSignIn} loading={loading} />
  );
};
