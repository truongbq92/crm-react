import React from "react";
import { View, Text, TextInput } from "react-native";
import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export interface FormFieldProps {
  field?: any;
  secureTextEntry?: any;
  autoCapitalize?: any;
  values?: any;
  touched?: any;
  errors?: any;
  handleChange?: any;
  handleBlur?: any;
  placeholder?: any;
  icon?: any;
}
export const FormField: React.FC<FormFieldProps> = ({
  field,
  secureTextEntry,
  autoCapitalize,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  placeholder,
  icon,
}) => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={values[field]}
        onChangeText={handleChange(field)}
        onBlur={handleBlur(field)}
        placeholder={placeholder}
        placeholderTextColor="#00bbd5"
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize || "none"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  form: {
    marginBottom: 10,
  },
  iconLock: {
    color: "#00bbd5",
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
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 20,
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
    color: "#00bbd5",
    backgroundColor: "#fff",
    opacity: 1,
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
  contactInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
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

export default FormField;
