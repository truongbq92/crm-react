import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Button,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormField from "../core/FormField";
import Constants from "expo-constants";
import {
  onSearchCustomer,
  SearchCustomerRequest,
} from "../core/services/customer.service";
import Modal from "react-native-modal";
import { StatusBar } from "expo-status-bar";

const image = require("../../assets/images/background/1.jpg");

const unknownAvatar = require("../../assets/images/avatar/unknown.png");

export interface Customer {
  customerId: any;
  customerCode: any;
  // bravoCustomerCode: any;
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
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();
  const [isModalVisible, setModalVisible] = useState(false);

  const searchCustomer = async () => {
    const searchCustomerRequest: SearchCustomerRequest = {
      branchId: 11,
      customerInfo: searchKeyword,
      pageSize: 20,
      pageIndex: 1,
    };
    const response = await onSearchCustomer(searchCustomerRequest);
    setData(response?.data.customerList);
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableHighlight
      underlayColor={"transparent"}
      onPress={() => (toggleModal(item), setSelectedCustomer(item))}
    >
      <View style={styles.item}>
        <View>
          <Image source={unknownAvatar} style={styles.avatar}></Image>
        </View>
        <View>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.customerCode}>Mã KH: {item.customerCode}</Text>
          <Text style={styles.identifierCode}>
            Mã định danh: {item.idCardNo}
          </Text>
          <Text style={styles.customerMobile}>SĐT: {item.mobile}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
  function toggleModal(item: Customer): void {
    console.log("1", item);
    setSelectedCustomer(item);
    setModalVisible(true);
    console.log("2", selectedCustomer);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Image
          source={image}
          style={styles.imageBackground}
          blurRadius={80}
        ></Image>
        {/* <View style={styles.form}> */}

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
        {/* </View> */}
        <Text style={styles.infoSearchText}>
          Nhập thông tin tìm kiếm theo SĐT/Mã định danh/Mã KH/Tên KH...
        </Text>
        {/* <View style={styles.content}> */}
        <FlatList
          contentContainerStyle={{
            padding: 20,
            paddingTop: Constants.statusBarHeight || 42,
          }}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.customerId.toString()}
        />
        {/* </View> */}
        <Modal isVisible={isModalVisible}>
          <View style={styles.modal}>
            {/* <Text>{selectedCustomer.fullName}</Text> */}
          </View>
          ;
          <Button title="Đóng" onPress={() => setModalVisible(false)} />
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    marginBottom: 10,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
  content: {
    backgroundColor: "#fff",
    flex: 1,
  },
  input: {
    margin: 5,
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#fff",
    // backgroundColor: "#00bbd5",
    textAlign: "left",
    textAlignVertical: "center",
    borderColor: "#fff",
    borderWidth: 1,
    marginTop: Constants.statusBarHeight,
  },
  iconLock: {
    color: "#fff",
    position: "absolute",
    fontSize: 18,
    top: 16,
    right: 22,
    zIndex: 10,
    marginTop: Constants.statusBarHeight,
  },
  infoSearchText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  list: {
    flex: 1,
    padding: 8,
  },
  fullName: {
    fontSize: 16,
    color: "#6600ff",
  },
  customerCode: {
    fontSize: 12,
    opacity: 0.8,
  },
  identifierCode: {
    fontSize: 10,
    opacity: 0.8,
  },
  customerMobile: {
    fontSize: 10,
    opacity: 0.8,
  },
  item: {
    flexDirection: "row",
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.2)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  modal: {
    margin: 20,
    backgroundColor: "white",
    // borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    // opacity: 1,
    justifyContent: "center",
    position: "absolute",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
    backgroundColor: "white",
  },
});

export default CustomerScreen;
