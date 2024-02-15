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

const PositionedFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`

const footerContent = [
  [
    'Folio Nomics',
    '©2024-2025',
    <Link key="footer-link-1" href="/privacy" underline="none" color="inherit">
      Privacy
    </Link>,
  ],
  [
    'Product',
    <Link key="footer-link-2" href="/product" underline="none" color="inherit">
      product
    </Link>,
    <Link key="footer-link-3" href="/product" underline="none" color="inherit">
      product
    </Link>,
    <Link key="footer-link-4" href="/product" underline="none" color="inherit">
      product
    </Link>,
  ],
  [
    'Feature',
    <Link key="footer-link-5" href="/feature" underline="none" color="inherit">
      feature
    </Link>,
    <Link key="footer-link-6" href="/feature" underline="none" color="inherit">
      feature
    </Link>,
    <Link key="footer-link-7" href="/feature" underline="none" color="inherit">
      feature
    </Link>,
  ],
  [
    'Resources',
    <Link key="footer-link-8" href="/resources" underline="none" color="inherit">
      resources
    </Link>,
    <Link key="footer-link-9" href="/resources" underline="none" color="inherit">
      resources
    </Link>,
    <Link key="footer-link-10" href="/resources" underline="none" color="inherit">
      resources
    </Link>,
  ],
  [
    'Company',
    <Link key="footer-link-11" href="/company" underline="none" color="inherit">
      company
    </Link>,
    <Link key="footer-link-12" href="/company" underline="none" color="inherit">
      company
    </Link>,
    <Link key="footer-link-13" href="/company" underline="none" color="inherit">
      company
    </Link>,
  ],
]

// ... (existing code)

const Footer = () => {
  return (
    <PositionedFooter>
      <Divider variant="middle" />
      <StyledFooter container>
        {footerContent.map((column, index) => (
          <Grid key={index} item xs={12} sm={2}>
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
          </Grid>
        ))}
      </StyledFooter>
    </PositionedFooter>
  )
}

export default Footer
