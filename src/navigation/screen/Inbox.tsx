import React from "react";
import {Box, HStack, Image, Heading} from '@gluestack-ui/themed';
import UploadButton from "../../component/UploadButton";
import {ScrollView} from "@gluestack-ui/themed/build/components/Actionsheet/styled-components";

export default function Inbox(props) {
  return <Container {...props}/>;
}

const getImage = () => <Box w="20%" h="$20" bg="$blue300" my="$2"><Image
        size="md"
        borderRadius="$none"
        source={{
            // uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            uri: "https://picsum.photos/200/300",
        }}
/></Box>;


const Container = ({ navigation, route, options, back }) => {
    return (
        <Box flex={1} backgroundColor="$white">
            <ScrollView
                px="$5"
                h="100%"
                mb="$2"
            >
                <Box flex={1} my="$2">
                    <Heading size="lg">
                        Today
                    </Heading>
                </Box>
                <HStack space="md" w="100%" flexDirection="row" justifyContent="flex-start" flexWrap="wrap">
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                </HStack>

                <Box flex={1} my="$2">
                    <Heading size="lg">
                        Yesterday
                    </Heading>
                </Box>
                <HStack space="md" w="100%" flexDirection="row" justifyContent="flex-start" flexWrap="wrap" >
                    {getImage()}
                    {getImage()}
                    {getImage()}
                </HStack>


                <Box flex={1} my="$2">
                    <Heading size="lg">
                        Tuesday 19 April
                    </Heading>
                </Box>
                <HStack space="md" w="100%" flexDirection="row" justifyContent="flex-start" flexWrap="wrap">
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                    {getImage()}
                </HStack>

            </ScrollView>
            <UploadButton onPress={(params) => {
                if (params.type == 3) {
                    navigation.navigate("Camera", params)
                } else {
                    navigation.navigate("Upload", params)
                }
            }}/>
        </Box>
    );
};
