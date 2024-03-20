import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
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

interface CustomTableProps {
  data: any[]
}

const CustomTable: FC<CustomTableProps> = ({ data }) => {
  const [open, setOpen] = useState<{ [key: number]: boolean }>({})

  const handleToggle = (index: number) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }))
  }

  return (
    <StyledTableContainer>
      <Table aria-label="simple table" sx={{ backgroundColor: 'background.default' }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Wallet ID</TableCell>
            <TableCell align="right">Coin</TableCell>
            <TableCell align="right">Wallet Address</TableCell>
            <TableCell align="right">BTC USD Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <TableRow style={{ borderBottom: '1px solid #333' }}>
                <TableCell>
                  <IconButton size="small" onClick={() => handleToggle(index)}>
                    {open[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.wallet_id}
                </TableCell>
                <TableCell align="right">{item.blockchain_type}</TableCell>
                <TableCell align="right">{item.wallet_address}</TableCell>
                <TableCell align="right">
                  {item.bitcoin_btc_com_v1 ? item.bitcoin_btc_com_v1.btc_usd_price : 'N/A'}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={open[index]} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <div>Expanded content for {item.wallet_id}</div>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

export default CustomTable
