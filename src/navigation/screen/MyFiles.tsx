import React from "react";
import {Box, HStack, Image, Heading} from '@gluestack-ui/themed';
import UploadButton from "../../component/UploadButton";
import {ScrollView} from "@gluestack-ui/themed/build/components/Actionsheet/styled-components";

export default function MyFiles(props) {
  return <Container {...props}/>;
}

const getImage = () => <Image
        size="md"
        borderRadius="$none"
        source={{
            uri: "https://picsum.photos/200/300",
        }}
    />;


const Container = ({ navigation }) => {
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
            <UploadButton onPress={(type) => {
                navigation.navigate("Upload", type)
            }}/>
        </Box>
    );
};
