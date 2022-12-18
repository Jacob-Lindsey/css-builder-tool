import { useState } from "react";
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const cssProperties = ["Prop1", "Prop2", "Prop3", "Prop4"];
const drawerWidth = 275;

function Header() {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => setDrawerOpen((prevState) => !prevState);

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography
                sx={{ color:"white", fontSize: "1.5em", fontWeight: 700, my: 2 }}
                variant="h6"
            >
                CSS Properties
            </Typography>
            <Divider />
            <List>
                {cssProperties.map((property) => (
                    <ListItem key={property} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText
                                primary={property}
                                primaryTypographyProps={{
                                    color: "white",
                                    fontSize: "1.2em",
                                    fontWeight: "500",
                                    variant: "body2"
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

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
            <Box component="nav">
                <Drawer
                    onClose={handleDrawerToggle}
                    open={drawerOpen}
                    sx= {{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth } }}
                    variant="temporary"
                    ModalProps={{ keepMounted: true }}
                    PaperProps={{ sx: { backgroundColor: "hsl(206, 8%, 17%)" } }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )

};

export default Header;