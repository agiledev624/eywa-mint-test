import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { useStore } from '../index'

import { useRefreshBalance } from '../hooks/customHooks'
import { observer } from 'mobx-react-lite'

const StyledButton = styled.div`
    height: 56px;
    width: 100%;
    margin-top: 10px;
    border-radius: 8px;
    background-color: #0CCFAC;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    '&:hover': {
      background-color: #0ACCA9;
    },
`

export const GetButton = observer(() => {
  const store = useStore()
  const { tokenAddresses, activeAccount, currentToken } = store
  const refreshBalance = useRefreshBalance()
  const onClickHandler = useCallback(() => {
    const contractAddress = tokenAddresses[currentToken]
    const tokenContract = new window.web3.eth.Contract(
      store.tokenABIs[store.currentToken],
      contractAddress
    )
    tokenContract.methods
      .mint(activeAccount, 1)
      .send({ from: activeAccount })
      .then(() => {
        refreshBalance(currentToken)
      })
  }, [currentToken, activeAccount])
  if (!store.activeAccount) {
    return null
  }
  return <StyledButton onClick={onClickHandler}>GET TEST TOKENS</StyledButton>
})
