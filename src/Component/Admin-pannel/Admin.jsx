import {
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  AppBar,
  IconButton,
  Toolbar,
  Box,
  ListSubheader,
  Collapse,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Breadcrumbs,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
} from "@mui/material";

import {
  Link,
  Outlet,
  useNavigate,
  useResolvedPath,
  useMatch,
  useLocation,
} from "react-router-dom";
import Logo from "./adanilogo.png"
import adminMenu from "../../json-api/admin-menu.json";
import { Dashboard, Logout, Login, PersonAdd } from "@mui/icons-material";
import { use, useState, useEffect } from "react";
import { deepOrange } from "@mui/material/colors";
import MediaQuery from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { logOutRequest } from "../Login/login.action";


// admin component
const Admin = () => {


  const dispatch = useDispatch();
  let loginReducer  = useSelector((res) => res.loginReducer);
 let adminReducer      = useSelector(ress=>ress.adminReducer) 

  const navigate = useNavigate();

  const [activeOnMobile, setActiveOnMobile] = useState(false);
  const [active, setActive] = useState(true);
  const [width, setWidth] = useState(87);
  const [dropdowns, setDropdown] = useState(false);
  const [menuParent, setMenuParent] = useState(null);
  const showMenu = Boolean(menuParent);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const routing = location.pathname.split("/");
  const [mode, setMode] = useState("light");

  const openProfileMenu = (e) => {
    return setMenuParent(e.target);
  };

  const showUserInfo = () => {
    if (!user) {
      let userInfo = JSON.parse(sessionStorage.getItem("user"));
      setUser(userInfo);
    }
  };

  const userLogInORnot = () => {
    if (loginReducer.logout) {
      navigate("/login");
    } else if (loginReducer.logoutfail) {
      window.confirm("Log Out Fail Try Again");
    }
  };

  useEffect(() => {
    showUserInfo();
    userLogInORnot();
  }, [user, loginReducer]);

  const Nav = ({ data }) => {
    const resolve = useResolvedPath(data.link ? data.link : null);
    const activeLink = useMatch({
      path: resolve.pathname,
      end: true,
    });

    const navDesign = (
      <>
        <ListItem sx={{ py: 0 }}>
          <ListItemButton
            LinkComponent={Link}
            to={data.link ? data.link : null}
            onClick={() => (data.isDropdown ? setDropdown(!dropdowns) : null)}
            sx={{
              bgcolor: activeLink && data.link ? deepOrange[400] : null,
              color: activeLink && data.link ? "white" : null,
              "&:hover": {
                bgcolor: activeLink && data.link ? deepOrange[500] : null,
              },
            }}
          >
            <ListItemIcon>
              <span className="material-icons-outlined">{data.icon}</span>
            </ListItemIcon>
            <ListItemText primary={data.label} />
            {data.isDropdown ? (
              <span className="material-icons-outlined">
                {" "}
                {dropdowns ? "expand_less" : "expand_more"}{" "}
              </span>
            ) : null}
          </ListItemButton>
        </ListItem>
        {data.isDropdown ? <Dropdown dmenu={data.dropdownMenu} /> : null}
      </>
    );
    return navDesign;
  };

  const Dropdown = ({ dmenu }) => {
    const dropdowndesign = (
      <>
        <Collapse
          in={dropdowns}
          sx={{
            transition: "0.3s",
            pl: 6,
          }}
        >
          {dmenu.map((el, index) => {
            return <Nav data={el} key={index} />;
          })}
        </Collapse>
      </>
    );

    return dropdowndesign;
  };

  const MenuList = ({ data }) => {
    const menuDesign = (
      <>
        <List subheader={<ListSubheader>{data.category}</ListSubheader>}>
          {data.menus.map((el, index) => {
            return <Nav data={el} key={index} />;
          })}
        </List>
      </>
    );

    return menuDesign;
  };

  const DesktopDrawer = () => {
    const tem = (
      <>
        <Drawer
          variant="persistent"
          open={active}
          onMouseOver={() => setWidth(250)}
          onMouseLeave={() => setWidth(87)}
          sx={{
            width: width,
            "& .MuiDrawer-paper": {
              width: width,
              bgcolor: adminReducer.dark ?  "#0000007b" : "inerit",
              transition: "0.3s",
              overflow: "scroll",
            },
          }}
        >
          <List
            subheader={
              <ListSubheader
                sx={{
                  p: 0,
                  m: 0,
                }}
              >
                <img src={Logo} width={"90px"} />
              </ListSubheader>
            }
          />

          {adminMenu.map((el, index) => {
            return <MenuList data={el} key={index} />;
          })}
        </Drawer>
      </>
    );
    return tem;
  };

  const MobileDrawer = () => {
    const tem = (
      <>
        <Drawer
          variant="temporary"
          open={activeOnMobile}
          onClick={controlDrawerOnMobile}
          sx={{
            width: width,
            "& .MuiDrawer-paper": {
              width: width,
              bgcolor: adminReducer.dark ? "#0000007b"  : "white" ,
              transition: "0.3s",
              overflow: "scroll",
            },
          }}
        >
          <List
            subheader={
              <ListSubheader
                sx={{
                  p: 0,
                  m: 0,
                }}
              >
                <img src={Logo} width={"90px"} />
              </ListSubheader>
            }
          />

          {adminMenu.map((el, index) => {
            return <MenuList data={el} key={index} />;
          })}
        </Drawer>
      </>
    );
    return tem;
  };

  const controlDrawerOnDesktop = () => {
    return (
      //   setActive(!active)  ,
      //   active ? setWidth(0) :setWidth(250)
      width == 250 ? setWidth(87) : setWidth(250)
    );
  };

  const controlDrawerOnMobile = () => {
    return (
      setActiveOnMobile(!activeOnMobile),
      activeOnMobile ? setWidth(0) : setWidth(250)
      // width == 250 ? setWidth(87) : setWidth(250)
    );
  };

  // dark mode
  const darkmode = (e) => {
    let check = e.target.checked;

    if (check) {
      dispatch({
        type: "dark",
      });
      setMode("dark");
    } else {
      dispatch({
        type: "light",
      });
      setMode("light");
    }
  };

  // Admin Design
  const design = (
    <>
      <MediaQuery minWidth={769}>
        <DesktopDrawer />
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <MobileDrawer />
      </MediaQuery>

      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          width: {
            md: `calc(100% - ${width}px)`,
            xs: "100%",
          },
          transition: "0.3s",
          bgcolor: adminReducer.dark ? "rgb(64, 64, 64)" : "white",
        }}
      >
        <Stack direction={"row"} justifyContent="space-between">
          <Toolbar>
            <Stack direction={"row"} alignItems="center" spacing={"12px"}>
              <MediaQuery minWidth={1224}>
                <IconButton onClick={controlDrawerOnDesktop}>
                  <span className="material-icons-outlined">menu</span>
                </IconButton>

                <IconButton>
                  <span className="material-icons-outlined">email</span>
                </IconButton>

                <IconButton>
                  <span className="material-icons-outlined">web_asset</span>
                </IconButton>

                <IconButton>
                  <span className="material-icons-outlined">star</span>
                </IconButton>
              </MediaQuery>

              <MediaQuery maxWidth={1223}>
                <IconButton onClick={controlDrawerOnMobile}>
                  <span className="material-icons-outlined">menu</span>
                </IconButton>
              </MediaQuery>
            </Stack>
          </Toolbar>

          <Toolbar>
            <Stack alignItems="center" direction="row" spacing={"12px"}>
              <FormGroup sx={{ color: "black" }}>
                <FormControlLabel
                  control={<Switch color="error"
                    onChange={darkmode} />}
                  label={mode}
                  sx={{
                     color : adminReducer.dark ? "white" : "black"
                  }}
                />
              </FormGroup>

              <IconButton>
                <span className="material-icons-outlined">notifications</span>
              </IconButton>

              <IconButton>
                <span className="material-icons-outlined">
                  add_shopping_cart
                </span>
              </IconButton>

              <IconButton>
                <span className="material-icons-outlined">search</span>
              </IconButton>

              <IconButton onClick={openProfileMenu}>
                <Avatar src="https://as2.ftcdn.net/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
              </IconButton>

              <Menu
                open={showMenu}
                onClick={() => setMenuParent(null)}
                anchorEl={menuParent}
                slotProps={{
                  paper: {
                    elevation: 3,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined "
                      >
                        home
                      </span>
                      Home
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>

                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined "
                      >
                        person
                      </span>
                      {user && user.name}
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>

                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined"
                      >
                        phone
                      </span>
                      {user && user.mobile}
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>
                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined"
                      >
                        email
                      </span>
                      {user && user.email}
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>

                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton>
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined"
                      >
                        settings
                      </span>
                      Settings
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>

                <MenuItem sx={{ m: 0, p: 0 }}>
                  <ListItemButton onClick={() => dispatch(logOutRequest())}>
                    <ListItemIcon>
                      <span
                        style={{ marginRight: "12px" }}
                        className="material-icons-outlined "
                      >
                        logout
                      </span>
                      Logout
                    </ListItemIcon>
                  </ListItemButton>
                </MenuItem>
              </Menu>
            </Stack>
          </Toolbar>
        </Stack>
      </AppBar>

      <Stack
        sx={{
          ml: {
            md: `${width}px`,
            xs: "0px",
          },
          mt: 4,
          p: 3,
          transition: "0.3s",
          bgcolor: adminReducer.dark ?  "#0000007b" : "white",
          minHeight: "100vh",
        }}
      >
        <Breadcrumbs
          sx={{
            mt: 3,
          }}
        >
          {routing.map((el, index) => {
            if (index > 0) {
              return (
                <Link to={el != "admin-panel" ? el : null} key={index}>
                  {el}
                </Link>
              );
            }
          })}

          {/* <Typography>
                                     {
                                          location.pathname
                                     }
                             </Typography> */}
        </Breadcrumbs>

        <Outlet />
      </Stack>
    </>
  );

  return design;
};

export default Admin;
