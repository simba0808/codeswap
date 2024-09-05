import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TokensProps {}

const StyledTokens = styled.div`
  color: pink;
`;

export function Tokens(props: TokensProps) {
  return (
    <StyledTokens>
      <h1>Welcome to Tokens!</h1>
    </StyledTokens>
  );
}

export default Tokens;
