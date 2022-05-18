import { Flex, useStyleConfig } from '@chakra-ui/react';

export default function Card({ children, ...props }) {
  const css = useStyleConfig('Card');
  return (
    <Flex __css={css} {...props}>
      {children}
    </Flex>
  );
}

export const cardStyle = {
  baseStyle: {
    boxShadow: 'md',
    borderRadius: 'md',
    p: [2, 3, 5, 8],
  },
};
