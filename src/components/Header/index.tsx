import LogoutButton from '../UI/Button/LogoutButton';
import WelcomeMessage from '../Welcome-message';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <WelcomeMessage />
    <LogoutButton />
  </Container>
);

export default Header;
