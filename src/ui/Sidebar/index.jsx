import Logo from '../Logo';
import MainNav from '../MainNav';
import { StyledSidebar } from './style';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
};

export default Sidebar;
