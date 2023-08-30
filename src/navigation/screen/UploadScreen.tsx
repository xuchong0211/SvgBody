import {
    Box, Button, ButtonText,
    Divider,
    HStack,
    Image,
    Text, Textarea, TextareaInput,
} from '@gluestack-ui/themed';
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {ICON_COLOR, PRIMARY_COLOR, TEXT_COLOR} from "../../theme";
import {ScrollView} from "@gluestack-ui/themed/build/components/Actionsheet/styled-components";

export default function UploadScreen(props) {
  return <Container {...props}/>;
}

const TEXT_SIZE = "2xs";
const ICON_SIZE = 32;

const AddPatient = () => {
    return <Box alignContent="center" m="$3" mt="$8" alignItems="center" h={70} backgroundColor="transparent">
        <Box w="70%" alignItems="center" mb="$3" backgroundColor="transparent">
            <Text size="sm" color="$black">This file is not attached to a patient.</Text>
        </Box>
        <Box w="90%">
            <Button backgroundColor={PRIMARY_COLOR}>
                <ButtonText>Add a patient</ButtonText>
            </Button>
        </Box>
    </Box>
}

const ActionBar = () => {

    const iconLayout = {
        m:"$2",
        w:"22%",
        justifyContent:"center",
        alignItems:"center",
        // borderWidth: 1,
        h: "$12",
    };

    return  <Box w="100%" my="$2" justifyContent="space-around" flexDirection="row">

        <Box  {...iconLayout}>
            <MaterialCommunityIcons  name="download" color={ICON_COLOR} size={ICON_SIZE}/>
            <Text size={TEXT_SIZE} >Download</Text>
        </Box>

        <Box {...iconLayout}>
            <MaterialCommunityIcons name="send" color={ICON_COLOR} size={ICON_SIZE} />
            <Text size={TEXT_SIZE} >Email</Text>
        </Box>

        <Box {...iconLayout}>
            <MaterialCommunityIcons name="eye-off" color={ICON_COLOR} size={ICON_SIZE} />
            <Text size={TEXT_SIZE} >Flag as sensitive</Text>
        </Box>

        <Box {...iconLayout}>
            <MaterialCommunityIcons name="medical-bag" color={ICON_COLOR} size={ICON_SIZE} />
            <Text size={TEXT_SIZE} >Start new case</Text>
        </Box>

    </Box>
}

const Container = ({ navigation, route, options, back }) => {
    console.log(navigation);
    console.log(route);
    console.log(options);
    console.log(back);
    const {type, uri} = route?.params || {};

    return (
        <Box flex={0} backgroundColor="transparent" h="100%">
            <ScrollView
                backgroundColor="transparent"
                h="100%"
            >
                <Box
                    height={300}
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


                <ActionBar/>

                <Divider my="$0.5" />


                <Box textAlign="left"
                     height="$10">
                    <Text size="lg"  mt="$3" mb="$1" mx="$3" color={TEXT_COLOR}>File details</Text>
                </Box>


                <Divider my="$0.5" />

                <HStack justifyContent="space-between" height="$20">
                    <Box my="$3" mx="$3" >
                        <Text size="lg" color={TEXT_COLOR}>Location on the body</Text>
                        <Text size="lg" color="$black">Lower arm(left)</Text>
                    </Box>

                    <Box alignSelf="center" mr="$3">
                        <MaterialCommunityIcons name="chevron-right" color="black" size={ICON_SIZE} />
                    </Box>
                </HStack>

                <Divider w="93%" mx="3%"/>

                <Box textAlign="left" m="$3" mb="$1" h={140}>
                    <Text size="lg" color={TEXT_COLOR}>Description</Text>
                    <Textarea
                        size="sm"
                        w="100%"
                        borderWidth={0}
                    >
                        <TextareaInput placeholder="Enter a description of the file" />
                    </Textarea>
                </Box>

                <Divider my="$0.5" mx="$3"/>

                <AddPatient/>

            </ScrollView>
        </Box>
    );
};
