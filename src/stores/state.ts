import { Token } from './models'
import { AbiItem } from 'web3-utils/types'
export interface State {
  balances: Record<Token, string>
  tokenAddresses: Record<Token, string>
  tokenABIs: Record<Token, AbiItem[]>
  tokens: Token[]
  currentToken: Token
  activeAccount: string
}
