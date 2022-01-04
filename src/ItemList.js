import { List } from "@material-ui/core";
import ItemComp from "./ItemComp";

const ItemList = ({items, toggleCheck, deleteItem}) => {
    return(
        <List>
            {items.map(item => (
                <ItemComp
                    key={item.id}
                    item={item}
                    toggleCheck={toggleCheck}
                    deleteItem={deleteItem}
                />
            ))}
        </List>
    );
}

export default ItemList;