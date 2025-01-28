

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice(
    {
        name:"products",
        initialState:{
            products:[],    
            filteredProducts:[] 
        },
        reducers:{
            addProduct : (state,action)=>{
                
                state.products.push(action.payload)
            },
           
            deleteProduct:(state,action)=>{
                state.products=state.products.filter(
                    (product)=>product.id!==action.payload)
                    state.filteredProducts = state.products; 
            },
            searchProduct:(state,action)=>{
                const mydata=action.payload.toLowerCase();
                if(mydata.length == 0){
                    state.filteredProducts = [];
                }
                else{
                state.filteredProducts =state.products.filter((product)=>
                product.name.toLowerCase().includes(mydata))
            }
            }
        }
    }
)

export const {addProduct ,deleteProduct,searchProduct} = productSlice.actions

export default productSlice.reducer