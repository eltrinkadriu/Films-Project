import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext/AuthContext";

export const Sidebar = () => {
  const authCtx = useAuthContext();
  return (
    <Box
      component="aside"
      sx={{ width: "100%", maxWidth: 260, bgcolor: "primary.main" }}
    >
      <Box component="nav">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <NavLink to="/">
                <ListItemText primary="Dashboard" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <NavLink to="/posts">
                <ListItemText primary="Posts" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <NavLink to="/products">
                <ListItemText primary="Products" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <NavLink to="/users">
                <ListItemText primary="Users" />
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => authCtx.logout()}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
