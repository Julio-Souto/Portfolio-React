import { signOut } from "firebase/auth"
import { Link } from "react-router-dom"
import { auth } from "./firebase/firebase"
import { styled, alpha } from '@mui/material/styles';
import { Box, IconButton, List, ListItem, ListItemButton, SwipeableDrawer } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { useState } from "react"
import { firebase } from "./assets/icons";
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';

// eslint-disable-next-line react/prop-types
function Nav({loggeado}) {
  const [state, setState] = useState({
    top: false,
    right: false,
  });
  const [toggleNav, setToggleNav] = useState(true)

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const [openDR, setOpenDR] = useState(false);

  const handleClickDR = () => {
    setOpenDR(!openDR);
  };

  const handleLogin = () => {
    signOut(auth)
      .then(() => {
        // localStorage.removeItem('user')
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  const list = (anchor) => (
    <Box
      sx={{ width: "100%", backgroundColor: "#242424", height: "100vh"}}
      role="presentation"
    >
      <List sx={{ marginTop: "1em", display: "flex", flexDirection: "column", gap: ".7em" }}>
        <ListItem key={"Inicio"} disablePadding onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>
          <ListItemButton sx={{padding: 0, '&:hover':{backgroundColor: "#333333"}}}>
            <Link className="w-full px-5 py-2" to='/'><i className="fa fa-home mr-2"></i>Inicio</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Perfil"} disablePadding onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>
          <ListItemButton sx={{padding: 0 ,'&:hover':{backgroundColor: "#333333"}}}>
            <Link className="w-full px-5 py-2" to='Perfil'><i className="fa fa-user mr-3"></i>Perfil</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"Proyectos"} disablePadding onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>
          <ListItemButton sx={{padding: 0, '&:hover':{backgroundColor: "#333333"}}}>
            <Link className="w-full px-5 py-2" to='Proyectos'><i className="fa fa-code mr-2"></i>Proyectos</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={"CV"} disablePadding onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>
          <ListItemButton sx={{padding: 0 ,'&:hover':{backgroundColor: "#333333"}}}>
            <a className="w-full px-5 py-2 hover:text-[#9499ff] text-[#646cff]" href="/Portfolio-React-Julio-Souto/assets/Julio-Souto-CV-Corto.pdf" target='_blank' rel='noopener noreferrer'><i className="fa fa-address-card mr-2"></i>CV</a>
          </ListItemButton>
        </ListItem>
        <ListItemButton onClick={handleClickDR} sx={{paddingLeft:"1em", paddingY:".2em" , '&:hover':{backgroundColor: "#333333"}}}>
        <img src={firebase} className="w-6 pl-0 mr-2"/>
        <ListItemText primary="Firebase" sx={{color: "white", fontWeight: "bold", fontFamily: ["Roboto","Helvetica","Arial","sans-serif"]}} disableTypography/>
        {openDR ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
        <Collapse in={openDR} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{display: "flex", flexDirection: "column", gap: ".5em"}}>
        <ListItem key={"Modificar Experiencias"} disablePadding onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}>
          <ListItemButton sx={{padding: 0, '&:hover':{backgroundColor: "#333333"}}}>
              <Link className="w-full px-5 py-2" to='AddReadForm'><i className="fa-solid fa-pen-to-square mr-2"></i>Modificar Experiencias</Link>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Registrate"} disablePadding onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
            <ListItemButton sx={{padding: 0, '&:hover':{backgroundColor: "#333333"}}}>
              <Link className="w-full px-5 py-2" to='RegisterForm'><i className="fa-solid fa-arrow-right-to-bracket mr-2"></i>Regístrate</Link>
            </ListItemButton>
          </ListItem>
          <ListItem key={"Inicia Sesion"} disablePadding onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
            <ListItemButton sx={{'&:hover':{backgroundColor: "#333333"}}}>
            {!loggeado ? <Link to='LoginForm' className="w-full"><button className='text-white hover:text-[#535bf2] w-full' onClick={handleLogin}>Inicia Sesion</button></Link> : <button className='text-white hover:text-[#535bf2]' onClick={handleLogin}>Cerrar Sesion</button>}
            </ListItemButton>
          </ListItem>
        </List>
        </Collapse>
      </List>
    </Box>
  );
  const changeNav = (e) => {
    if(toggleNav){
      e.target.className = "p-2 py-4 rounded-full fa fa-angle-left fa-lg mx-2"
      setToggleNav(false)
    }
    else{
      e.target.className = "p-2 py-4 rounded-full fa fa-angle-right fa-lg"
      setToggleNav(true)
    }
  }

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 4,
      marginTop: theme.spacing(1),
      minWidth: 180,
      backgroundColor: "#121212",
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
        
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
        '&:hover':{
          backgroundColor: "#202020"
        }
      },
    },
  }));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const changeTheme = (e) => {
  //   if(document.documentElement.getAttribute('data-theme')=="light"){
  //     e.target.className = "fa-solid fa-sun fa-lg bg-inherit border-none p-1 py-4"
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //   }
  //   else{
  //     e.target.className = "fa-solid fa-moon fa-lg bg-inherit border-none p-1 py-4"
  //     document.documentElement.setAttribute('data-theme', 'light');
  //   }
  // }
  
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-slate-800">
        {/* <div className="space-x-4 flex items-center"> */}
          <Link to='/'><h2 className="text-2xl font-bold text-white inline-block">Portfolio</h2></Link>
          {/* <button className="fa-solid fa-sun fa-lg bg-inherit border-none p-1 py-4" onClick={changeTheme}></button>
        </div> */}
        
        <div className="space-x-3 nav">
          <button className="p-2 py-4 rounded-full fa fa-angle-right fa-lg" onClick={changeNav}></button>
          {toggleNav ? 
            <div className="flex items-center space-x-3">
              <Link to='/'><i className="fa fa-home mr-1"></i> Inicio</Link>
              <Divider orientation="vertical" flexItem sx={{ bgcolor: "#e2e2e2" }} />
              <Link to='Perfil'><i className="fa fa-user mr-1"></i> Perfil</Link>
              <Divider orientation="vertical" flexItem sx={{ bgcolor: "#e2e2e2" }} />
              <Link to='Proyectos'><i className="fa fa-code mr-1"></i> Proyectos</Link>
              <Divider orientation="vertical" flexItem sx={{ bgcolor: "#e2e2e2" }} />
              <a href="/Portfolio-React-Julio-Souto/assets/Julio-Souto-CV-Corto.pdf" target='_blank' rel='noopener noreferrer' className="hover:text-[#9499ff] text-[#646cff]"><i className="fa fa-address-card mr-1"></i> CV</a>
              <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                sx={{backgroundColor: "#535bf2", fontWeight: "bold", paddingLeft: ".5em"}}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                <img src={firebase} className="w-6 pl-0 mr-1"/>Firebase
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple sx={{marginTop: ".3em"}}>
                  {!loggeado ? <Link to='Restricted'><i className="fa-solid fa-pen-to-square mr-1"></i>Modificar Experiencias</Link> : <Link to='AddReadForm'><i className=""></i>Modificar Experiencias</Link>}
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple sx={{marginTop: ".5em"}}>
                  <Link to='RegisterForm'><i className="fa-solid fa-arrow-right-to-bracket mr-1"></i>Regístrate</Link>
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple sx={{marginTop: ".5em"}}>
                  {!loggeado ? <Link to='LoginForm' className="w-full"><button className='text-white bg-slate-800 hover:text-[#535bf2] w-full' onClick={handleLogin}>Inicia Sesion</button></Link> : <button className='text-white bg-slate-800 hover:text-[#535bf2]' onClick={handleLogin}>Cerrar Sesion</button>}
                </MenuItem>
              </StyledMenu>    
            </div>
          : <div>
            <IconButton
                sx={{padding: 0, outline: "none !important" }}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer('top', true)}
              >
                <MenuIcon sx={{width: "32px", height: "32px"}}/>
              </IconButton>
              <SwipeableDrawer
                PaperProps={{sx: {width:"100%", height:"47%"}}}
                anchor={'top'}
                open={state['top']}
                onClose={toggleDrawer('top', false)}
                onOpen={toggleDrawer('top', true)}
              >
                {list('top')}
              </SwipeableDrawer>
          </div>}
        </div>
        
      
        <IconButton
          id="outer-container"
          sx={{padding: 0, outline: "none !important" }}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer('right', true)}
        >
          <MenuIcon sx={{width: "32px", height: "32px"}}/>
        </IconButton>
        <SwipeableDrawer
          PaperProps={{sx: {width:"40%"}}}
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          {list('right')}
        </SwipeableDrawer>
        
      </div>
    </>
  )
}

export default Nav