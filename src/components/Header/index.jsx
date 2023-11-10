import logo from "../../assets/logoCar.svg";
import logoText from "../../assets/logoText.svg";
import arrow from "../../assets/arrowBottom.svg";
import {
  ArrowImage,
  HeaderContainer,
  LogoContainer,
  LogoImage,
  MobileNavLink,
  NavLink,
  Navigation,
} from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImage src={logo} alt="logo" />
        <img src={logoText} alt="logo-text" />
      </LogoContainer>

      <Navigation>
        <NavLink>The Track</NavLink>
        <NavLink>Events</NavLink>
        <NavLink>Join</NavLink>
        <NavLink>Contact</NavLink>
        <MobileNavLink>
          Explore
          <ArrowImage src={arrow} alt="arrow" />
        </MobileNavLink>
      </Navigation>
    </HeaderContainer>
  );
};
