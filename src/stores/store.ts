import { State } from './state'
import { Actions, actions } from './actions'
import { Token } from './models'
import { USDT_ADDRESS, EYWA_ADDRESS } from '../config'
import { extendObservable } from 'mobx'
import { EYWA_ABI } from '../abi/eywa'
import { USDT_ABI } from '../abi/usdt'
import { AbiItem } from 'web3-utils'

const initialState: (data: {} | void) => State = (data = {}) => ({
  tokens: [Token.USDT, Token.EYWA],
  balances: {
    [Token.USDT]: '0',
    [Token.EYWA]: '0',
  },
  tokenAddresses: {
    [Token.USDT]: USDT_ADDRESS,
    [Token.EYWA]: EYWA_ADDRESS,
  },
  tokenABIs: {
    [Token.USDT]: USDT_ABI,
    [Token.EYWA]: EYWA_ABI,
  },
  currentToken: Token.USDT,
  activeAccount: '',
})

export class Store implements State, Actions {
  constructor() {
    extendObservable(this, {
      ...initialState(),
      ...actions(this),
    })
  }
  balances!: Record<Token, string>
  tokenAddresses!: Record<Token, string>
  currentToken!: Token
  activeAccount!: string
  tokens!: Token[]
  tokenABIs!: Record<Token, AbiItem[]>
  setCurrentToken!: (token: Token) => void
  setActiveAccount!: (activeAccount: string) => void
  setBalance!: (token: Token, balance: string) => void
}

export const store = new Store()

export function createStore() {
  return store
}
