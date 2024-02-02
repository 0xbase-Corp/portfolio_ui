'use client'

import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import styled from 'styled-components'

const StyledFooter = styled(Grid)`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const StyledColumn = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const footerContent = [
  ['Folio Nomics', '©2024-2025', 'Privacy'],
  ['Product', 'product', 'product', 'product'],
  ['Feature', 'feature', 'feature', 'feature'],
  ['Resources', 'resources', 'resources', 'resources'],
  ['Company', 'company', 'company', 'company'],
]

const Footer = () => {
  return (
    <>
      <Divider variant="middle" />
      <StyledFooter container>
        {footerContent.map((column, index) => (
          <StyledColumn key={index} item xs={12} sm={2}>
            {column.map((text, i) => (
              <Typography
                sx={{
                  mt: i === 0 && index === 0 ? -2 : 1,
                  fontSize: i === 0 && index === 0 ? '1.8rem' : '1rem',
                  fontWeight: i === 0 ? 'bold' : 'normal',
                }}
                key={i}
              >
                {text}
              </Typography>
            ))}
          </StyledColumn>
        ))}
      </StyledFooter>
    </>
  )
}

export default Footer
