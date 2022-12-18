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
import usePromiseState from "../../hooks/usePromiseState";

const cssPropertiesLink = "/db/cssProperties.json";
const drawerWidth = 275;

function useGetCSSProperties() {
    const data = usePromiseState(() => {
        if(cssPropertiesLink) return axios.get(cssPropertiesLink);
        return Promise.resolve(null);
    });
    return data;
};

function DrawerWindow({
    drawerOpen = false,
    handleDrawerToggle = null
}) {

    const cssProperties = useGetCSSProperties();
    console.log({cssProperties});

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
                <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
                    <Typography
                        sx={{ color:"white", fontSize: "1.5em", fontWeight: 700, my: 2 }}
                        variant="h6"
                    >
                        CSS Properties
                    </Typography>
                    <Divider />
                    <List>
                        {/* {cssProperties.map((property) => (
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
                        ))} */}
                    </List>
                 </Box>
            </Drawer>
        </Box>
    )

};

export default DrawerWindow;