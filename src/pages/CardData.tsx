import { Box } from "@mui/material";
import './Card.css'
import { useLocation, useParams } from "react-router-dom";
function CardData () {
    const {id} = useParams();
    const {state} = useLocation();

    console.log(id);
    console.log(state);
    return (
        <Box>
                    <div className="col-md-auto">
                        <img src={state.image} className="img2" alt="" />
                        <p className="m-3 fw-semibold fs-3"><span className="fw-bold">Category: </span>{state.category}</p>
                        <p className="m-3 fs-5"><span className="fw-bold">Title: </span>{state.title}</p>
                        <p className="m-3 fw-bold fs-2">Price: {state.price} $</p>
                        <p className="m-3 fs-5"><span className="fw-bold">Description: </span>{state.description}</p>
                        <p className="m-3 fw-semibold fs-6"><span className="fw-bold">Rating: </span>{state.rating.rate}</p>
                        <p className="m-3 fw-semibold fs-6"><span className="fw-bold">Count: </span>{state.rating.count}</p>
                    </div>
        </ Box>
    )
}
export default CardData;