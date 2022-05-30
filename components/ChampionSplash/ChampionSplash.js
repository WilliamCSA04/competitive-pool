import { Box, Button, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import { supabaseService } from '../../services';
import { ASSETS_PATHS, ROLE_NUMBERS, supabase } from '../../utils';

const RoleIcon = ({ src, alt = '', roleId, champion }) => {
  const submitRole = () => {
    supabaseService.insert({
      toInsert: [{ champion_id: champion.decorated.id, role_id: roleId }],
      table: 'champion_roles',
    });
  };
  return (
    <Button
      variant="invisible"
      filter={'grayscale(1)'}
      p={0}
      h="auto"
      onClick={() => submitRole()}
      _hover={{ filter: 'grayscale(0)' }}
    >
      <Image src={src} width={32} height={32} alt={alt} />
    </Button>
  );
};

export default function ChampionSlash({
  champion,
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
        <RoleIcon
          src={ASSETS_PATHS.ROLES.TOP}
          champion={champion}
          roleId={ROLE_NUMBERS.TOP}
        />
        <RoleIcon
          src={ASSETS_PATHS.ROLES.JUNGLE}
          champion={champion}
          roleId={ROLE_NUMBERS.JUNGLE}
        />
        <RoleIcon
          src={ASSETS_PATHS.ROLES.MID}
          champion={champion}
          roleId={ROLE_NUMBERS.MID}
        />
        <RoleIcon
          src={ASSETS_PATHS.ROLES.ADC}
          champion={champion}
          roleId={ROLE_NUMBERS.ADC}
        />
        <RoleIcon
          src={ASSETS_PATHS.ROLES.SUP}
          champion={champion}
          roleId={ROLE_NUMBERS.SUP}
        />
      </HStack>
    </Box>
  );
}
