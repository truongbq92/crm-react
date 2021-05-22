import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Appointment = () => {
    return (
      <View style={styles.container}>
        <Text>SAppointment Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
