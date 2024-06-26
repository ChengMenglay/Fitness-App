import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { sliderImages } from "../constants";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "./Carousel";

const ImageSlide = () => {
  const scrollX = useSharedValue(0);

  return (
    <View>
      <FlatList
        data={sliderImages}
        horizontal
        keyExtractor={(item) => item.id}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <Carousel item={item} index={index} scrollX={scrollX} />;
        }}
      />
    </View>
  );
};

export default ImageSlide;
