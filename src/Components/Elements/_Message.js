import React from "react";
import { FaTrash } from "react-icons/fa"

export default function Message({id, title, message, onRemove = f => f}) {
    return(
        <div>
             <span>{title} -- {message}</span>
             <button onClick={() => onRemove(id)}>
                 <FaTrash />
             </button>
        </div>
    )
}