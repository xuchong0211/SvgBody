import {
  Box,
  Fab,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetItem,
  ActionsheetItemText,
  Divider,
} from "@gluestack-ui/themed";
import React from "react";
import { ICON_COLOR, PRIMARY_COLOR } from "../theme";
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const pickImage = async () => {
  try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      return result.assets[0].uri;
    }
  } catch (e) {
    console.log("cancel camera", e);
  }
};

const UploadButton = ({ onPress }: { onPress: (args: any) => void }) => {
  const [showActionSheet, setShowActionSheet] = React.useState(false);

  const handleClose = (type: number, uri: String) => {
    console.log("args", type);
    setShowActionSheet(false);
    if (type) {
      onPress({ type, uri });
    }
  };
  return (
    <Box flex={1}>
      <Fab
        size="sm"
        placement="bottom right"
        isDisabled={false}
        bg={PRIMARY_COLOR}
        mb="$2"
        onPress={() => setShowActionSheet(!showActionSheet)}
      >
        <MaterialCommunityIcons
          name="camera-plus-outline"
          color="white"
          size={32}
        />
      </Fab>
      <Actionsheet
        height="100%"
        isOpen={showActionSheet}
        onClose={handleClose}
        zIndex={999}
        useRNModal={false}
        closeOnOverlayClick={true}
        snapPoints={[20]}
      >
        <ActionsheetBackdrop />

        <ActionsheetContent height="30%" zIndex={999}>
          {/*<ActionsheetDragIndicatorWrapper>*/}
          {/*    <ActionsheetDragIndicator />*/}
          {/*</ActionsheetDragIndicatorWrapper>*/}

          <ActionsheetItem
            justifyContent="center"
            borderBottomColor={ICON_COLOR}
            borderBottomWidth={1}
            borderBottomLeftRadius={0}
            borderBottomRightRadius={0}
            onPress={() => {
              pickImage().then((uri) => {
                if (uri) {
                  handleClose(1, uri);
                } else {
                  setShowActionSheet(false);
                }
              });
            }}
          >
            <ActionsheetItemText>
              Upload files
              <Divider />
            </ActionsheetItemText>
          </ActionsheetItem>

          <ActionsheetItem
            justifyContent="center"
            borderBottomColor={ICON_COLOR}
            borderBottomWidth={1}
            borderBottomLeftRadius={0}
            borderBottomRightRadius={0}
            onPress={() => {
              handleClose(2);
            }}
          >
            <ActionsheetItemText>Take a photo</ActionsheetItemText>
          </ActionsheetItem>

          <ActionsheetItem
            justifyContent="center"
            onPress={() => handleClose(3)}
          >
            <ActionsheetItemText>Take a video</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};

export default UploadButton;
