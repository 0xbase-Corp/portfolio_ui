'use client'

import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { usePrivy } from '@privy-io/react-auth'
import { FC, MouseEvent, useState } from 'react'

import SignupDialog from '@/views/SignupDialog'

const pages = {
  Pricing: 'pricing',
  Dashboard: 'dashboard',
  'Contact Us': 'contact-us',
}

const settingsMenu = { Profile: 'profile', Settings: 'settings', Logout: 'logout', Dashboard: 'dashboard' }

const Navbar: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const { login } = usePrivy()
  return (
    <AppBar position="static" sx={{ backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Expanded Menue */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {Object.entries(pages).map(([text, link]) => {
              return (
                <Typography
                  key={text}
                  component="a"
                  href={link}
                  noWrap
                  sx={{ mr: 2, color: 'primary.main', display: 'block', textDecoration: 'none' }}
                >
                  {text}
                </Typography>
              )
            })}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary.main',
              textDecoration: 'none',
              justifyContent: 'center',
              mr: 28,
            }}
          >
            FOLIONOMICS
          </Typography>

          {/* Collapsed Menue */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {Object.entries(pages).map(([text, link]) => {
                return (
                  <MenuItem key={text} onClick={handleCloseNavMenu}>
                    <Typography
                      component="a"
                      href={link}
                      textAlign="center"
                      sx={{
                        mr: 2,
                        color: 'primary.main',
                        textDecoration: 'none',
                      }}
                    >
                      {text}
                    </Typography>
                  </MenuItem>
                )
              })}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            FOLIONOMICS
          </Typography>

          {/* Avatar Top Right */}
          {!isLoggedIn ? (
            <Button onClick={login}>Connect Wallet</Button>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {Object.entries(settingsMenu).map(([text, link]) => (
                  <MenuItem key={text} onClick={handleCloseUserMenu}>
                    <Typography
                      noWrap
                      textAlign="center"
                      component="a"
                      href={link}
                      sx={{
                        color: 'primary.main',
                        textDecoration: 'none',
                      }}
                    >
                      {text}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
