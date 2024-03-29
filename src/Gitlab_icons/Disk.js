import React from 'react'

const Disk = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props}>
            <path d="M13,1 C14.1046,1 15,1.89543 15,3 L15,13 C15,14.1046 14.1046,15 13,15 L3,15 C1.89543,15 1,14.1046 1,13 L1,3 C1,1.89543 1.89543,1 3,1 L13,1 Z M13,9 L3,9 L3,13 L13,13 L13,9 Z M12,10 L12,12 L8,12 L8,10 L12,10 Z M13,3 L3,3 L3,7 L13,7 L13,3 Z" />
        </svg>
    );
}

export default Disk;
