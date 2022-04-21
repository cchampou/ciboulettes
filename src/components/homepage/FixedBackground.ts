import styled from '@emotion/styled';
import imageSrc from '../../assets/images/chives.jpg';

export const FixedBackground = styled('div')`
  position: fixed;
  background-image: url(${imageSrc});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  left: 0;
  bottom: 0;
  height: 50vh;
  width: 20vw;
`;
