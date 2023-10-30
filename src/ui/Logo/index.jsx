import { useDarkMode } from '../../hooks/useDarkMode';
import { Img, StyledLogo } from './style';

const Logo = () => {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? '/logo-dark.png' : '/logo-light.png';
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
};

export default Logo;
