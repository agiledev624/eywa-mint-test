import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite'
import { Token } from '../stores/models'
import { useStore } from '..'
import { useRefreshBalance } from '../hooks/customHooks'

const Balance = styled.p`
  padding-top: 10px;
  font-size: 14px;
  text-align: right;
  color: #959ebd;
`

export const Balances = observer(() => {
  const store = useStore()
  const { balances } = store
  const refreshBalance = useRefreshBalance()
  useEffect(() => {
    const interval = setInterval(() => {
      refreshBalance(Token.USDT)
      refreshBalance(Token.USDT)
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  })
  return (
    <Balance>
      EYWA balance: {parseFloat(balances[Token.EYWA]).toPrecision(4)}; USDT
      balance:
      {parseFloat(balances[Token.USDT]).toPrecision(4)}
    </Balance>
  )
})
