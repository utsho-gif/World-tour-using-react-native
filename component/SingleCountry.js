import { View, Text, Image } from "react-native";
import React from "react";

export default function SingleCountry({ country }) {
  const { name, flags } = country;
  return (
    <View>
      <Image
        source={{
          uri: flags.png,
        }}
        style={{ height: 200, width: 200, borderRadius: 100 }}
      ></Image>
      <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 20, marginTop: 20}}>{name.common}</Text>
    </View>
  );
}
