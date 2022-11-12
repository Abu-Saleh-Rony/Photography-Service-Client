import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { userContext } from "../../AuthProvider/AuthContext";

const Update = () => {
    const storedUser = useLoaderData();
    console.log(storedUser)

    const [text, setText] = useState('')

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(text)
    };


    return (
        <div>

            <div>
                <form onSubmit={handleUpdate}>
                    <textarea name="text" onBlur={(e) => setText(e.target.value)} id="" cols="30" rows="10"></textarea>
                    <button className="btn btn-warning" type="submit">Update</button>
                </form>
            </div>

        </div>
    );
};

export default Update;



