import React from "react";
import { Formik } from "formik";
import {
  Button, TextInput, StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { View } from "../../../components/Themed";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";
import FormField from "../../core/FormField";
import * as Yup from "yup";

const image = require("../../../assets/images/blue.png");
const logo = require("../../../assets/logo/logo-white.png");

export interface SignInFormValues {
  username: string;
  password: string;
  appCode: string;
  platform: string;
}

interface Props {
  onSubmit: (values: SignInFormValues) => void;
  loading?: boolean;
}

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
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    // opacity: 1,
    justifyContent: "center",
  },
  stretch: {
    width: 400,
    height: 200,
    resizeMode: "contain",
  },
  logo: {
    padding: 1,
    alignSelf: "center",
    marginTop: Constants.statusBarHeight + 80,
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#00bbd5",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonLoginText: {
    color: "#fff",
    textAlign: "center",
  },
  footer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  loginInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  loginInfoText: {
    color: "#fff",
    textAlign: "center",
  },
});
export const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Nhập tên đăng nhập"),
  password: Yup.string()
    .required("Nhập mật khẩu")
  // .min(6, "Password must have at least 6 characters"),
});

export const SignInForm: React.FunctionComponent<Props> = ({
  onSubmit,
  loading,
}) => {
  const initialValues: SignInFormValues = { username: "truongbq", password: "Becon922002!@2", appCode: "venesa_crm", platform: "web" };

  return (
    // <Formik initialValues={initialValues} onSubmit={onSubmit}>
    //   {({ handleChange, handleBlur, submitForm, values }) => (
    //     <View>
    //       <TextInput
    //         style={styles.input}
    //         onChangeText={handleChange("username")}
    //         onBlur={handleBlur("username")}
    //         value={values.username}
    //       />
    //       <View style={styles.spacer} />
    //       <TextInput
    //         style={styles.input}
    //         onChangeText={handleChange("password")}
    //         onBlur={handleBlur("password")}
    //         value={values.password}
    //         secureTextEntry
    //       />
    //       <Button onPress={submitForm} title="Submit" disabled={loading} />
    //     </View>
    //   )}
    // </Formik>

    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground
              source={image}
              style={styles.imageBackground}
            >
              <View style={styles.logo}>
                <Image style={styles.stretch} source={logo} />
                <View style={styles.textWrapper}>
                  {/* <Text style={styles.hiText}>Xin chào!</Text> */}
                  {/* <Text style={styles.userText}>BUI QUANG TRUONG</Text> */}
                </View>
              </View>
              <View style={styles.content}>
                <KeyboardAwareScrollView
                  style={styles.content}
                  showsVerticalScrollIndicator={false}
                  keyboardShouldPersistTaps="handled"
                  extraScrollHeight={150}
                >
                  <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {({ handleChange, handleBlur, submitForm, values,
                      errors,
                      touched, }) => (
                      <View>
                        <FormField
                          field="username"
                          autoCapitalize="words"
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          placeholder="Tên đăng nhập"
                          icon="user"
                        />

                        <FormField
                          field="password"
                          secureTextEntry={true}
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          placeholder="Mật khẩu"
                          icon="lock"
                        />
                        <TouchableOpacity
                          onPress={submitForm}
                          style={styles.buttonLogin} disabled={loading}
                        >
                          <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </Formik>
                </KeyboardAwareScrollView>
                <View style={styles.footer}>
                  <View style={styles.loginInfo}>
                    <Text style={styles.loginInfoText}>
                      Sử dụng tài khoản đăng nhập máy tính cá nhân để đăng nhập
                      hệ thống CRM Mobile
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableWithoutFeedback>
        </>
      </SafeAreaView>
    </>
  );
};
