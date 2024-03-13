'use client'

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { FC } from 'react'

import DrawerAppBar from './DrawerAppBar'

const drawerWidth = 240

interface Props {
  drawerContent?: string
}

const ResponsiveDrawer: FC<Props> = ({ drawerContent }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [isClosing, setIsClosing] = React.useState(false)

  const handleDrawerClose = () => {
    setIsClosing(true)
    setMobileOpen(false)
  }

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false)
  }

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen)
    }
  }

  const drawerItems = (
    <div>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <img src="/assets/logo_Folionomics.png" alt="FolioNomics Logo" style={{ height: '3rem', margin: 'auto' }} />
        </Box>
      </Toolbar>
      <List>
        {[
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'Wallets', icon: <AccountBalanceWalletIcon /> },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'transparent',
                },
                '&:hover .listItemBackground': {
                  bgcolor: 'white',
                  borderRadius: '17px',
                  border: '1px solid green',
                  '.MuiListItemIcon-root, .MuiListItemText-primary': {
                    color: 'black',
                  },
                },
                '.MuiListItemIcon-root, .MuiListItemText-primary': {
                  color: 'inherit',
                },
                '.listItemBackground': {
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  borderRadius: '17px',
                  bgcolor: 'transparent',
                },
              }}
            >
              <span className="listItemBackground">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <DrawerAppBar handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} title="FOLIO NOMICS" />
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'background.default' },
          }}
        >
          {drawerItems}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'background.default' },
          }}
          open
        >
          {drawerItems}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {drawerContent && <Typography paragraph>{drawerContent}</Typography>}
      </Box>
    </Box>
  )
}

export default ResponsiveDrawer
