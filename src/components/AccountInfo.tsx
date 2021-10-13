import React from 'react'
import { useStore } from '../index'
import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite'
import close from '../images/close.svg'
import metamask from '../images/metamask.svg'

const TokenList = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
const TokenLabel = styled.span`
  margin-left: 2px;
  font-size: 18px;
`

const HoverImg = styled.img`
  &:hover {
    cursor: pointer;
  }
`
export const AccountInfo = observer(() => {
  const store = useStore()
  const handleDisconncet = async () => {
    await (window as any).web3Modal.clearCachedProvider()
    store.setActiveAccount('')
  }
  return (
    <TokenList>
      <img src={metamask} alt="metamask" />
      <TokenLabel>
        {store.activeAccount.slice(0, 5)}...
        {store.activeAccount.slice(-4)}
      </TokenLabel>
      <HoverImg src={close} alt="close" onClick={handleDisconncet} />
    </TokenList>
  )
})
