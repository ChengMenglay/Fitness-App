import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const BodyPartsCard = ({ item, index }) => {
  return (
    <View key={index}>
      <TouchableOpacity className="flex py-3 space-y-2">
        <View className="rounded-lg shadow bg-neutral-200">
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-lg "
          />
        </View>
        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-700 font-semibold ml-1 tracking-wide"
        >
          {item?.name.length > 20
            ? item?.name.slice(0, 20) + "..."
            : item?.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const ExerciseList = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        renderItem={({ item, index }) => (
          <BodyPartsCard item={item} index={index} />
        )}
      />
    </View>
  );
};

export default ExerciseList;
