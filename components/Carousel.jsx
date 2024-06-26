import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
} from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Carousel = ({ item, index, scrollX }) => {
  const { width } = Dimensions.get("window");
  const rnstyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            0,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0, 1, width * 0],
            "clamp"
          ),
        },
        {
          scale: interpolate(
            0,
            [(index - 1) * width, index * width, (index + 1) * width],
            [1, 1, 1],
            "clamp"
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[{ width, height: hp(30) }, rnstyle]}
      className=" justify-center items-center"
      key={item.id}
    >
      <Image
        source={item.image}
        className="w-[90%] h-full rounded-lg"
        resizeMode="cover"
      />
    </Animated.View>
  );
};

export default Carousel;
