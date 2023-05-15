import { useSelector, useDispatch } from "react-redux" 
import { Box, Typography } from '@mui/material';
import { getListingsAsync } from '../redux/listingSlice';
import { useEffect } from "react";
import Listing from "./Listing";
const Sidebar = () => {
	const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getListingsAsync())
		}, [dispatch])
    window.onpopstate = e => {
      dispatch(getListingsAsync())
    }
  const listings = useSelector(l => l.listings)
  return (
    
    <Box sx={{width: '100%'}}>
      {!listings.length ? ("error fetching listings") : (listings.map(l => (
      <Box key={l.id} sx={{p: 1}}>
        <Listing id={l.id} title={l.title} imgUrl={l.imgUrl} bedrooms={l.bedrooms} price={l.price} isBooked={l.isBooked} isFavorite={l.isFavorite}/>
      </Box>
    )))}

    </Box>
  )
}

export default Sidebar