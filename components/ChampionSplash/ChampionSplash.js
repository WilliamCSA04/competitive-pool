import { Box, Button, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import { ASSETS_PATHS } from '../../utils';

const RoleIcon = ({ src, alt = '' }) => {
  return (
    <Button
      variant="invisible"
      filter={'grayscale(1)'}
      p={0}
      h="auto"
      _hover={{ filter: 'grayscale(0)' }}
    >
      <Image src={src} width={32} height={32} alt={alt} />
    </Button>
  );
};

export default function ChampionSlash({
  src,
  alt,
  width = 308,
  height = 560,
  ...props
}) {
  return (
    <Box {...props} position="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        placeholder="blur"
        blurDataURL={`https://via.placeholder.com/${width}x${height}?text=${alt}`}
      />
      <HStack
        spacing={1}
        position="absolute"
        zIndex={1}
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
      >
        <RoleIcon src={ASSETS_PATHS.ROLES.TOP} />
        <RoleIcon src={ASSETS_PATHS.ROLES.JUNGLE} />
        <RoleIcon src={ASSETS_PATHS.ROLES.MID} />
        <RoleIcon src={ASSETS_PATHS.ROLES.ADC} />
        <RoleIcon src={ASSETS_PATHS.ROLES.SUP} />
      </HStack>
    </Box>
  );
}
