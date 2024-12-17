import * as React from "react";
import { useLocation } from "react-router-dom";
import { Link, scroller } from "react-scroll";
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
const navScroll = ["about", "portfolio", "contact", "/"];

export default function Navbar({ user }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation(); // Get current path

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const filteredNavItem = user
    ? navItems.filter((item) => item !== "Register")
    : navItems;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((navItem) => (
          <ListItem key={navItem} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  position: "relative",
                  display: "inline-block",
                  paddingBottom: "5px",
                  borderBottom:
                    location.pathname === `/${navItem.toLowerCase()}`
                      ? "2px solid #00bcd4"
                      : "2px solid transparent",
                  transition: "border-color 0.3s ease",
                }}
              >
                {navItem}
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
            <h4
              style={{
                fontFamily: '"Sixtyfour Convergence", sans-serif',
                fontOpticalSizing: "auto",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              <Link>M J</Link>
            </h4>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {filteredNavItem.map((navItem, index) => (
              <Button key={navItem} sx={{ color: "#fff" }}>
                <Link
                  activeClass="active"
                  to={navScroll[index]}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: "5px",
                    borderBottom:
                      location.pathname === `/${navItem.toLowerCase()}`
                        ? "2px solid #00bcd4"
                        : "2px solid transparent",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  {navItem}
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
