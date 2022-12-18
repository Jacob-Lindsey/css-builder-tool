import { useEffect, useState } from "react";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography
} from "@mui/material";
import axios from "axios";

const cssPropertiesLink = "/db/cssProperties.json";
const drawerWidth = 350;

function useGetCSSProperties() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get(cssPropertiesLink)
            .then((res) => setData(res.data));
    }, []);
    return data;
};

function DrawerWindow({
    drawerOpen = false,
    handleDrawerToggle,
    onPropertyChange
}) {

    const cssProperties = useGetCSSProperties();
    const cssPropertyNames = cssProperties ? Object.keys(cssProperties) : [];

    return (
        <Box component="nav">
            <Drawer
                onClose={handleDrawerToggle}
                open={drawerOpen}
                sx= {{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth } }}
                variant="temporary"
                ModalProps={{ keepMounted: true }}
                PaperProps={{ sx: { backgroundColor: "hsl(206, 8%, 17%)" } }}
            >
                <Box sx={{ textAlign: "center" }}>
                    <Typography
                        sx={{ color:"white", fontSize: "1.5em", fontWeight: 700, my: 2 }}
                        variant="h6"
                    >
                        CSS Properties
                    </Typography>
                    <Divider />
                    <List>
                        {cssPropertyNames.map((property) => (
                            <ListItem key={property} disablePadding>
                                <ListItemButton
                                    onClick={() => onPropertyChange(property)}
                                    sx={{ textAlign: "center" }}
                                >
                                    <ListItemText
                                        primary={property}
                                        primaryTypographyProps={{
                                            color: "white",
                                            fontSize: "1.1em",
                                            variant: "body2"
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                 </Box>
            </Drawer>
        </Box>
    )

};

export default DrawerWindow;