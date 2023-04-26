import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import Pages from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import Profile from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import List_item from './List_item';


const Sidebar = ({mode, setMode})=>{
    return (
        <Box flex={1} p={2} sx={{display: {xs:'none', sm:'block'}}}>
            <Box position="fixed">
            <List>
                <List_item href="#home" text="Homepage" icon={HomeIcon}/>
                <List_item href="#simple-text" text="Pages" icon={Pages}/>
                <List_item href="#simple-text" text="Groups" icon={GroupsIcon}/>
                <List_item href="#simple-text" text="Marketplace" icon={StoreIcon}/>
                <List_item href="#simple-text" text="Friends" icon={PersonIcon}/>
                <List_item href="#simple-text" text="Setting" icon={SettingsIcon}/>
                <List_item href="#simple-text" text="Profile" icon={Profile}/>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemIcon>
                            <DarkModeIcon/>
                        </ListItemIcon>
                        <Switch onChange={e=>setMode(mode==="light" ? "dark" : "light")}/>
                    </ListItemButton>
                </ListItem>
                
            </List>
            </Box>
        </Box>
    )
}

export default Sidebar