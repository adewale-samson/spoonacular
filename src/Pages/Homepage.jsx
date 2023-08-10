import React, { useState } from 'react'
import { styled, InputAdornment, Stack, Box, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Card from "../Components/Card";
import useFetch from '../useFetch'

const Search = styled(TextField)(({theme}) => ({
  borderRadius: '5px',
  border: "1px solid #EAEAEA", marginBottom: '40px',
  width: {xs:'90%', md:"52.632%"}, boxSizing: 'border-box',
  boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
  '&:focus':{
    border: 'none',
    outline: 'none'
  },
  '&:hover':{
    border: 'none',
    outline: 'none'
  },
  '&:active':{
    border: 'none',
    outline: 'none'
  }
}));


  
  const Homepage = () => {
    const [searchText, setSearchText] = useState('')
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=858e1220dac0424cad96e4430bfd7cd3&query=${searchText}&addRecipeInformation=true&addRecipeNutrition=true`
    const {recipe, handleClick} = useFetch(url);

  return (
    <Box sx={{padding:{lg:'30px 50px', md:'30px 50px', sm:'30px 50px', xs:'30px 25px'}}}>
      <Typography
        variant="h6"
        color="primary"
        gutterBottom
        sx={{ fontSize: "16px", fontWeight: "600" }}
      >
        Search by recipe, ingredients and nutrients
      </Typography>
      
  
      <Search
        type='search'
        placeholder="Search Recipe"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <SearchIcon />
            </InputAdornment>
          ),
        }}  
      />
      <Stack direction='row' justifyContent='space-between' alignItems='center' flexWrap='wrap' sx={{paddingTop: '45px', justifyContent: {xs: 'space-around', md: 'space-around'}}}>
        {
          recipe.map((info) => {
             return <Card key={info.id}  info={info} moreClick={() =>handleClick(info)}/>

          })
        }
      </Stack>
    </Box>
  )
}

export default Homepage