import { Box, AppBar, Toolbar, Menu, MenuItem } from "@mui/material";
import logo from "../assets/cutiehousingwhite.png"
import Hamburger from "./Hamburger";
import CitySearch from "./CitySearch";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <AppBar sx={{backgroundColor: 'background.primary', borderRadius: '6px'}} position='static'>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
            <Box sx={{cursor:'pointer', mt:1}} onClick={()=> navigate('/')}>
            <img src={logo} alt="logo" width={32} height={40} />
            </Box>
            <CitySearch />
            <Hamburger />
        </Toolbar>
    </AppBar>
  )
}

export default Navbar