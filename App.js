import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo";
import Login from "./source/login/Login";
export default function App() {
  return (
    // <View style={styles.containerBackground}>
    //   <ImageBackground
    //     source={require("./assets/images/login-bg.jpg")}
    //     style={styles.imageBackground}
    //   >
    //     <SafeAreaView style={styles.container}>
    //       <StatusBar style="light" />
    //       <View style={styles.containerLogo}>
    //         <Image
    //           style={styles.stretch}
    //           source={require("./assets/logo/login-logo.png")}
    //         />
    //       </View>
    //       <View style={styles.content}>
    //         <View style={styles.textWrapper}>
    //           <Text style={styles.hiText}>Xin chào!</Text>
    //           <Text style={styles.userText}>BUI QUANG TRUONG</Text>
    //         </View>
    //       </View>
    //       <View style={styles.form}>
    //         <TextInput style={styles.inputPassword} />
    //         <TouchableOpacity style={styles.buttonLogin}>
    //           <Text style={styles.buttonLoginText}>Đăng nhập</Text>
    //         </TouchableOpacity>
    //       </View>
    //       <View style={styles.action}>
    //         <TouchableOpacity style={styles.buttonAction}>
    //           <Text style={styles.buttonActionText}>Quên mật khẩu</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity style={styles.buttonAction}>
    //           <Text style={styles.buttonActionText}>Thoát tài khoản</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </SafeAreaView>
    //   </ImageBackground>
    // </View>
    <Login></Login>
  );
}

// const TEXT = {
//   color: "#fff",
//   textAlign: "center",
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: "#00b1c7",
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // paddingTop: Constants.statusBarHeight,
//   },
// });
