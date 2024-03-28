import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { getAssetLogo } from '@/utils/tableUtils'
import { dummyData } from '../../utils/dummyData'

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
  level: number
  islastsubrow?: string
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
      left: 130%;
      top: 50%;
      width: ${({ level }) => `${level * 20}px`};
      border-bottom: ${({ level }) => (level > 0 ? '2px solid #ccc' : 'none')};
    }

    &:after {
      left: ${({ level }) => `${level * 137 - 10}%`};

      top: 0;
      height: ${({ islastsubrow }) => (islastsubrow ? '53%' : '100%')};
    }
  }
`

interface CustomTableProps {
  data: any[]
}

const CustomTable: FC<CustomTableProps> = ({ data }) => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({})
  console.log(data)
  const handleToggle = (name: string) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [name]: !prevOpen[name],
    }))
  }

  return (
    <StyledTableContainer>
      <Table aria-label="portfolio table" sx={{ backgroundColor: 'background.default' }}>
        <TableHead sx={{ backgroundColor: 'secondary.main' }}>
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
                  <Typography variant="body1" color="textPrimary" style={{ display: 'flex', alignItems: 'center'}}>
                    <Image
                      src={getAssetLogo(row.asset_name)}
                      alt={row.asset_name}
                      width={20}
                      height={20}
                      style={{ marginRight: '5px' }}
                    />
                    {row.asset_name}
                  </Typography>
                </TableCell>
                <TableCell align="left" style={{ paddingLeft: '30px' }}>
                  {row.chain}
                </TableCell>
                <TableCell align="left">{row.unit_price}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left" style={{ color: 'lightgreen' }}>
                  <span
                    style={{
                      background: `linear-gradient(to right, transparent ${
                        50 - row.percentage / 2
                      }%, rgba(144, 238, 144, 0.3) ${50 - row.percentage / 2}%, rgba(144, 238, 144, 0.3) ${
                        50 + row.percentage / 2
                      }%, transparent ${50 + row.percentage / 2}%)`,
                      padding: '6px 32px',
                    }}
                  >
                    {`${row.percentage}%`}
                  </span>
                </TableCell>

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
                    islastsubrow={subIndex === (row.subRows?.length ?? 0) - 1 ? 'true' : undefined}
                  >
                    <TableCell />
                    <TableCell component="th" scope="row" style={{ paddingLeft: '50px' }}>
                      <Typography variant="body2" color="textSecondary" style={{ display: 'flex', alignItems: 'center' }}>
                          <Image
                            src={getAssetLogo(subRow.asset_name)}
                            alt={row.asset_name}
                            width={20}
                            height={20}
                            style={{ marginRight: '5px' }}
                          />
                          {subRow.asset_name}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">{subRow.chain}</TableCell>
                    <TableCell align="left">{subRow.unit_price}</TableCell>
                    <TableCell align="left">{subRow.amount}</TableCell>
                    <TableCell align="left" style={{ color: 'lightgreen' }}>
                      <span
                        style={{
                          background: `linear-gradient(to right, transparent ${
                            50 - subRow.percentage / 2
                          }%, rgba(144, 238, 144, 0.3) ${50 - subRow.percentage / 2}%, rgba(144, 238, 144, 0.3) ${
                            50 + subRow.percentage / 2
                          }%, transparent ${50 + subRow.percentage / 2}%)`,
                          padding: '6px 32px',
                        }}
                      >
                        {`${subRow.percentage}%`}
                      </span>
                    </TableCell>
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