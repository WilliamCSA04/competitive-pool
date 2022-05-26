import { Box, Button, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import { supabaseService } from '../../services';
import { ASSETS_PATHS, supabase } from '../../utils';

const RoleIcon = ({ src, alt = '', onClick }) => {
  return (
    <Button
      variant="invisible"
      filter={'grayscale(1)'}
      p={0}
      h="auto"
      _hover={{ filter: 'grayscale(0)' }}
      onClick={onClick}
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
  const submitRole = ({ champion, roleId }) => {
    supabaseService.insert({
      toInsert: [{ champion_id: champion.decorated.id, role_id: roleId }],
      table: 'champion_roles',
    });
  };

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
          onClick={() => submitRole({ champion, roleId: 1 })}
        />
        <RoleIcon
          src={ASSETS_PATHS.ROLES.JUNGLE}
          onClick={() => submitRole({ champion, roleId: 2 })}
        />
        <RoleIcon
          src={ASSETS_PATHS.ROLES.MID}
          onClick={() => submitRole({ champion, roleId: 3 })}
        />
        <RoleIcon
          src={ASSETS_PATHS.ROLES.ADC}
          onClick={() => submitRole({ champion, roleId: 4 })}
        />
        <RoleIcon
          src={ASSETS_PATHS.ROLES.SUP}
          onClick={() => submitRole({ champion, roleId: 5 })}
        />
      </HStack>
    </Box>
  );
}
