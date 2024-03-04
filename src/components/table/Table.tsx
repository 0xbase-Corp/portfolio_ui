import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC } from 'react'

const rows = [
  { id: 1, name: 'Ethereum', symbol: 'ETH', amount: '19.00', percentage: '6.52%' },
  { id: 2, name: 'Bitcoin', symbol: 'BTC', amount: '2.56', percentage: '90.25%' },
  { id: 3, name: 'Tether', symbol: 'USDT', amount: '140.01', percentage: '3.48%' },
]

const CustomTable: FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" sx={{ backgroundColor: 'background.default' }}>
        <TableHead>
          <TableRow>
            <TableCell>Coin</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} style={{ borderBottom: '1px solid #333' }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.symbol}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomTable
