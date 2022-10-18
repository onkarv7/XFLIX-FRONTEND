import React from "react";
import "./Header.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FormLabel } from "@mui/material";


const Searchbar = ({handleSearch})=>{
return (
<Box className="searchbar">
                   <TextField
                    sx={{ input: { color: 'white' },backgroundColor:"#121212",label:{color:"white"} }}      
                    className="searchbar"
                    size="small"
                    fullWidth
                    onChange={handleSearch}
                    id="outlined-basic" label="Search" variant="outlined"
                    InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button sx={ { color: 'white' } } >0\</Button>

            </InputAdornment>
          ),
        }}
                
                />
                
    </Box>

    )

}

export default Searchbar
