import React from 'react'
import imageCard from './../assets/images/user_photo.jpg'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography, autocompleteClasses } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const Post = ({image, tittle, description}) => {
    return (
            <Card sx={{ maxWidth: 450, margin: 5 }}>

                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="">
                            B
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={tittle}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    image={image}
                    alt="profile photo"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Add to favorites">
                        <Checkbox sx={{

                            '&.Mui-checked': {
                                color: 'red',
                            },
                        }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        
    )
}

export default Post