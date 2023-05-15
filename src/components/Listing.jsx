import { Box, Typography, Icon, Button } from '@mui/material'
import React, { useState } from 'react'
import '../index.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { isFavoriteAsync } from '../redux/listingSlice';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { getListingAsync } from '../redux/listingSlice';
const Listing = ({id, title, imgUrl, bedrooms, price, isBooked, isFavorite}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <>
    <Box sx={{display:'flex', height:'105px'}} >

    <Box sx={{width: '70%'}} >
    <img src={imgUrl} width="100%" height="100%" className='listing-img'  />
    </Box>

    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', p: 1}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Typography variant='h3' fontSize={12} fontWeight={700}>{title}</Typography>
      <ArrowRightAltIcon sx={{ cursor: 'pointer' }} onClick={() => location.pathname.substring(1) === 'enquiries' ? navigate(`/${id}/enquiries`) : navigate(`/${id}`) } />
      </Box>


      <Box sx={{display: 'flex', height: '100%', justifyContent: 'space-between'}}>
      <Typography variant='h3' fontSize={10} color='priceAndBedrooms.main' fontWeight={700} sx={{mt: 1}}>{bedrooms} bedrooms</Typography>
      <Box sx={{height:'100%', display: 'flex', alignItems:'end'}}>
      </Box>
      </Box>
      <Box sx={{display: 'flex', height: '100%', justifyContent: 'space-between', alignItems: 'end'}}>
      <Box sx={{height:'100%', display: 'flex', alignItems:'end'}}>
      <Typography variant='h3' fontSize={10} color='priceAndBedrooms.main' fontWeight={700} sx={{backgroundColor: 'rgba( 137, 196, 244, 0.7)', padding:'4px', borderRadius: '4px'}}>${price} per month</Typography>
      </Box>
      <Icon sx={{ color: 'background.primary', cursor:'pointer' }} onClick={() => dispatch(isFavoriteAsync({id: id, isFavorite: !isFavorite}))}>
        { isFavorite ?  <FavoriteIcon /> : <FavoriteBorderIcon />  }
      </Icon>
      </Box>
      </Box>

    </Box>
    </>
  )
}

export default Listing