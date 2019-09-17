import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/31-nights-of-horror-2019-logo.svg';
import Nav from '../YearsNav/YearsNav';
import ContentContainer from '../ContentContainer/ContentContainer';

import theme from '../../theme';

const Header = () => (
  <HeaderWrapper>
    <ContentContainer>
      <HeaderContainer>
        <LogoSvg />
        <Nav />
      </HeaderContainer>
    </ContentContainer>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background: ${theme.colors.black};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: ${theme.size.header.height};
  padding: ${theme.space.default};
`;

const LogoSvg = styled.img.attrs(() => ({
  src: Logo,
  alt: '31 Nights of Horror - 2019',
}))`
  height: calc(${theme.size.header.height} - ${theme.space.lg});
`;

export default Header;
