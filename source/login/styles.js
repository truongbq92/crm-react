import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export const TEXT = {
  color: "#fff",
  textAlign: "center",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
  },
  textWrapper: {
    marginTop: 0,
    marginBottom: 30,
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
  },
  form: {
    marginBottom: 10,
  },
  iconLock: {
    color: "#fff",
    position: "absolute",
    fontSize: 18,
    top: 16,
    left: 22,
    zIndex: 10,
    opacity: 0.5,
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#00bbd5",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonLoginText: {
    ...TEXT,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#00bbd5",
    opacity: 0.5,
    textAlign: "center",
    textAlignVertical: "center",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    opacity: 1,
    justifyContent: "center",
  },
  stretch: {
    width: 400,
    height: 200,
    resizeMode: "contain",
  },
  loginInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  loginInfoText: {
    ...TEXT,
    color: "#fff",
  },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contactInfoText: {
    ...TEXT,
    color: "#fff",
  },
  logo: {
    padding: 1,
    alignSelf: "center",
    marginTop: Constants.statusBarHeight + 80,
  },
  footer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  errorContainer: {
    marginVertical: 5,
    marginLeft: 10,
  },
  errorText: {
    color: "#FF0000",
  },
});
