import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #004684;
  z-index: 3;
  position: fixed;
  /* navbar fixed at top of the screen */
  top: 0;
  display: flex;
  align-items: center;
`

export const IMTLogo = styled.img`
  width: 140px;
  height: 60px;
  margin: 8px;
  object-fit: contain;
  margin-right: 6%;
`

export const NavbarItem = styled.span`
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: ${shade(0.2, '#fff')};
  }
`