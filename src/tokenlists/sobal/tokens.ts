import { Network, TokensForList } from '../../types'
import base from './tokens/base'
import baseGoerli from './tokens/base-goerli'
import neon from './tokens/neon'
import neonDevnet from './tokens/neon-devnet'

export const tokens: TokensForList = {
  [Network.Base]: base,
  [Network.BaseGoerli]: baseGoerli,
  [Network.Neon]: neon,
  [Network.NeonDevnet]: neonDevnet,
}
