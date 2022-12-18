import { useState } from "react";
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import DrawerWindow from "../Drawer/DrawerWindow";

function Header({onPropertyChange}) {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => setDrawerOpen((prevState) => !prevState);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                component="nav"
                position="sticky"
            >
                <Toolbar>
                    <IconButton
                        aria-label="Open Drawer"
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        size="large"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="div"
                        variant="h6"
                        sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}
                    >
                        CSS.generate
                    </Typography>
                </Toolbar>
            </AppBar>
            <DrawerWindow
                drawerOpen={drawerOpen}
                handleDrawerToggle={handleDrawerToggle}
                onPropertyChange={onPropertyChange}
            />
        </Box>
    )

};

export default Header;