import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";

const SearchItem = ({ searchItem, setSearchItem }) => {

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="searchItem">Search</InputLabel>
                <OutlinedInput
                    autoFocus
                    id="searchItem"
                    value={searchItem}
                    labelWidth={80}
                    onChange={(e) => setSearchItem(e.target.value)}
                />
            </FormControl>
        </form>
    );
}

export default SearchItem;