import { AuthContext } from '@/contexts/AuthContext';
import React, { useContext } from 'react';
import { Text } from './styles';

const WelcomeMessage: React.FC = () => {
  const { user } = useContext(AuthContext);
  return (
    <Text>
      {`Seja bem-vindo ${user?.person.name || ''} !`}
    </Text>
  )
}

export default WelcomeMessage;
