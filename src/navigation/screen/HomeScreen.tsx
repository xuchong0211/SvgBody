import {Box, Text} from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from '../../../assets/Icons/Gradient';
import Logo from '../../../assets/Icons/Logo';
import React from "react";
import UploadButton from "../../component/UploadButton";

export default function HomeScreen(props) {
  return <Container {...props}/>;
}

const Container = ({ navigation, route, options, back }) => {
    console.log("111111111111111111111111111");
    console.log(navigation);
    console.log("22222222222222222222222");
    console.log(route);
    console.log("33333333333333333333333");
    console.log(options);
    console.log("444444444444444444444444444444");
    console.log(back);
    console.log("5555555555555555555555555555555");
    return (
        <Box flex={1} backgroundColor="$black">
            <ScrollView
                style={{ height: '100%' }}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <Box
                    position="absolute"
                    sx={{
                        '@base': {
                            h: 500,
                            w: 500,
                        },
                        '@lg': {
                            h: 700,
                            w: 700,
                        },
                    }}
                >
                    <Gradient />
                </Box>
                <Box
                    height="60%"
                    sx={{
                        '@base': {
                            my: '$16',
                            mx: '$5',
                            height: '80%',
                        },
                        '@lg': {
                            my: '$24',
                            mx: '$32',
                        },
                    }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box
                        bg="#64748B33"
                        py="$2"
                        px="$6"
                        rounded="$full"
                        alignItems="center"
                        marginTop={20}
                        sx={{
                            '@base': {
                                flexDirection: 'column',
                            },
                            '@sm': {
                                flexDirection: 'row',
                            },
                            '@md': { alignSelf: 'flex-start' },
                        }}
                    >
                        <Text color="$white" fontWeight="$normal">
                            Get started by editing
                        </Text>
                        <Text color="$white" fontWeight="$medium" ml="$2">
                            pages/index.tsx
                        </Text>
                    </Box>
                    <Box justifyContent="center" alignItems="center">
                        <Logo />
                    </Box>
                </Box>
            </ScrollView>
            <UploadButton onPress={(type) => {
                navigation.navigate("Upload", type)
            }}/>
        </Box>
    );
};
