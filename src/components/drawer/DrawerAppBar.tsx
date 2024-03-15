'use client'

import React, { FC, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search' 
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar, Menu, MenuItem } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
    minWidth: '20ch',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const UserSection = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}))

const NotificationButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%', 
  backgroundColor: alpha(theme.palette.common.white, 0.15), 
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25), 
  },
  margin: theme.spacing(1), 
}));

interface DrawerAppBarProps {
  handleDrawerToggle: () => void
  drawerWidth: number
  title: string
}

const DrawerAppBar: FC<DrawerAppBarProps> = ({ handleDrawerToggle, drawerWidth, title }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const isMenuOpen = Boolean(anchorEl)

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  )

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'background.default',
          color: 'text.primary',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }}>
    <Typography variant="h6" noWrap component="div">
      Hi,{title}
    </Typography>
    <Typography variant="subtitle2" noWrap component="div">
      Here is your detailed portfolio view
    </Typography>
  </div>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search Anything…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
         <NotificationButton>
            <NotificationsIcon />
          </NotificationButton>
          <UserSection sx={{ gap: '8px' }}>
              <Avatar />
              <Typography
              variant="subtitle1" 
              noWrap
              component="div"
              sx={{ marginRight: -2 }}
            >
              {title}
            </Typography>
            <IconButton
              size="small" 
              sx={{ cursor: 'pointer' }}
              onClick={handleProfileMenuOpen}
              
            >
              <ArrowDropDownIcon />
            </IconButton>
          </UserSection>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  )
}

export default DrawerAppBar