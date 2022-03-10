import React, { memo } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { useMessages } from "../../Hooks/MessageHooks";

import "../../SCSS/Components/_messageLogger.scss";

// export default function Message({id, title, message}) {

//     const { removeMessage } = useMessages();

// return(
//     <div className="message">
//          <h4 className="message-title">{ title }</h4>
//          <p className="message-text">{ message }</p>
//          <div className="message-remove" onClick={() => removeMessage(id)}>
//              <FaRegTimesCircle />
//          </div>
//     </div>
// )
// }



const Message = ({ id, title, message }) => {
  const { removeMessage } = useMessages();
  return (
    <div className="message">
      <h4 className="message-title">{title}</h4>
      <p className="message-text">{message}</p>
      <div className="message-remove" onClick={() => removeMessage(id)}>
        <FaRegTimesCircle />
      </div>
    </div>
  );
};

// Pure Component
const PureMessage = memo(Message);

export default PureMessage;
