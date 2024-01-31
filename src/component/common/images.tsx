import React from "react";
import { Dimensions } from "react-native";
import { Box, HStack, Image, Heading, Pressable } from "@gluestack-ui/themed";
import _range from "lodash/range";

const COLUMN_COUNT = 4;
const windowWidth = Dimensions.get("window").width;

const w = windowWidth / COLUMN_COUNT - 4 * (COLUMN_COUNT + 3);
const h = "$16";
//
// const w = "20%";
// const h = "$20";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const getEmptySpan = () => <Box w={w} h={h} mx="$2" my="$4" />;

const getImage = (uri?: String, onPress?: (uri) => void) => {
  const link =
    uri ||
    `https://picsum.photos/${randomIntFromInterval(
      197,
      203,
    )}/${randomIntFromInterval(297, 303)}`;
  // const link = uri || "https://picsum.photos/200/300";
  return (
    <Box w={w} h={h} mx="$2" my="$4">
      <Pressable
        onPress={() => {
          if (onPress) {
            onPress(link);
          }
        }}
      >
        <Image
          size="md"
          borderRadius="$none"
          source={{
            uri: link,
          }}
        />
      </Pressable>
    </Box>
  );
};
const getImages = (number, onPress) =>
  _range(number).map(() => getImage(null, onPress));

export const ImageList = ({
  title,
  number,
  onPress,
}: {
  title: String;
  number: number;
  onPress?: (uri: string) => void;
}) => {
  const images = getImages(number, onPress);

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
