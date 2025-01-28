import React from "react";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../Redux/ProductSlice";

const DisplayProduct = () => {
    const dispatch = useDispatch();
    const filteredData = useSelector((state) => state.product.products);

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    const ans = filteredData.map((key) => (
        <tr key={key.id}>
            <td>{key.name}</td>
            <td>${key.price}</td>
            <td
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => handleDelete(key.id)}
            >
                <ImCross />
            </td>
        </tr>
    ));

    return (
        <div className="table_container">
            <table className="item">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </table>
        </div>
    );
};

export default DisplayProduct;
