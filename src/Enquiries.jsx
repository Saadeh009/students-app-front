import { useSelector, useDispatch } from "react-redux" 
import { Box, Container, Typography } from '@mui/material';
import { getListingsAsync } from './redux/listingSlice';
import { useEffect } from "react";
import Listing from "./components/Listing";
import Navbar from "./components/Navbar";
const Enquiries = () => {
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getListingsAsync())
		}, [dispatch])
    window.onpopstate = e => {
      dispatch(getListingsAsync())
    }
  const listings = useSelector(l => l.listings)
  return (
    <>
    <Box sx={{p:1}}>
    <Navbar />
    <Container sx={{ maxWidth: "sm", backgroundColor: 'secondary.main', mt:1, borderRadius:'6px' }}>
    <Box sx={{ width: '100%' }}>
        {!listings.length ? ("error fetching listings") : (listings.flatMap(l => l.isBooked ? (
            <Box key={l.id} sx={{ p: 1 }}>
                <Listing id={l.id} title={l.title} imgUrl={l.imgUrl} bedrooms={l.bedrooms} price={l.price} isBooked={l.isBooked} isFavorite={l.isFavorite} bookedDate={l.bookedDate} />
            </Box>
        ): [] ))}
          </Box>
      </Container>
    </Box>
    </>
  )
}

export default Enquiries