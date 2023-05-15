import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './index.css'
import Navbar from "./components/Navbar";
import { Box, Button } from "@mui/material";
import Sidebar from "./components/Sidebar";
import StyledFilters from "./components/StyeldFilters";
import { filters } from "./filters";
import { Routes, Route } from "react-router-dom";
import ListingDetails from "./components/ListingDetails";
import Enquiries from "./Enquiries";
import Favorites from "./Favorites";
import BookedListing from "./components/BookedListing";
import { useState } from "react";
function App() {
  const [toggle, setToggle] = useState(false)
  const { isLoaded } = useLoadScript({googleMapsApiKey: import.meta.env.VITE_MapsKey})
  const mapContainerStyle = {
    width: '100%',
    height: 'calc(100% - 128px)'
  };
  if(!isLoaded) return <h1> google maps api not loaded</h1>
  return (
    <>
    <Routes>
    <Route path='/' element={
    <Box sx={{height: '100vh', p:1}}>
    <Navbar />
    <Box sx={{backgroundColor: 'filtersBar.main', py: 1, borderTopLeftRadius: '6px', borderTopRightRadius: '6px', mt: 2, display: 'flex', justifyContent: 'space-between' }}> 
    {filters.map(f => <Box key={f}> <StyledFilters type={f} /></Box>)}
    </Box>
    <Box style={mapContainerStyle} sx={{display: {xs:'block', sm:'flex'} }}>
      <Box sx={{width: {xs:'100%', sm:'50%'}, height: '100%', backgroundColor: 'background.secondary', overflow: 'scroll', display: {xs: toggle ? 'block' : 'none', sm:'block'}}}>
      <Sidebar />
      </Box>
      <Box sx={{width: '100%', height: "100%", display: toggle ? 'none' : 'block'  }}>
        <Map />    
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setToggle(!toggle)}
        sx={{
          position: 'sticky',
          display: {xs: 'block', sm:'none'},
          bottom: '20px',
          width:'100%',
          left: '20px',
          zIndex: 1000,
        }}
      >
        Show Listings
      </Button>
    </Box>
    </Box>
    } />
    <Route path='/:listing' element={<ListingDetails />} />
    <Route path='/enquiries' element={<Enquiries />} />
    <Route path='/:listing/enquiries' element={<BookedListing />} />
    <Route path='/favorites' element={<Favorites />} />
    </Routes>
    </>
  )
}

function Map() {
    return <GoogleMap zoom={14} center={{lat: 33.888630, lng: 35.495480}} mapContainerClassName="map-container"> <Marker position={{lat: 33.888630, lng: 	35.495480}} /> </GoogleMap>
}

export default App
