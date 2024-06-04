import  Home  from "../pages/Home";
import  CardData  from "../pages/CardData";
import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";


function Render() {
    const [APIData,setAPIData] = React.useState<any>([]);

    const GetAPI = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            console.log(res);
            setAPIData([...res.data]);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    

    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home dataSource={APIData} renderAPI={GetAPI}/>}/>
                <Route path="CardData" element={<CardData/>}/>
                <Route path="CardData/:id" element={<CardData />}/>
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default Render;