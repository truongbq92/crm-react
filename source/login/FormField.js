import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";

export default function FormField({
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
}) {
  return (
    <View style={styles.form}>
      <FontAwesome5 name={icon} style={styles.iconLock} />
      <TextInput
        style={styles.input}
        value={values[field]}
        onChangeText={handleChange(field)}
        onBlur={handleBlur(field)}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize || "none"}
      />

      {/* {touched[field] && errors[field] ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errors[field]}</Text>
        </View>
      ) : null} */}
    </View>
  );
}
