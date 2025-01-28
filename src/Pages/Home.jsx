import React from "react";
import AddProductForm from "./AddProductForm";
import DisplayProduct from "./DisplayProduct";
import Search from "./Search";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate()
  useEffect(()=>{
      let token = window.localStorage.getItem("taskToken")
      if(!token){
        navigate("/")
      }
    },[])
  return (
    <>
      
      {/* <div className="product"> */}
      <div style={{display:"flex", justifyContent:"center", paddingTop:"100px"}}>
        <div className="addproduct" >
          <div style={{border:"2px solid black",backgroundColor:"lightblue", borderRadius:"10px"}}>
          <h3>Add Product</h3></div>
        <AddProductForm />
        </div>
        <br />    
       <div className="searchproduct" >
       <div style={{border:"2px solid black", backgroundColor:"lightblue", borderRadius:"10px"}}>
    
          <h3>Search Product</h3></div>
          <Search/>
        </div> 
         <br />
        <div className="productsearch" >
        <div style={{border:"2px solid black", backgroundColor:"lightblue", borderRadius:"10px"}}>
          <h3>List of Product</h3></div>
        <DisplayProduct />
        </div>
       {/* </div> */}
        
       </div>
    </>
  );
};

export default Home;
