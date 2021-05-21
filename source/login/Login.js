import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import BackgroundImage from "../../assets/images/blue.png";
import LogoVenesa from "../../assets/logo/logo-white.png";
import { styles, TEXT } from "./styles";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { validationSchema } from "./validation";
import FormField from "./FormField";
import { ErrorCode } from "./../core/constants/errorCode";

export default function Login() {
  const [data, setData] = useState({});
  function onSubmitHandler(values) {
    const dataLogin = JSON.stringify(values);
    if (dataLogin.userName == "" || dataLogin.password == "") {
      Alert.alert("Login fail!", "Form data: " + dataLogin);
    } else {
      handleLogin(values, navigation);
    }
  }

  const handleLogin = (values) => {
    const url = "http://192.168.76.6:8888/api/auth/v1.0/login";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.userName,
        password: values.password,
        appCode: "venesa_crm",
        platform: "web",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        if (
          json?.errorCode === ErrorCode.SYS_ERROR_OK &&
          json.data
        ) {
          Alert.alert("Đăng nhập thành công!", json.data.userInfo.fullName);
        } else {
          Alert.alert("Đăng nhập thất bại!", json.errorMessage);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function isFormValid(isValid, touched) {
    return isValid && Object.keys(touched).length !== 0;
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground
              source={BackgroundImage}
              style={styles.imageBackground}
            >
              <View style={styles.logo}>
                <Image style={styles.stretch} source={LogoVenesa} />
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
                  <Formik
                    initialValues={{
                      userName: "",
                      password: "",
                    }}
                    onSubmit={onSubmitHandler}
                    validationSchema={validationSchema}
                  >
                    {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                    }) => (
                      <>
                        <FormField
                          field="userName"
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
                          onPress={handleSubmit}
                          style={styles.buttonLogin}
                        >
                          <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
                        </TouchableOpacity>
                      </>
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
}
