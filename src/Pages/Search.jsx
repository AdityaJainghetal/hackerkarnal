import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "../Redux/ProductSlice";

import { useSelector} from "react-redux";


const Search = () => {
    const [data, setMydata] = useState("");
    const dispatch = useDispatch();
        const filteredData = useSelector((state) => state.product.filteredProducts);
    
     
    
        const ans = filteredData.map((key) => (
            <tr key={key.id}>
                <td>{key.name}</td>
                <td>${key.price}</td>
               
            </tr>
        ));
    

    const handleSearch = (e) => {
        const value = e.target.value;
        setMydata(value);
        dispatch(searchProduct(value));
    };

    return (
        <div>
            <input
                type="text"
                value={data}
                onChange={handleSearch}
                id="Search"
                placeholder="Search by name"
                style={{
                    padding: "10px",
                    width: "100%",
                    border: "1px solid black",
                    borderRadius: "4px",
                }}
            />
            {filteredData.length>0?<table className="item">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </table>
            :<h1>No Products Found</h1>}


            










        </div>
    );
};

export default Search;
