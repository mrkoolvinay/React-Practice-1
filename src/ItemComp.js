import {
    ListItem, ListItemIcon, Checkbox, ListItemText,
    ListItemSecondaryAction, IconButton
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const ItemComp = ({item, toggleCheck, deleteItem}) => {
    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox onClick={() => toggleCheck(item.id)}
                    checked={item.checked}
                    tabIndex="0" color="primary"
                />
            </ListItemIcon>
            <ListItemText id={item.id} primary={item.item}
                style={(item.checked) ? { textDecoration: 'line-through' } : null} />
            <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => deleteItem(item.id)}>
                    <Delete />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default ItemComp;