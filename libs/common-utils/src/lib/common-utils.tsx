import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CommonUtilsProps {}

const StyledCommonUtils = styled.div`
  color: pink;
`;

export function CommonUtils(props: CommonUtilsProps) {
  return (
    <StyledCommonUtils>
      <h1>Welcome to CommonUtils!</h1>
    </StyledCommonUtils>
  );
}

export default CommonUtils;
