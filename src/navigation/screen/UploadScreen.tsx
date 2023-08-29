import {
    Box,
    Divider,
    Heading,
    Image,
    Text,
    VStack
} from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function UploadScreen(props) {
  return <Container {...props}/>;
}

const TEXT_SIZE = "xs";
const ICON_SIZE = 32;
const ICON_COLOR = "#c4c4c4";

const Container = ({ navigation, route, options, back }) => {
    console.log(navigation);
    console.log(route);
    console.log(options);
    console.log(back);
    const {type, uri} = route?.params || {};

    const iconLayout = {
        m:"$2",
        w:"20%",
        // alignItem:"center",
        // backgroundColor: "red",
        borderWidth: 1,

        // alignItem:"center",
        // justifyContent:"center"

    };
    return (
        <Box flex={1} backgroundColor="$white">
            <ScrollView
                style={{ height: '100%' }}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <Box
                    height="40%"
                    w="100%"
                    alignItems="center"
                >
                    <Image
                        size="full"
                        borderRadius="$none"
                        source={{
                            uri : "https://picsum.photos/200/300",
                        }}
                    />
                </Box>

                <Box w="100%" my="$2" justifyContent="center" flexDirection="row">
                    <Box {...iconLayout}>
                        <Box w="100%" justifyContent="center" backgroundColor="transparent">
                            <MaterialCommunityIcons   name="download" color={ICON_COLOR} size={ICON_SIZE} />
                        </Box>
                        <Box w="100%" textAlign="center" backgroundColor="transparent">
                            <Text justifyContent="center" size={TEXT_SIZE} >Download</Text>
                        </Box>
                    </Box>
                    <Box {...iconLayout}>
                        <Box w="100%" alginSelf="center" backgroundColor="transparent">
                            <MaterialCommunityIcons name="send" color={ICON_COLOR} size={ICON_SIZE} />
                        </Box>
                        <Box w="100%" backgroundColor="transparent">
                            <Text size={TEXT_SIZE} >Email</Text>
                        </Box>
                    </Box>

                    <Box {...iconLayout}>
                        <Box w="100%" alginSelf="center" backgroundColor="transparent">
                            <MaterialCommunityIcons name="eye-off" color={ICON_COLOR} size={ICON_SIZE} />
                        </Box>
                        <Box w="100%" backgroundColor="transparent">
                            <Text size={TEXT_SIZE} >Flag as sensitive</Text>
                        </Box>
                    </Box>


                    <Box {...iconLayout}>
                        <Box w="100%" alginSelf="center" backgroundColor="transparent">
                            <MaterialCommunityIcons name="medical-bag" color={ICON_COLOR} size={ICON_SIZE} />
                        </Box>
                        <Box w="100%" backgroundColor="transparent">
                            <Text size={TEXT_SIZE} >Start new case</Text>
                        </Box>
                    </Box>


                </Box>

                <Divider my="$0.5" />

                <Box textAlign="left" m="$3">
                    <Heading color="#878787">File details</Heading>
                </Box>

                <Divider my="$0.5" ml="$3"/>

                <Box  justifyContent="center" alignItems="center">
                </Box>
            </ScrollView>
        </Box>
    );
};
