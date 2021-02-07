import React from "react";

const DateTime = () => {
    const now = new Date();
    return (
        <div className="date-time">
            {` ${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`}
        </div>
    )
}

export default DateTime