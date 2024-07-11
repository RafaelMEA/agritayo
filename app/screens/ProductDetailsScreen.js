import React from "react";
import { View, Image, Text, StyleSheet, Button } from "react-native";

function ProductDetailsScreen({ navigation, route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>
        Description:{"\n"}
        {product.description}
      </Text>
      <Text style={styles.rating}>
        Product Rating: {"\n"}⭐ {product.rating} Rating
      </Text>
      <Text style={styles.price}>
        Price: {"\n"}
        {product.price} {product.discount} % off
      </Text>
      <Text style={styles.seller}>
        Seller: {"\n"}
        {product.address}
      </Text>
      <Button title="Message Seller" onPress={() => navigation.navigate("")} />
      <Button title="Add to Cart" onPress={() => navigation.navigate("")} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
