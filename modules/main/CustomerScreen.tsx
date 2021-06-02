import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import FormField from "../core/FormField";
import Constants from "expo-constants";

export const CustomerScreen = () => {
    const [searchKeyword, onChangeSearchKeyword] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.form}>
                <Ionicons style={styles.iconLock} name="md-search" size={32} color="green" />
                <TextInput
                    style={styles.input}
                    value={searchKeyword}
                    placeholder="Nhập mã KH, tên KH"
                    placeholderTextColor="#fff"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    form: {
        marginBottom: 10,
        marginTop: Constants.statusBarHeight + 0,
    },
    input: {
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 30,
        fontSize: 20,
        color: "#fff",
        backgroundColor: "#00bbd5",
        opacity: 0.5,
        textAlign: "center",
        textAlignVertical: "center",
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
});

export default CustomerScreen;