import { Network, Configs } from '../types'
import base from './base'
import baseGoerli from './base-goerli'

const config: Configs = {
  [Network.Base]: base,
  [Network.BaseGoerli]: baseGoerli,

}

export default config
