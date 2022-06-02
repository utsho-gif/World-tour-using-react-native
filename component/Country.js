import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import SingleCountry from "./SingleCountry";

export default function Country() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearch(data)
        setCountries(data)
      });
  }, []);

  const handleSearch = text => {
    const filtered = countries.filter(country => country.name.common.includes(text));
    setSearch(filtered);
  }

  return (
    <View>
      <Text style={styles.header}>Countries: {search.length}</Text>
      <TextInput onChangeText={handleSearch} style={styles.input}></TextInput>
      <ScrollView>
        {search.map((country) => (
          <SingleCountry key={country.ccn3} country={country}></SingleCountry>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    fontSize: 40,
    color: 'brown'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
})
