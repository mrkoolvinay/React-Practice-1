import React from "react";
import { Card } from "@material-ui/core";
import ItemList from "./ItemList";

const MainContent = ({ items, toggleCheck, deleteItem, fetchError }) => {
    return (
        <Card>
            {items.length > 0 ? (
                <ItemList
                    items={items}
                    toggleCheck={toggleCheck}
                    deleteItem={deleteItem}
                />
            ) :
                (<Card>{fetchError ? fetchError : 'List is empty!'}</Card>)
            }
        </Card>
    );
}

export default MainContent;