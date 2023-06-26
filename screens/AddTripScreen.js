import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import BackButton from "../components/backButton";
import randomImage from "../asset/randomImage";
import { useNavigation } from "@react-navigation/native";

export default function AddTripScreen() {
  const [place, setPlace] = useState("");
  const [country, setCounty] = useState("");

  const navigation = useNavigation();
  const handleAddTrip = () => {
    if (place && country) {
      //good to go
      navigation.navigate("Home");
    } else {
      //error
    }
  };
  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full">
        <View>
          <View>
            <BackButton />
            <Text className={`${colors.heading} text-xl font-bold text-center`}>
              Add Trip
            </Text>
          </View>
          <View className="flex-row justify-center my-3 mt-5">
            <Image className="w-72 h-72" source={require("../asset/4.png")} />
          </View>
          <View className="space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>
              Where on Earth?
            </Text>
            <TextInput
              value={place}
              onChangeText={(value) => setPlace(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
            <Text className={`${colors.heading} text-lg font-bold`}>
              Which County
            </Text>
            <TextInput
              value={country}
              onChangeText={(value) => setCounty(value)}
              className="p-4 bg-white rounded-full mb-3"
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={handleAddTrip}
            style={{ backgroundColor: colors.button }}
            className="my-6 rounded-full p-3 shadow-sm mx-2"
          >
            <Text className="text-center text-white font-bold">Add Trip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
