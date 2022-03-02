import React from "react";
import { FaTrash } from "react-icons/fa"
import { useMessages } from "../../ContextProviders/MessageHooks";

export default function Message({id, title, message}) {

    const { removeMessage } = useMessages();

    return(
        <div>
             <span>{title} -- {message}</span>
             <button onClick={() => removeMessage(id)}>
                 <FaTrash />
             </button>
        </div>
    )
}