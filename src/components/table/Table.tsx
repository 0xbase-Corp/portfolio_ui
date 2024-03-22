import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React, { FC, useState } from 'react'
import styled from 'styled-components'

const StyledTableContainer = styled(TableContainer)`
  position: fixed;
  bottom: 0;
  left: 240px;
  margin-bottom: 20px;
  width: calc(100% - 240px);
  max-height: calc(100vh - 20px);
  overflow: auto;
`

interface StyledTableRowProps {
  level: number;
  isLastSubRow?: boolean;
}

const StyledTableRow = styled(TableRow)<StyledTableRowProps>`
  & > * {
    font-size: ${({ level }) => (level > 0 ? '0.875rem' : 'inherit')};
  }
  & > *:first-child {
    position: relative;
    padding-left: ${({ level }) => `${level * 20}px`};

    &:before,
    &:after {
      content: '';
      position: absolute;
      border-left: 2px solid #ccc;
    }

    &:before {
      left: 124%;
      top: 50%;
      width: ${({ level }) => `${level * 20}px`};
      border-bottom: ${({ level }) => (level > 0 ? '2px solid #ccc' : 'none')};
    }

    &:after {
      
      left: ${({ level }) => `${level * 130 - 10}%`};

      top: 0;
      height: ${({ isLastSubRow }) => (isLastSubRow ? '53%' : '100%')}; // Adjust height based on whether it's the last sub-row
    }
  }
`

interface CustomTableProps {
  data: any[]
}

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

const dummyData: RowData[] = [
  {
    asset_name: 'Ethereum ETH',
    chain: 'Mainnet',
    unit_price: 3342.54,
    amount: 19.0,
    percentage: 6.52,
    profit_loss: -2.52,
    asset_price_usd: 151.0,
    subRows: [
      {
        asset_name: 'Ethereum ETH Token',
        chain: 'Token',
        unit_price: 3342.54,
        amount: 12.54,
        percentage: 2.79,
        profit_loss: 0.15,
        asset_price_usd: 12.0,
      },
      {
        asset_name: 'rsw ETH Token',
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
    asset_name: 'Ethereum ETH2',
    chain: 'Mainnet',
    unit_price: 3342.54,
    amount: 19.0,
    percentage: 6.52,
    profit_loss: -2.52,
    asset_price_usd: 151.0,
    subRows: [
      {
        asset_name: 'Ethereum ETH Token',
        chain: 'Token',
        unit_price: 3342.54,
        amount: 12.54,
        percentage: 2.79,
        profit_loss: 0.15,
        asset_price_usd: 12.0,
      },
      {
        asset_name: 'rsw ETH Token',
        chain: 'Token',
        unit_price: 3342.54,
        amount: 12.54,
        percentage: 1.25,
        profit_loss: 0.29,
        asset_price_usd: 45.0,
      },
      {
        asset_name: 'rsw1 ETH Token',
        chain: 'Token',
        unit_price: 3342.54,
        amount: 12.54,
        percentage: 1.25,
        profit_loss: 0.29,
        asset_price_usd: 45.0,
      },
      {
        asset_name: 'rsw1 ETH Token',
        chain: 'Token',
        unit_price: 3342.54,
        amount: 12.54,
        percentage: 1.25,
        profit_loss: 0.29,
        asset_price_usd: 45.0,
      },
    ],
  },
]

const CustomTable: FC<CustomTableProps> = ({ data }) => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({})

  const handleToggle = (name: string) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [name]: !prevOpen[name],
    }))
  }

  return (
    <StyledTableContainer>
      <Table aria-label="portfolio table" sx={{ backgroundColor: 'background.default' }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell style={{ position: 'relative', paddingBottom: 0 }}>
            <Typography
  variant="subtitle1"
  sx={{
    position: 'absolute',
    left: '-4%',
    transform: 'translateX(-50%)',
    top: '28%',
    '@media (max-width: 1150px)': {
      top: '36%',
    },
  }}
>
  Assets
</Typography>
</TableCell>
            <TableCell align="left">Chain</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Percentage</TableCell>
            <TableCell align="left">Profit/Loss</TableCell>
            <TableCell align="left">Total Price (USD)</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {dummyData.map((row) => (
            <React.Fragment key={row.asset_name}>
              <StyledTableRow level={0}>
                <TableCell style={{ paddingRight: 0 }}>
                  <IconButton
                    size="small"
                    onClick={() => handleToggle(row.asset_name)}
                    style={{ marginRight: '-12px' }}
                  >
                    {open[row.asset_name] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" style={{ paddingLeft: '4px' }}>
                  {row.asset_name}
                </TableCell>
                <TableCell align="left">{row.chain}</TableCell>
                <TableCell align="left">{row.unit_price}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left" style={{ color: 'green' }}>{`${row.percentage}%`}</TableCell>
                <TableCell align="left" style={{ color: row.profit_loss >= 0 ? 'green' : 'red' }}>
                  <Box display="flex" alignItems="center" justifyContent="flex-start">
                    {row.profit_loss >= 0 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    <Box marginLeft={0.5}>{`${row.profit_loss}%`}</Box>
                  </Box>
                </TableCell>
                <TableCell align="left">{row.asset_price_usd}</TableCell>
                <TableCell align="left">
                  <Button variant="contained" style={{ backgroundColor: 'green', color: 'white', borderRadius: 50 }}>
                    Forecast
                  </Button>
                </TableCell>
              </StyledTableRow>
              {row.subRows &&
  row.subRows.map((subRow, subIndex) => (
    <StyledTableRow
      key={`${row.asset_name}-${subIndex}`}
      style={{ display: open[row.asset_name] ? 'table-row' : 'none' }}
      level={1}
      isLastSubRow={subIndex === (row.subRows?.length ?? 0) - 1} // Pass the new prop here
    >
                    <TableCell />
                    <TableCell component="th" scope="row" style={{ paddingLeft: '50px' }}>
                      <Typography variant="body2" color="textSecondary">
                        {subRow.asset_name}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">{subRow.chain}</TableCell>
                    <TableCell align="left">{subRow.unit_price}</TableCell>
                    <TableCell align="left">{subRow.amount}</TableCell>
                    <TableCell align="left" style={{ color: 'green' }}>{`${subRow.percentage}%`}</TableCell>
                    <TableCell align="left" style={{ color: subRow.profit_loss >= 0 ? 'green' : 'red' }}>
                      <Box display="flex" alignItems="center" justifyContent="flex-start">
                        {open[row.asset_name] ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                        <Box marginLeft={0.5}>{`${subRow.profit_loss}%`}</Box>
                      </Box>
                    </TableCell>
                    <TableCell align="left">{subRow.asset_price_usd}</TableCell>
                    <TableCell />
                  </StyledTableRow>
                ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

export default CustomTable
