import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-elements";

const HomeCard = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Product Details", { product })}
    >
      <Card containerStyle={styles.card}>
        <Card.Image source={product.image} styles={styles.image} />
        <Card.Title style={styles.title}>{product.title}</Card.Title>
        <Card.Divider />
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.rating}>⭐ {product.rating}</Text>
        <Text style={styles.details}>See Details</Text>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {},
  image: {},
  content: {},
  title: {},
  price: {},
  rating: {},
  details: {},
});

export default HomeCard;
