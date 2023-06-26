import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import ScreenWrapper from "../components/screenWrapper";
import { colors } from "../theme";
import randomImage from "../asset/randomImage";
import { ScrollView } from "react-native";
var items = [
  {
    id: 1,
    place: "Gujrat",
    country: "india",
  },
  {
    id: 2,
    place: "London eve",
    country: "England",
  },
  {
    id: 3,
    place: "Washington dc",
    country: "America",
  },
  {
    id: 4,
    place: "New york",
    country: "America",
  },
];

function HomeScreen() {
  return (
    <ScreenWrapper className="flex-1 px-4">
      <View className="flex-row justify-between items-center">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>
          Expensify
        </Text>
        <TouchableOpacity className="p-2 px-2 bg-white border border-gray-200 rounded-full">
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 my-4">
        <Image source={require("../asset/banner.png")} className="w-60 h-60" />
      </View>
      <View className="px-1 space-x-3 space-y-3">
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`}>
            Recent Trips
          </Text>
          <TouchableOpacity className="p-2 px-2 bg-white border border-gray-200 rounded-full">
            <Text>Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 430 }}>
          <FlatList
            style={{ zIndex: 1 }}
            keyExtractor={(item) => item.id}
            data={items}
            numColumns={2}
            contentInset={{ top: 0, bottom: 30, left: 0, right: 0 }}
            contentInsetAdjustmentBehavior="automatic"
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity className="bg-white p-3 rounded-2xl mb-3 shaodw-sm justify-center">
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2" />
                    <Text className={`${colors.heading} font-bold mx-auto`}>
                      {item.place}
                    </Text>
                    <Text className={`${colors.heading} text-xs mx-auto`}>
                      {item.country}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
export default HomeScreen;
