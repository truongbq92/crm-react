import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormField from "../core/FormField";
import Constants from "expo-constants";
import {
  onSearchCustomer,
  SearchCustomerRequest,
} from "../core/services/customer.service";

export const CustomerScreen = () => {
  const [searchKeyword, onChangeSearchKeyword] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState("");

  const searchCustomer = async () => {
    const searchCustomerRequest: SearchCustomerRequest = {
      branchId: 11,
      customerInfo: searchKeyword,
      pageSize: 10,
      pageIndex: 1,
    };
    const response = await onSearchCustomer(searchCustomerRequest);
    console.log("111111111111", response?.data.customerList);
    setData(response?.data.customerList);
    console.log("22222222", data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={searchKeyword}
          onChangeText={onChangeSearchKeyword}
          placeholder=""
          placeholderTextColor="#fff"
          onKeyPress={searchCustomer}
        />
        <Ionicons
          style={styles.iconLock}
          name="md-search"
          size={32}
          color="green"
          onPress={searchCustomer}
        />
      </View>
      <Text style={styles.infoSearchText}>
        Nhập thông tin tìm kiếm theo SĐT/Mã định danh/Mã KH/Tên KH...
      </Text>
      <View style={styles.content}>
        <FlatList style={styles.list}
        data={data}
        keyExtractor={item=>item.customerId}
        renderItem={({item,index})  =>{
            return <View>
                <Text>{item.fullName}</Text>
            </View>
        }}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00bbd5",
  },
  form: {
    marginBottom: 10,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#00bbd5",
  },
  content: {
    backgroundColor: "#fff",
    flex: 1,
  },
  input: {
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#fff",
    // backgroundColor: "#00bbd5",
    textAlign: "left",
    textAlignVertical: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },
  iconLock: {
    color: "#fff",
    position: "absolute",
    fontSize: 18,
    top: 16,
    right: 22,
    zIndex: 10,
  },
  infoSearchText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  list:{
      flex: 1,
      padding: 8
  }
});

export default CustomerScreen;
