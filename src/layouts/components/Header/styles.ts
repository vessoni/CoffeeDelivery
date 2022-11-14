import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10rem 0 10rem;

  height: 6.5rem;

  background: ${(props) => props.theme['background']};

  nav {
    display: flex;
    gap: 0.5rem;
    font-size: 0.875rem;

    a:link {
      text-decoration: none;
    }
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70rem;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
  padding: 0.5rem;
  border-radius: 5px;
  gap: 0.2rem;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border-radius: 5px;
`;
