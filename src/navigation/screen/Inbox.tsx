import React from "react";
import {Box, HStack, Image, VStack, Text, Heading} from '@gluestack-ui/themed';
// import { ScrollView } from 'react-native';
import UploadButton from "../../component/UploadButton";
import {ScrollView} from "@gluestack-ui/themed/build/components/Actionsheet/styled-components";

export default function Inbox(props) {
  return <Container {...props}/>;
}

const getImage = () => <Image
        size="md"
        borderRadius="$none"
        source={{
            // uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            uri: "https://picsum.photos/200/300",
        }}
    />;


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
                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>
                </HStack>

                <Box flex={1} my="$2">
                    <Heading size="lg">
                        Yesterday
                    </Heading>
                </Box>
                <HStack space="md" w="100%" flexDirection="row" justifyContent="flex-start" flexWrap="wrap"  >
                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>
                </HStack>


                <Box flex={1} my="$2">
                    <Heading size="lg">
                        Tuesday 19 April
                    </Heading>
                </Box>
                <HStack space="md" w="100%" flexDirection="row" justifyContent="flex-start" flexWrap="wrap">
                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>

                    <Box w="$20" h="$20" bg="$blue300" my="$2">
                        {getImage()}
                    </Box>
                </HStack>

            </ScrollView>
            <UploadButton onPress={(params) => {
                navigation.navigate("Upload", params)
            }}/>
        </Box>
    );
};
