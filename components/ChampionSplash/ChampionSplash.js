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
    <Box {...props}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={`https://via.placeholder.com/${width}x${height}?text=${alt}`}
      />
    </Box>
  );
}
