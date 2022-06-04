import styled from '@emotion/styled';
import { desktop } from '../../../styles/mediaQueries';

export const HeaderMainContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4rem;
  position: relative;
`;

export const HeaderBurgerWrapper = styled('div')`
  position: absolute;
  right: 0;

  ${desktop} {
    display: none;
  }
`;

export const HeaderLogoContainer = styled('div')`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DesktopLinks = styled('div')`
  flex: 1;
  justify-content: flex-end;
  display: none;

  ${desktop} {
    display: flex;
  }
`;
