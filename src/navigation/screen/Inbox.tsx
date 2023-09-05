import React from "react";
import { Box } from "@gluestack-ui/themed";
import UploadButton from "../../component/UploadButton";
import { ScrollView } from "@gluestack-ui/themed/build/components/Actionsheet/styled-components";
import { ImageList } from "../../component/common/images";

export default function Inbox(props) {
  return <Container {...props} />;
}


const Container = ({ navigation, route, options, back }) => {
  const onPress = (uri) => {
      navigation.navigate("Upload", {type: 2, uri })
  };
  return (
    <Box flex={1} backgroundColor="$white">
      <ScrollView px="$5" h="100%" mb="$2">
          <ImageList title="Today" number={6} onPress={onPress} />
          <ImageList title="Yesterday" number={4} onPress={onPress} />
          <ImageList title="Tuesday 19 April" number={3} onPress={onPress} />
      </ScrollView>
      <UploadButton
        onPress={(params) => {
          if (params.type == 2) {
            navigation.navigate("Camera", params);
          } else if (params.type == 3) {
            navigation.navigate("Camera", params);
          } else {
            navigation.navigate("Upload", params);
          }
        }}
      />
    </Box>
  );
};
