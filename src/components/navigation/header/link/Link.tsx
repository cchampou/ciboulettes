import React from 'react';
import { StyledNavLink } from './styles';

type Props = {
  label: string,
  to: string
};

function Link({ label, to }: Props) {
  return (
    <StyledNavLink to={to}>{label}</StyledNavLink>
  );
}

export default Link;
