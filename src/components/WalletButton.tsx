import Web3 from 'web3'
import Web3Modal from 'web3modal'
import { useStore } from '../index'
import { observer } from 'mobx-react-lite'
import styled from '@emotion/styled'
import React, { useState } from 'react'
// import { AlertDialog } from '../components/alert'
import { AccountInfo } from './AccountInfo'

const Row = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`

const StyledButton = styled.div`
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  outline: none;
  border: 1px solid transparent;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  background-color: #0ccfac;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 500;
    &:active {
      box-shadow: #0aac8e 0px 0px 0px 1pt;
      background-color: #0aac8e;
    }
    &:hover {
      background-color: #19f1ca;
    }
  }
`

const web3Modal = new Web3Modal({
  network: 'rinkeby',
  cacheProvider: true,
})

export const WalletButton = observer(() => {
  const store = useStore()

  const [isErrorAlertOpen, setIsErrorAlertOpen] = useState<boolean>(false)

  const handleConnectWallet = async () => {
    try {
      const provider = await web3Modal.connect()
      const web3 = new Web3(provider)
      const accounts = await web3.eth.getAccounts()
      store.setActiveAccount(accounts?.[0])
      ;(window as any).web3 = web3
      ;(window as any).web3Modal = web3Modal
      ;(window as any).web3Provider = provider
      //routing.push('/get-test-tokens');
    } catch (e) {
      setIsErrorAlertOpen(true)
    }
  }

  return (
    <Row>
      {store.activeAccount ? (
        <AccountInfo />
      ) : (
        <StyledButton onClick={handleConnectWallet}>
          Connect Wallet
        </StyledButton>
      )}

      {/* <AlertDialog
        isOpen={isErrorAlertOpen}
        onButtonClicked={() => setIsErrorAlertOpen(false)}
        text={'Please make sure MetaMask is installed.'}
      /> */}
    </Row>
  )
})
