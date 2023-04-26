import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

function List_item(props){
    return(
        <ListItem disablePadding>
                    <ListItemButton component="a" href={props.href}>
                        <ListItemIcon>
                            <props.icon/>
                        </ListItemIcon>
                        <ListItemText primary={props.text} />
                    </ListItemButton>
        </ListItem>
    )
}

export default List_item