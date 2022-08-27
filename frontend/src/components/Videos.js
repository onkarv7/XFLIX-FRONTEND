    import React, { useEffect, useState } from "react";
import "./Videos.css"
import { InputAdornment, Grid } from '@mui/material';
import Header from "./Header"
import Videocard from "./Videocard";
import { useHistory } from "react-router";



const Videos=({vid})=>{
    
    return (
        <Grid className="mainbox" container spacing={2} sx={{backgroundColor:"#181818"}}>
        {vid.length === 0 ?(<p>jhgjk</p>):(
            <>
        {
            
            vid.map((x) => (
                <Grid item xs={6} md={3} key={x._id}>
                    <Videocard video={x} />
                </Grid>
            ))
        }</>)}
    </Grid>
    )
}

export default Videos;