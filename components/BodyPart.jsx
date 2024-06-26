import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
const BodyPartsCard = ({ router, item, index }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        key={index}
        style={{ width: wp(44), height: wp(52) }}
        className="rounded-lg overflow-hidden flex justify-end"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          className="absolute"
          style={{ width: wp(44), height: wp(52) }}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(44), height: wp(20) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-lg justify-end pb-4"
        >
          <Text
            className="text-center font-semibold text-white"
            style={{ fontSize: hp(2.3) }}
          >
            {item.name}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};
const BodyPart = () => {
  const router = useRouter();
  return (
    <View className="mx-4">
      <Text style={{ fontSize: hp(2.5) }} className="font-bold tracking-wider">
        BodyPart
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ gap: 10, paddingBottom: 50, paddingTop: 20 }}
        renderItem={({ item, index }) => (
          <BodyPartsCard item={item} router={router} index={index} />
        )}
      />
    </View>
  );
};

export default BodyPart;
