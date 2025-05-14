import React from "react";
export default function TodoItem({ id, value, deleteItem }) {
    return (
        <>
            <div className="item" id={id}>

                <li>{value}</li> <button className="btn delete-btn" id={'delete-btn-' + id}
                    onClick={() => deleteItem(id)}>Delete</button>
            </div>





        </>
    );
}
