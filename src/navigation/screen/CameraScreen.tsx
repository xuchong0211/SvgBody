import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Image,
  Text,
  Heading,
  Fab,
  FabIcon,
  AddIcon,
} from "@gluestack-ui/themed";
import UploadButton from "../../component/UploadButton";
import { ScrollView } from "@gluestack-ui/themed/build/components/Actionsheet/styled-components";
import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity, View, Platform } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

export default function CameraScreen(props) {
  return <Container {...props} />;
}

function Container({ navigation, route, options, back }) {
  let camera: Camera;
  const [photo, setPhoto] = useState(null);
  const [type, setType] = useState(CameraType.back);
  // const [startCamera, setStartCamera] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  console.log("permission", permission);

  // const __startCamera = async () => {
  //     const {status} = await Camera.requestPermissionsAsync()
  //     if (status === 'granted') {
  //         // start the camera
  //         setStartCamera(true)
  //     } else {
  //         Alert.alert('Access denied')
  //     }
  // }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  }
  function take() {
    if (!camera) return;
    camera
      .takePictureAsync({
        onPictureSaved: (res) => {
          console.log("aaaaaaaaaaaa", res);
          setPhoto(res);
        },
      })
      .then((...args) => {
        console.log(args);
      });
  }
  if (!permission) {
    console.log("222222222222222222222222", permission);
    return null;
  }

  if (!permission?.granted) {
    // console.log("navigation", navigation);
    navigation.goBack();
  }
  console.log("Platform", Platform);
  if (photo) {
    return (
      <Box h="100%" w="100%" backgroundColor="black" pt="20%">
        <Box h="75%" w="100%" alignItems="center">
          <Image
            size="full"
            borderRadius="$none"
            source={{
              uri: photo.uri,
            }}
          />
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
            size="md"
            placement="bottom center"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            onPress={() => {
              navigation.goBack();
              navigation.navigate("Upload", { type: 2, uri: photo.uri });
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
              setPhoto(null);
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

  return (
    <Box h="100%" w="100%" backgroundColor="black" pt="20%">
      <Box h="75%" w="100%">
        <Camera
          style={{ width: "100%", height: "100%" }}
          type={type}
          ref={(r) => {
            camera = r;
          }}
        />
      </Box>

      <Box
        h="15%"
        w="100%"
        my="5%"
        alignItems="center"
        sx={{
          _dark: {
            bg: "$backgroundDark900",
          },
        }}
      >
        <Fab
          backgroundColor="white"
          size="md"
          placement="bottom left"
          ml="$5"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
          onPress={() => {
            toggleCameraType();
          }}
        >
          <Ionicons name={"sync-outline"} size={21} color="black" />
          {/*<MaterialCommunityIcons name="restore" color="black" size={21} />*/}
        </Fab>
        <Fab
          mt="$3"
          justifyContent="flex-start"
          backgroundColor="white"
          size="md"
          placement="bottom center"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
          onPress={() => {
            take();
          }}
        >
          <Ionicons name={"disc-outline"} size={32} color="black" />
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
    </Box>
  );
}
