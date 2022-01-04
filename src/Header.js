import { AppBar, Toolbar, IconButton, Typography  } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Groceries
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
