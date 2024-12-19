import * as React from "react";
import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["About", "Portfolio", "Contact"];
const navScroll = ["about", "portfolio", "contact"];

export default function Navbar({ user }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navScroll.map((section, index) => (
          <ListItem key={section} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                onClick={handleDrawerToggle}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                  paddingBottom: "5px",
                  display: "inline-block",
                }}
              >
                {navItems[index]}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            M J
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navScroll.map((section, index) => (
              <Button key={section} sx={{ color: "#fff" }}>
                <Link
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                    paddingBottom: "5px",
                  }}
                >
                  {navItems[index]}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
