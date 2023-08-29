import {
    Box,
    Fab,
    FabIcon,
    AddIcon,
    Actionsheet,
    ActionsheetBackdrop,
    ActionsheetContent,
    ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator, ActionsheetItem, ActionsheetItemText
} from '@gluestack-ui/themed';
import React from "react";
import {PRIMARY_COLOR} from "../theme";
import * as ImagePicker from "expo-image-picker";



const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        // aspect: [4, 3],
        quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
        return result.assets[0].uri
    }
};

const UploadButton = ({onPress}: {onPress: (args: any) => void}) => {

    const [showActionSheet, setShowActionSheet] = React.useState(false)

    const handleClose = (type: number, uri: String) => {
        console.log("args", type);
        onPress({type, uri})
    }
    return (
        <Box flex={1}>
            <Fab
                size="lg"
                placement="bottom right"
                isDisabled={false}
                bg={PRIMARY_COLOR}
                mb="$6"
                onPress={() => setShowActionSheet(!showActionSheet)}
            >
                <FabIcon as={AddIcon} m="$3" size="$5"/>
            </Fab>
            <Actionsheet isOpen={showActionSheet} onClose={handleClose} zIndex={999} useRNModal={true}>
                <ActionsheetBackdrop />
                <ActionsheetContent zIndex={999}>
                    <ActionsheetDragIndicatorWrapper>
                        <ActionsheetDragIndicator />
                    </ActionsheetDragIndicatorWrapper>
                    <ActionsheetItem onPress={() => handleClose(1)}>
                        <ActionsheetItemText>Upload files</ActionsheetItemText>
                    </ActionsheetItem>
                    <ActionsheetItem onPress={() => {
                        pickImage().then((uri) => {
                            console.log("2222222222222222222", uri);
                            if (uri) {
                                handleClose(2, uri);
                            } else {
                                setShowActionSheet(false);
                            }
                        })
                    }}>
                        <ActionsheetItemText>Take a photo</ActionsheetItemText>
                    </ActionsheetItem>
                    <ActionsheetItem onPress={() => handleClose(3)}>
                        <ActionsheetItemText>Take a video</ActionsheetItemText>
                    </ActionsheetItem>
                </ActionsheetContent>
            </Actionsheet>
        </Box>
    );
};

export default UploadButton
