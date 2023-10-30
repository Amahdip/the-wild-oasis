import HeaderMenu from '../HeaderMenu';
import UserAvatar from '../../features/authentication/UserAvatar';
import { StyledHeader } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
