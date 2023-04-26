import React, { useState } from 'react'
import { AppBar, Box, InputBase, MenuItem, Toolbar, Typography } from '@mui/material'
import styled from '@emotion/styled'
import PetsIcon from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import UserPhoto from '../assets/images/user_photo.jpg'
import Menu from '@mui/material/Menu';
import './Navbar.css'


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"

})

const Search = styled("div")(({theme}) => ({
    backgroundColor: "#fff",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius * 1,
    width: "40%"
}))


const Userbox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}))


const Icons = styled(Box)(({theme}) => ({
    display: 'none',
    alignItems: 'center',
    gap: "20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
   
}))



const Navbar = ({mode}) => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{display: {xs:'none', sm:'block'}}}>CONNECT</Typography>
                <PetsIcon sx={{display: {xs:'block', sm:'none'}}}/>
                <Search><InputBase placeholder='Search...' inputProps={{
          style: {
            color: "gray",
          },
        }}></InputBase></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon/>
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications/>
                    </Badge>
                    <Avatar className = "avatar" sx={{width: 30, height: 30}}alt="Gabriel Bastos" src={UserPhoto} onClick={e => setOpen(true)}/>
                </Icons>
                <Userbox>
                    <Avatar className = "avatar" sx={{width: 30, height: 30}} alt="Gabriel Bastos" src={UserPhoto} onClick={e => setOpen(true)} />
                    <Typography variant='span'>Gabriel Bastos</Typography>
                </Userbox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
