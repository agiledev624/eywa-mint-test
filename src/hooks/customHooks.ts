import { useStore } from '../index'
import { Token } from '../stores/models'
import Web3 from 'web3'

export const useRefreshBalance = () => {
  const store = useStore()
  const { tokenAddresses, activeAccount } = store
  return (token: Token) => {
    const contractAddress = tokenAddresses[token]
    const web3 = new Web3(Web3.givenProvider)
    const tokenContract = new web3.eth.Contract(
      store.tokenABIs[store.currentToken],
      contractAddress
    )
    tokenContract.methods
      .balanceOf(activeAccount)
      .call()
      .then((balance: string) => {
        store.setBalance(token, balance)
      })
  }
}
