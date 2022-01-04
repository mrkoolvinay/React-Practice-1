import { InputLabel, FormControl, OutlinedInput, makeStyles, Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useRef } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    addBtn: {
        height: '100% !important'
    },
}));

const AddItem = ({ newItem, setNewItem, submitItem }) => {
    const classes = useStyles;
    const inputRef = useRef();
    return (
        <form className={classes.root} onSubmit={submitItem}>
            <Grid container>
                <Grid item xs={10}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="addItem">Add Item</InputLabel>
                        <OutlinedInput
                            ref={inputRef}
                            autoFocus
                            id="addItem"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                            labelWidth={100}
                            size="small"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <Button type="submit" fullWidth className={classes.addBtn}
                        size="large"
                        variant="contained" color="primary"
                        onClick={() => inputRef.current.focus()}>
                        <AddIcon />
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default AddItem;