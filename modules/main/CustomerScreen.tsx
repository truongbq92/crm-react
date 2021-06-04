import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  TouchableHighlight
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormField from "../core/FormField";
import Constants from "expo-constants";
import {
  onSearchCustomer,
  SearchCustomerRequest,
} from "../core/services/customer.service";

export class Customer {
  customerId: any;
  customerCode: any;
  bravoCustomerCode: any;
  branchId: any;
  fullName: any;
  // nickName;
  // middleName;
  // givenName;
  // mobile;
  // mobileOther;
  // nationality;
  // customerType;
  // idCardNo;
  // idCardDateOfIssue;
  // idCardProvinceCode;
  // idCardDistrictCode;
  // idCardWardCode;
  // idCardPlace;
  // idCardAreaDetail;
  // idCardAddress;
  // citizenIdCardNo;
  // citizenIdCardDateOfIssue;
  // citizenIdCardProvinceCode;
  // citizenIdCardDistrictCode;
  // citizenIdCardWardCode;
  // citizenIdCardAddress;
  // citizenIdCardPlace;
  // citizenIdCardAreaDetail;
  // passportNo;
  // passportDateOfIssue;
  // passportPlace;
  // passportProvinceCode;
  // passportDistrictCode;
  // passportWardCode;
  // passportAreaDetail;
  // passportAddress;
  // drivingLicenseNo;
  // drivingLicenseDateOfIssue;
  // drivingLicensePlace;
  // drivingLicenseProvinceCode;
  // drivingLicenseDistrictCode;
  // drivingLicenseWardCode;
  // drivingLicenseAreaDetail;
  // drivingLicenseAddress;
  // birthday;
  // yearOfBirth;
  // noEmailAddress;
  // emailAddress;
  // emailAddressOther;
  // gender;
  // provinceCode;
  // districtCode;
  // wardCode;
  // currentAreaDetail;
  // currentAddress;
  // otherAddress;
  // saleConsultantId;
  // saleConsultantCode;
  // saleConsultantName;
  // flowStaffId;
  // flowStaffCode;
  // flowStaffName;
  // taxCode;
  // maritalStatus;
  // career;
  // companyName;
  // companyProvinceCode;
  // companyDistrictCode;
  // companyWardCode;
  // companyAreaDetail;
  // companyAddress;
  // incomePerMonthly;
  // jobPlace;
  // academicLevel;
  // vnsStaffCode;
  // referenceCode;
  // refererCustomerCode;
  // refererStaffCode;
  // cs2CustomerId;
  // status;
  // bravoGuid;
  // deleted;
  // createdDate;
  // createdBy;
  // updatedDate;
  // updatedBy;
  // militaryIdCardNo;
  // militaryIdCardDateOfIssue;
  // militaryIdCardPlace;
  // militaryIdCardProvinceCode;
  // militaryIdCardDistrictCode;
  // militaryIdCardWardCode;
  // militaryIdCardAreaDetail;
  // militaryIdCardAddress;
  // loyaltyRank;
  // loyaltyAmount;
  // // Điểm hiện tại
  // activePoint;
  // // Tổng điểm tích lũy
  // totalEarnedPoint;
  // // Tổng điểm đã sử dụng
  // totalPointsUsed;
  // // Tổng tiền tích lũy
  // totalEarnedAmount;
  // // Tổng tiền đã sử dụng loyalty
  // totalPaymentAmount;
  // desciption;
  // mobileContact;
  // mbsBalance: number;
  // mbsTotalAccumulateBalance: number;
  // mbsTotalPaymentAmount: number;
  // mbsDepositAmount: number;
  // centerShortName: string;
  // coachStaffId;
  // coachStaffCode;
  // coachStaffName;
}

export const CustomerScreen = () => {
  const [searchKeyword, onChangeSearchKeyword] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const searchCustomer = async () => {
    const searchCustomerRequest: SearchCustomerRequest = {
      branchId: 11,
      customerInfo: searchKeyword,
      pageSize: 10,
      pageIndex: 1,
    };
    const response = await onSearchCustomer(searchCustomerRequest);
    setData(response?.data.customerList);
  };

  const renderItem = ({ item }: { item: any }) => (
    // <TouchableHighlight
    //   onPress={() => setSelectedId(item.customerId)}>
    <View style={styles.item}>
      <Text style={styles.title}>{item.fullName}</Text>
    </View>
    // </TouchableHighlight>
  );


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
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.customerId.toString()} />
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
  list: {
    flex: 1,
    padding: 8
  },
  title: {
    fontSize: 32,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default CustomerScreen;
