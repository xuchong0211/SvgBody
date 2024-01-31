import React, { useEffect, useState } from "react";
import { Box, Fab, Image } from "@gluestack-ui/themed";
import { Camera, CameraType } from "expo-camera";
import { Button, View, Platform } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

export default function ImageManipulateScreen(props) {
  return <Container {...props} />;
}

function Container({ navigation, route, options, back }) {
  console.log(navigation);
  console.log(route);
  console.log(options);
  console.log(back);

  const { type, uri, slug } = route?.params || {};
  console.log("resource11111111111111111111", uri);

  const [ready, setReady] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // setImage({uri});
    (async () => {
      try {
        setImage({ uri });
        setReady(true);
      } catch (e) {
        console.log("error ", e);
        console.log("error 222222222222", e.message);
      }
    })();
  }, []);


  const _manipulate = async (actions : any[] = [], saveOptions: any ) => {
    if (ready) {
      setReady(false);
      const manipResult = await manipulateAsync(
        image.uri,
          actions,
        saveOptions || { compress: 1, format: SaveFormat.PNG },
      );
      console.log("manip   Result 5555555555555555555555555", manipResult);
      setImage({ uri: manipResult.uri });

      setReady(true);
    }
  };

    const _rotate90 = () => {
        _manipulate([{ rotate: 90 }], null);
    };

    const _flipVertical = () => {
        _manipulate([{ flip: FlipType.Vertical }], null);
    };
    const _compress = (compress : number) => {
        _manipulate([], { compress: compress, format: SaveFormat.PNG });
    };

    const _imagePicker = () => {
        // ImagePicker.
    };

  const _renderImage = () => {
    console.log("333333333333333333333333333", image);
    return <Image source={{ uri: image.uri }} />;
  };

  if (image) {
    console.log("resource11111111111111111111", image);
    return (
      <Box h="100%" w="100%" backgroundColor="black" pt="20%">
        <Box h="75%" w="100%" alignItems="center">
          <Image
            size="full"
            borderRadius="$none"
            source={{
              uri: image.uri,
            }}
          />
        </Box>
          {
              ready &&
        <Box
          h="15%"
          w="100%"
          my="5%"
          sx={{
            _dark: {
              bg: "$backgroundDark900",
            },
          }}
        >
          <Fab
            backgroundColor="white"
            p={2}
            placement="bottom center"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            onPress={() => {
              // navigation.goBack();

                _rotate90();
              // navigation.replace("Upload", {
              //   type: route?.params?.type,
              //   uri: image.uri,
              // });
            }}
          >
            <MaterialCommunityIcons name="check" color="black" size={32} />
          </Fab>

          <Fab
            backgroundColor="white"
            size="md"
            placement="bottom right"
            mr="$5"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialCommunityIcons
              name="arrow-u-left-bottom"
              color="black"
              size={21}
            />
          </Fab>
        </Box>
          }

      </Box>
    );
  }

  return (
    <Box h="100%" w="100%" backgroundColor="black" pt="20%">
      <Box h="75%" w="100%" alignItems="center">
        {ready && image && _renderImage()}
      </Box>
      <Box
        h="15%"
        w="100%"
        my="5%"
        sx={{
          _dark: {
            bg: "$backgroundDark900",
          },
        }}
      >
        <Fab
          backgroundColor="white"
          p={2}
          placement="bottom center"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
          onPress={() => {
            // navigation.goBack();
            navigation.replace("Upload", {
              type: route?.params?.type,
              uri: resource.uri,
            });
          }}
        >
          <MaterialCommunityIcons name="check" color="black" size={32} />
        </Fab>

        <Fab
          backgroundColor="white"
          size="md"
          placement="bottom right"
          mr="$5"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
          onPress={() => {
            // _rotate90andFlip();
            //   navigation.goBack();

            navigation.replace("Camera", {
              type: route?.params?.type,
            });
          }}
        >
          <MaterialCommunityIcons
            name="arrow-u-left-bottom"
            color="black"
            size={21}
          />
        </Fab>
      </Box>
    </Box>
  );
}
