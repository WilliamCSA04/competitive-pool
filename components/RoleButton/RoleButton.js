import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import { supabaseService } from '../../services';
import { TABLES } from '../../utils';

const RoleIcon = ({ src, alt = '', roleId, champion }) => {
  const submitRole = () => {
    supabaseService.insert({
      toInsert: [{ champion_id: champion.id, role_id: roleId }],
      table: TABLES.CHAMPION_ROLES,
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

export default RoleIcon;
