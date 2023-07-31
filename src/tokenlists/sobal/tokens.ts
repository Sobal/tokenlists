import { Network, TokensForList } from '../../types'
import base from './tokens/base'
import baseGoerli from './tokens/base-goerli'

export const tokens: TokensForList = {
  [Network.Base]: base,
  [Network.BaseGoerli]: baseGoerli,
}
