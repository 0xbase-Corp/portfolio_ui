'use client'

import { Link, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
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

const PositionedFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`

const footerContent = [
  [
    'Folio Nomics',
    '©2024-2025',
    <Link href="/privacy" underline="none">
      Privacy
    </Link>,
  ],
  [
    'Product',
    <Link href="/product" underline="none">
      product
    </Link>,
    <Link href="/product" underline="none">
      product
    </Link>,
    <Link href="/product" underline="none">
      product
    </Link>,
  ],
  [
    'Feature',
    <Link href="/feature" underline="none">
      feature
    </Link>,
    <Link href="/feature" underline="none">
      feature
    </Link>,
    <Link href="/feature" underline="none">
      feature
    </Link>,
  ],
  [
    'Resources',
    <Link href="/resources" underline="none">
      resources
    </Link>,
    <Link href="/resources" underline="none">
      resources
    </Link>,
    <Link href="/resources" underline="none">
      resources
    </Link>,
  ],
  [
    'Company',
    <Link href="/company" underline="none">
      company
    </Link>,
    <Link href="/company" underline="none">
      company
    </Link>,
    <Link href="/company" underline="none">
      company
    </Link>,
  ],
]

const Footer = () => {
  return (
    <PositionedFooter>
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
    </PositionedFooter>
  )
}

export default Footer
