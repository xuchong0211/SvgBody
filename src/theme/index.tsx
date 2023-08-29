import { createConfig } from '@gluestack-style/react';
import {config} from "@gluestack-ui/themed";

export let PRIMARY_COLOR = "#e3116c" as const;

const theme = createConfig({
    ...config.theme,
    aliases: {
        ...config.theme.aliases,
        // bg: 'backgroundColor',
        // p: 'padding',
        // h: 'height',
        // w: 'width',
    },
    tokens: {
        ...config.theme.tokens,
        colors: {
            ...config.theme.tokens.colors,
            // primary: "red",
            primary: PRIMARY_COLOR,
            // secondary: 'green',
            // text: 'black',
            // background: 'white',
        },
        // fonts: {
        //     body: 'Arial, sans-serif',
        //     heading: 'Georgia, serif',
        // },
        // fontSizes: {
        //     small: 12,
        //     medium: 16,
        //     large: 20,
        // },
        // space: { 0: 0, 1: 4, 2: 8, 4: 16, 8: 32 },
    },
    // globalStyle: {
    // },
})

export default  theme
