import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const Button = {
    variants: {
        main: {
            h: '5vh',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '20px',
            fontWeight: '400',
        },
    },
};

export const theme = extendTheme({
    config,
    components: {
        Button,
    },
    colors: {
    },
    fonts: {
        body: 'Poppins, sans-serif',
    },
});
