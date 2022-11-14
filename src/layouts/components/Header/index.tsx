import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import logo from '../../../assets/Logo.png';
import { Cart, HeaderContainer, HeaderContent, Location } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <nav>
          <NavLink to="/" title="Timer">
            <Location>
              <MapPin size={20} color="#8047F8" weight="fill" />
              Porto Alegre, RS
            </Location>
          </NavLink>
          <NavLink to="/history" title="History">
            <Cart>
              <ShoppingCart size={20} color="#C47F17" weight="fill" />
            </Cart>
          </NavLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
