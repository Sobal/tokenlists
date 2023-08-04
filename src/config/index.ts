import { Network, Configs } from '../types'
import base from './base'
import baseGoerli from './base-goerli'
import neon from './neon'
import neonDevnet from './neon-devnet'

const config: Configs = {
  [Network.Base]: base,
  [Network.BaseGoerli]: baseGoerli,
  [Network.Neon]: neon,
  [Network.NeonDevnet]: neonDevnet,
}

export default config
