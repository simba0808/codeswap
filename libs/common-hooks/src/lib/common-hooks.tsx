import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonHooksProps {}

const StyledCommonHooks = styled.div`
  color: pink;
`;

export function CommonHooks(props: CommonHooksProps) {
  return (
    <StyledCommonHooks>
      <h1>Welcome to CommonHooks!</h1>
    </StyledCommonHooks>
  );
}

export default CommonHooks;
