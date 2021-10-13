import { action } from 'mobx'
import { State } from './state'
import { Token } from './models'

export interface Actions {
  setCurrentToken: (token: Token) => void
  setActiveAccount: (activeAccount: string) => void
  setBalance: (token: Token, balance: string) => void
}

export const actions = (state: State): Actions => ({
  setCurrentToken: action((token: Token) => {
    state.currentToken = token
  }),
  setActiveAccount: action((activeAccount: string) => {
    state.activeAccount = activeAccount
  }),
  setBalance: action((token: Token, balance: string) => {
    state.balances[token] = balance
  }),
})
