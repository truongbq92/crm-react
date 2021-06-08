import React from "react";
import { Formik } from "formik";
import {
  Button,
  TextInput,
  StyleSheet,
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

const image = require("../../../assets/images/background/4.png");
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
    // justifyContent: "space-between",
    backgroundColor: '#fff'
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'transparent',
  },
  textWrapper: {
    marginTop: 0,
    marginBottom: 30,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // position: 'absolute',
    // width: '100%',
    ...StyleSheet.absoluteFillObject
  },
  stretch: {
    width: 400,
    height: 200,
    resizeMode: "contain",
    backgroundColor: 'transparent',
    marginTop: Constants.statusBarHeight + 80,
  },
  logo: {
    flex: 1,
    padding: 1,
    alignSelf: "center",
    marginTop: Constants.statusBarHeight,
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
    backgroundColor: 'transparent',
  },
  loginInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: 'transparent',
  },
  loginInfoText: {
    color: "#fff",
    textAlign: "center",
  },
});
export const validationSchema = Yup.object().shape({
  userName: Yup.string().required("Nhập tên đăng nhập"),
  password: Yup.string().required("Nhập mật khẩu"),
  // .min(6, "Password must have at least 6 characters"),
});

export const SignInForm: React.FunctionComponent<Props> = ({
  onSubmit,
  loading,
}) => {
  const initialValues: SignInFormValues = {
    username: "truongbq",
    password: "Becon922002!@2",
    appCode: "venesa_crm",
    platform: "web",
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>

        <ImageBackground source={image} style={styles.imageBackground}>

        </ImageBackground>

        <Image style={styles.stretch} source={logo} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* <View style={styles.logo}>
          <Image style={styles.stretch} source={logo} />
          <View style={styles.textWrapper}>
            <Text style={styles.hiText}>Xin chào!</Text>
            <Text style={styles.userText}>BUI QUANG TRUONG</Text>
          </View>
        </View> */}
        <View style={styles.content}>
          <KeyboardAwareScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={150}
          >
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({
                handleChange,
                handleBlur,
                submitForm,
                values,
                errors,
                touched,
              }) => (
                <View style={{
                  backgroundColor: 'transparent'
                }}>
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
                    style={styles.buttonLogin}
                    disabled={loading}
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
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};
