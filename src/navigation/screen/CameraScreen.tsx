import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Fab,
} from "@gluestack-ui/themed";
import { Camera, CameraType } from "expo-camera";
import { View, Platform } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";

export default function CameraScreen(props) {
  return <Container {...props} />;
}

function Container({ navigation, route, options, back }) {

  const takePhoto = route?.params?.type == 2;
  const takeVideo = route?.params?.type == 3;
  let camera: Camera;
  const [resource, setResource] = useState(null);
  const [recording, setRecording] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [permissionMicrophone, requestMicrophonePermission] = Camera.useMicrophonePermissions();

  useEffect(() => {
    requestPermission();
    if (takeVideo) {
        requestMicrophonePermission();
    }
  }, []);

  console.log("permission", permission);
  console.log("permission", permissionMicrophone);

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
          setResource(res);
        },
      })
      .then((...args) => {
        console.log(args);
      });
  }

  function filming() {

    if (!camera) return;
    try {

        if (!recording) {
            setRecording(true)
            camera
              .recordAsync()
              .then((res) => {
                  console.log("video", res);
                  setResource(res);
              });
        } else {
            setRecording(false);
            camera.stopRecording();
        }
    } catch (e) {
        console.log(e.message);

    }
  }

    if (takePhoto) {

        if (!permission) {
            return null;
        }

        if (!permission?.granted) {
            navigation.goBack();
        }
    }

    if (takeVideo) {

        if (!permission) {
            return null;
        }

        if (!permission?.granted) {
            navigation.goBack();
        }

        if (!permissionMicrophone) {
            return null;
        }

        if (!permissionMicrophone?.granted) {
            navigation.goBack();
        }

    }



  // console.log("Platform", Platform);
  if (resource) {
    return (
      <Box h="100%" w="100%" backgroundColor="black" pt="20%">
        <Box h="75%" w="100%" alignItems="center">
          <Image
            size="full"
            borderRadius="$none"
            source={{
              uri: resource.uri,
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
            p={2}
            placement="bottom center"
            isHovered={false}
            isDisabled={false}
            isPressed={false}
            onPress={() => {
              // navigation.goBack();
              navigation.replace("Upload", { type: route?.params?.type, uri: resource.uri });
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
              setResource(null);
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

  if (takePhoto) {
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
                      backgroundColor="white"
                      size="xs"
                      p={2}
                      placement="bottom center"
                      isHovered={false}
                      isDisabled={false}
                      isPressed={false}
                      onPress={() => {
                          take();
                      }}
                  >
                      <View
                          style={{
                              borderWidth: 2,
                              borderRadius: 25,
                              borderColor: "black",
                              height: 50,
                              width: 50,
                          }}
                      />
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
          backgroundColor={recording ? "red": "white"}
          size="xs"
          p={2}
          placement="bottom center"
          isHovered={false}
          isDisabled={false}
          isPressed={false}
          onPress={() => {
            filming();
          }}
        >
            <View
                style={{
                    borderWidth: 2,
                    borderRadius: 25,
                    borderColor: "black",
                    height: 50,
                    width: 50,
                }}
            />
        </Fab>

          {
              !recording &&
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
          }
      </Box>
    </Box>
  );
}
