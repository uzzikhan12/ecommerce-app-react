import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Card.css'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from 'react';

function ScreenCard (props:{
    dataSource:any,
    renderAPI: () => void
}
)
{
    const {dataSource,renderAPI} = props
    const nevigate = useNavigate();

    return(
        <div className="container text-center">
            <Button  className='mt-3 mb-3' onClick={renderAPI} variant="contained">Get Data</Button>
            <div className="row">
                {dataSource.map((box:any,ind:any)=>
                    <div key={ind} className=" col-md-4 col-sm-6 m-auto">
                    <Card className='shadow' sx={{ maxWidth: 345,margin:1}}>
                    <CardActionArea>
                    <img src={box.image} className="img" alt="" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {box.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {box.title}
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary" onClick={(()=>{
                            nevigate(`/CardData/${ind}` ,{state:box});
                        })}>
                        Details
                        </Button>
                        </CardActions>
                        </Card>
                    </div>                
                    )}
         </div>    
        </div>
    )
}

export default ScreenCard

        