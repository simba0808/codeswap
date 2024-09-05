import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonConstProps {}

const StyledCommonConst = styled.div`
  color: pink;
`;

export function CommonConst(props: CommonConstProps) {
  return (
    <StyledCommonConst>
      <h1>Welcome to CommonConst!</h1>
    </StyledCommonConst>
  );
}

export default CommonConst;
