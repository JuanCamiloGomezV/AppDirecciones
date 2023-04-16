import * as Location from "expo-location";

import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { COLORS } from "../constants";

const LocationService = ({ onLocation }) => {
  const [location, setLocation] = useState({});
  const handleGeoLocation = async () => {
    const hasPermission = await verifyGeoLocationPermission();
    if (!hasPermission) {
      return;
    }
    const location = await Location.getCurrentPositionAsync({ timeout: 5000 });
    console.log(location);
    setLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    onLocation(location.coords.latitude, location.coords.longitude);
  };

  const verifyGeoLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "No se puede acceder a la ubicación",
        "Es necesario conceder permisos para acceder a la ubicación",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {location ? (
          <Text>
            {location.lat} , {location.lng}
          </Text>
        ) : (
          <Text>Esperando ubicación...</Text>
        )}
      </View>
      <Button
        title="Obtener ubicación"
        color={COLORS.PEACH_PUFF}
        onPress={handleGeoLocation}
      />
    </View>
  );
};

export default LocationService;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.BLUSH,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
