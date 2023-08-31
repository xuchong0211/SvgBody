import React from "react";
import { Box, HStack, Image, Heading } from "@gluestack-ui/themed";
import UploadButton from "../../component/UploadButton";
import { ScrollView } from "@gluestack-ui/themed/build/components/Actionsheet/styled-components";
import {ImageList} from "../../component/common/images";

export default function MyFiles(props) {
  return <Container {...props} />;
}

const getImage = () => (
  <Image
    size="md"
    borderRadius="$none"
    source={{
      uri: "https://picsum.photos/200/300",
    }}
  />
);

const Container = ({ navigation }) => {
  return (
    <Box flex={1} backgroundColor="$white">
      <ScrollView px="$5" h="100%" mb="$2">
        <ImageList title="Today" number={6} />
        <ImageList title="Yesterday" number={4} />
        <ImageList title="Tuesday 19 April" number={3} />
      </ScrollView>
      <UploadButton
          onPress={(params) => {
            if (params.type == 2) {
              console.log("2222222222222222222222222222222222222222")
              navigation.navigate("Camera", params);
            } else if (params.type == 3) {
              console.log("333333333333333333333333333333333333333")
              navigation.navigate("Camera", params);
            } else {
              console.log("11111111111111111111111111111111111")
              navigation.navigate("Upload", params);
            }
          }}
      />
    </Box>
  );
};
