import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import imagem from '../../../assets/Imagem.png';
import { BannerContainer, BannerContent, Cart, ImageBanner } from './styles';

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <div>
          <h1>
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </h1>

          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer
            hora
          </h3>
        </div>
        <div>
          <ImageBanner src={imagem} alt="" />
        </div>
      </BannerContent>
    </BannerContainer>
  );
}
