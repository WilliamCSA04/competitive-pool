import { Flex, useStyleConfig } from '@chakra-ui/react';

export default function Card({ children, ...props }) {
  useStyleConfig('Card');
  return <Flex {...props}>{children}</Flex>;
}

export const cardStyle = {
  baseStyle: {
    shadow: 'md',
    borderRadius: 'md',
  },
};
