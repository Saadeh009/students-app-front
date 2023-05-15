
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getListingAsync, isBookedAsync } from '../redux/listingSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import RoomIcon from '@mui/icons-material/Room';
import { Container, Box, Typography, Button } from '@mui/material'
import HouseIcon from '@mui/icons-material/House';
import PushPinIcon from '@mui/icons-material/PushPin';
import BedIcon from '@mui/icons-material/Bed';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "../index.css"
import dayjs from 'dayjs';
import Navbar from './Navbar'
const ListingDetails = () => {
    const location = useLocation();
    const inEnq = location.pathname.substring(1).split('/').length
    const navigate = useNavigate()
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = (date) => {
        setSelectedDate(dayjs(date).format('MM/DD/YY'));
    };
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListingAsync({id: inEnq === 1 ? location.pathname.substring(1) : location.pathname.substring(1).split('/').slice(-1).toString() }))
    }, [dispatch])
    const l = useSelector(l => l.listings)
    return (
    <Box sx={{p:1}}>
    <Navbar />
    <Container maxWidth="sm" sx={{margin:"10px auto", p:2, backgroundColor:'secondary.main', borderRadius: '6px'}}>
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'start', gap:'1rem'}}>
                <Box sx={{display:'flex', width:'80%', backgroundColor:'rgba( 137, 196, 244, 0.7)', alignItems:'center', gap:'8px', borderRadius: '4px', px:1}}>
                    <HouseIcon />
                    <Typography variant='h3' fontSize={12} fontWeight={700}>Available</Typography>
                </Box>
                <Box sx={{display:'flex', width:'80%', backgroundColor:'rgba( 137, 196, 244, 0.7)', alignItems:'center', gap:'8px', borderRadius: '4px', px:1, textTransform:'capitalize'}}>
                    <PushPinIcon />
                    <Typography variant='h3' fontSize={12} fontWeight={700}>{l.city}</Typography>
                </Box>
                <Box sx={{display:'flex', width:'80%', backgroundColor:'rgba( 137, 196, 244, 0.7)', alignItems:'center', gap:'8px', borderRadius: '4px', px:1, textTransform:'capitalize'}}>
                    <BedIcon />
                    <Typography variant='h3' fontSize={12} fontWeight={700}>{l.bedrooms} bedrooms</Typography>
                </Box>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                    label="Pick your time"
                    value={selectedDate}
                    onChange={handleDateChange}
                     sx={{ "& label":{ fontSize: `12px` }, '& .MuiInputBase-root': {width:'80%', height:'48px', fontSize:'12px'}}}/>
                </DemoContainer>
                </LocalizationProvider>
            </Box>
            <Box sx={{width: '65%', height: '200px'}}>
                <img src={l.imgUrl} alt="listing" width="100%" height="100%" className='listing-img'/>
            </Box>
        </Box>
        <Box sx={{px:1, py:3}}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', p: 1}}>
            <Box> <Typography variant='h3' fontSize={16} fontWeight={700}>{l.title}</Typography></Box>
            <Box> <Typography variant='h3' fontSize={16} fontWeight={700}>${l.price} per month</Typography></Box>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between', p: 1}}>
            <Box sx={{display: 'flex', justifyContent: 'end', flexDirection: 'column', width: '100%'}}>
                <Box sx={{pl:1}}><Typography variant='h3' fontSize={16}>{l.bedrooms} bedrooms</Typography></Box>
                <Box sx={{py: 1, display: 'flex', alignItems:'center'}}>
                    <RoomIcon />
                    <Typography variant='h3' fontSize={12}>{l.address}</Typography>
                    </Box>
            </Box>
            <Box sx={{ width: '100%'}}> <Typography variant='h3' fontSize={12} >{l.desc}</Typography></Box>
        </Box>
        </Box>
        <Button 
            onClick={()=> {
                dispatch(isBookedAsync({id: l.id, isBooked: !l.isBooked, bookedDate: selectedDate}))
                navigate('/')
            }
            }
            variant={l.isBooked ? 'disabled' : 'contained'}
            sx={{textTransform: 'capitalize', width: '100%', backgroundColor:'background.primary','&:hover': {backgroundColor: 'background.buttonHover'}}}
            >
            Book a viewing
        </Button>
    </Container>
    </Box>
  )
}

export default ListingDetails