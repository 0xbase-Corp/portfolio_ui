export const getAssetLogo = (assetName: string): string => {
  switch (assetName) {
    case 'Ethereum':
      return '/assets/ethereum_logo.svg'
    case 'Bitcoin':
      return '/assets/bitcoin_logo.svg'
    case 'Solana':
      return '/assets/solana_logo.svg'
    case 'Tether':
      return '/assets/Tether_logo.svg'
    default:
      return '/assets/ethereum_logo.svg'
  }
}
