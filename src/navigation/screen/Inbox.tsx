import React from "react";
import { Box, HStack, Image, Heading } from "@gluestack-ui/themed";
import UploadButton from "../../component/UploadButton";
import { ScrollView } from "@gluestack-ui/themed/build/components/Actionsheet/styled-components";
import { ImageList } from "../../component/common/images";

export default function Inbox(props) {
  return <Container {...props} />;
}

const getEmpty = () => <Box w="20%" h="$20" m="$2" />;

const getImage = (uri?: String) => (
  <Box w="20%" h="$20" bg="$blue300" m="$2">
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

const Container = ({ navigation, route, options, back }) => {
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
            console.log("2222222222222222222222222222222222222222");
            navigation.navigate("Camera", params);
          } else if (params.type == 3) {
            console.log("333333333333333333333333333333333333333");
            navigation.navigate("Camera", params);
          } else {
            console.log("11111111111111111111111111111111111");
            navigation.navigate("Upload", params);
          }
        }}
      />
    </Box>
  );
};
