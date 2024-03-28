interface RowData {
    asset_name: string
    chain: string
    unit_price: number
    amount: number
    percentage: number
    profit_loss: number
    asset_price_usd: number
    subRows?: RowData[]
  }

export const dummyData: RowData[] = [
    {
      asset_name: 'Ethereum',
      chain: '-',
      unit_price: 3342.54,
      amount: 19.0,
      percentage: 100,
      profit_loss: -2.52,
      asset_price_usd: 151.0,
      subRows: [
        {
          asset_name: 'Bitcoin',
          chain: 'Token',
          unit_price: 3342.54,
          amount: 12.54,
          percentage: 5,
          profit_loss: 0.15,
          asset_price_usd: 12.0,
        },
        {
          asset_name: 'Tether',
          chain: 'Token',
          unit_price: 3342.54,
          amount: 12.54,
          percentage: 1.25,
          profit_loss: 0.29,
          asset_price_usd: 45.0,
        },
      ],
    },
  
    {
      asset_name: 'Ethereum ',
      chain: '-',
      unit_price: 3342.54,
      amount: 19.0,
      percentage: 5,
      profit_loss: -2.52,
      asset_price_usd: 151.0,
      subRows: [
        {
          asset_name: 'Solana',
          chain: 'Token',
          unit_price: 3342.54,
          amount: 12.54,
          percentage: 2.79,
          profit_loss: 0.15,
          asset_price_usd: 12.0,
        },
        {
          asset_name: 'Ethereum',
          chain: 'Token',
          unit_price: 3342.54,
          amount: 12.54,
          percentage: 1.25,
          profit_loss: 0.29,
          asset_price_usd: 45.0,
        },
        {
          asset_name: 'Bitcoin',
          chain: 'Token',
          unit_price: 3342.54,
          amount: 12.54,
          percentage: 1.25,
          profit_loss: 0.29,
          asset_price_usd: 45.0,
        },
        {
          asset_name: 'Tether',
          chain: 'Token',
          unit_price: 3342.54,
          amount: 12.54,
          percentage: 1.25,
          profit_loss: 0.29,
          asset_price_usd: 45.0,
        },
      ],
    },
  ];