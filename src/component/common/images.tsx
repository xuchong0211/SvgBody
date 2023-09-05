import React from "react";
import {Dimensions} from "react-native";
import {Box, HStack, Image, Heading, Pressable} from "@gluestack-ui/themed";
import _range from "lodash/range";

const COLUMN_COUNT = 4;
const windowWidth = Dimensions.get("window").width;

const w = windowWidth / COLUMN_COUNT - 4 * (COLUMN_COUNT + 3);
const h = "$16";
//
// const w = "20%";
// const h = "$20";

const getEmptySpan = () => <Box w={w} h={h} mx="$2" my="$4" />;

const getImage = (uri?: String) => (
  <Box w={w} h={h} mx="$2" my="$4">
    <Image
      size="md"
      borderRadius="$none"
      source={{
        // uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        uri: uri || "https://picsum.photos/200/300",
      }}
    />
  </Box>
);
const getImages = (number) => _range(number).map(() => getImage());

export const ImageList = ({
  title,
  number,
  // onPress,
}: {
  title: String;
  number: number;
  // onPress?: (uri: string) => void;
}) => {
  const images = getImages(number);

  const span =
    images.length == COLUMN_COUNT
      ? 0
      : images.length < COLUMN_COUNT
      ? COLUMN_COUNT - (images.length % COLUMN_COUNT)
      : COLUMN_COUNT - (images.length % COLUMN_COUNT);

  console.log("windowWidth", windowWidth, w, span);
  return (
    <>
      <Box flex={1} my="$2">
        <Heading size="lg">{title}</Heading>
      </Box>
      <HStack
        mb="$5"
        w="100%"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        {images}
        {_range(span).map((_, index) => getEmptySpan())}
      </HStack>
    </>
  );
};
