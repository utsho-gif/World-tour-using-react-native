import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import SingleCountry from "./SingleCountry";

export default function Country() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <View>
      <Text>Countries: {countries.length}</Text>
      <ScrollView>
        {countries.map((country) => (
          <SingleCountry key={country.id} country={country}></SingleCountry>
        ))}
      </ScrollView>
    </View>
  );
}
