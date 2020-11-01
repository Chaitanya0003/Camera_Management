import React from "react";
import { formatDate } from '../../utils/FormatTime';

const LastActivity = (props) =>{
    if ( !props.time ) return null; // in case we get null time
    
    const formattedTime = formatDate(props.time);

    return(
        <div>
            {formattedTime}
        </div>
    )
}

export default LastActivity;