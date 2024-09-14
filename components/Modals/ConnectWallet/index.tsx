import React from "react";
import {
  ConnectModalBackdrop,
  ConnectModalButton,
  ConnectModalButtonContainer,
  ConnectModalContainer,
  ConnectModalHead,
  ConnectModalMain,
  ConnectModalPara,
} from "./../../../styles/ConnectWallet/style";

interface Props {
  show: boolean;
  closeModal: any;
}

const ConnectWalletModal: React.FC<Props> = ({ show, closeModal }) => {
  return show ? (
    <React.Fragment>
      <ConnectModalBackdrop onClick={closeModal} />
      <ConnectModalContainer>
        <ConnectModalMain>
          <ConnectModalHead>Message</ConnectModalHead>
          <ConnectModalPara>
            Please connect your wallet from the button in header to mint the NFT
          </ConnectModalPara>
          <ConnectModalButtonContainer>
            <ConnectModalButton onClick={closeModal}>Close</ConnectModalButton>
          </ConnectModalButtonContainer>
        </ConnectModalMain>
      </ConnectModalContainer>
    </React.Fragment>
  ) : null;
};

export default ConnectWalletModal;
