'use client'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'

// Styled component for the TableContainer
const StyledTableContainer = styled(TableContainer)`
  position: fixed;
  bottom: 0;
  left: 240px;
  margin-bottom: 20px;
  width: calc(100% - 240px);
  max-height: calc(100vh - 20px);
  overflow: auto;
`

interface CustomTableProps {
  data: any // Consider using a more specific type for your data
}

const CustomTable: FC<CustomTableProps> = ({ data }) => {
  return (
    <StyledTableContainer>
      <Table aria-label="simple table" sx={{ backgroundColor: 'background.default' }}>
        <TableHead>
          <TableRow>
            <TableCell>Wallet ID</TableCell>
            <TableCell align="right">Coin</TableCell>
            <TableCell align="right">Wallet Address</TableCell>
            <TableCell align="right">BTC USD Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && (
            <TableRow style={{ borderBottom: '1px solid #333' }}>
              <TableCell component="th" scope="row">
                {data.wallet_id}
              </TableCell>
              <TableCell align="right">{data.blockchain_type}</TableCell>
              <TableCell align="right">{data.wallet_address}</TableCell>
              {/* Safely access btc_usd_price with a conditional check */}
              <TableCell align="right">
                {data.bitcoin_btc_com_v1 ? data.bitcoin_btc_com_v1.btc_usd_price : 'N/A'}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

export default CustomTable
