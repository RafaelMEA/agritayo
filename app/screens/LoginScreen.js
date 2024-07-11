import React from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";

function LoginScreen({ navigation }) {
  return (
    <View styles={styles.background}>
      <Text stlyles={styles.textLogin}>Login</Text>
      <TextInput styles={styles.input} placeholder="Username" />
      <TextInput
        styles={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        onPress={() => navigation.navigate("NavigationBar")}
        title="Login"
      />
      <Button
        onPress={() => navigation.navigate("RegisterBuyers")}
        title="Register as Buyers"
      />
      <Button
        onPress={() => navigation.navigate("RegisterFarmers")}
        title="Register as Farmers"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {},

  textLogin: {},

  input: {},
});

export default LoginScreen;
