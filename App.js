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
   <Login></Login>
  );
}
