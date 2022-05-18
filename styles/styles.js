import { extendTheme } from '@chakra-ui/react';
import { cardStyle } from '../components';

const colors = {
  brand: {
    50: '#e4e4ff',
    100: '#b2b3ff',
    200: '#7f80ff',
    300: '#4c4dff',
    400: '#1a1aff',
    500: '#0000e6',
    600: '#0000b4',
    700: '#000082',
    800: '#000050',
    900: '#000021',
  },
};

const Button = {
  defaultProps: {
    colorScheme: 'brand',
  },
};

const components = {
  Card: cardStyle,
  Button,
};

export const theme = extendTheme({ colors, components });
