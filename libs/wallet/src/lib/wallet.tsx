import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WalletProps {}

const StyledWallet = styled.div`
  color: pink;
`;

export function Wallet(props: WalletProps) {
  return (
    <StyledWallet>
      <h1>Welcome to Wallet!</h1>
    </StyledWallet>
  );
}

export default Wallet;
