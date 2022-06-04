import styled from '@emotion/styled';
import imageSrc from '../../assets/images/chives.jpg';

export const FixedBackground = styled('div')`
  position: fixed;
  background-image: url(${imageSrc});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  left: -10vw;
  bottom: 0;
  height: 90vh;
  z-index: -1;
  width: 20vw;

  @media (max-width: 480px) {
    height: 60vh;
    width: 100vw;
    left: -50vw;
  }
`;
