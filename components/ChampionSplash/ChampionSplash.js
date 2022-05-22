import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export default function ChampionSlash({
  src,
  alt,
  width = 308,
  height = 560,
  ...props
}) {
  return (
    <Box m="1" {...props}>
      <Image src={src} alt={alt} width={width} height={height} />
    </Box>
  );
}
