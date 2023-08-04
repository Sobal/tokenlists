import { TokenInfo, TokenList } from '@uniswap/token-lists'

export enum Network {
  Base = '8453',
  BaseGoerli = '84531',
  NeonDevnet = '245022926',
  Neon = '245022934',
}

export interface Config {
  name: string
  rpc?: string
  coingecko: {
    platformId: string
  }
  trustWalletNetwork: string
  addresses: {
    multicaller: string
  }
}

export type Configs = Record<Network, Config>

export type PartialTokenInfoMap = {
  [address: string]: Partial<TokenInfo>
}

export type TokenListMetadata = Pick<
  TokenList,
  'name' | 'logoURI' | 'keywords' | 'version'
>

export type TokensForList = Record<Network, string[]>
export type OverwritesForList = Partial<
  Record<Network, Record<string, Partial<TokenInfo>>>
>
