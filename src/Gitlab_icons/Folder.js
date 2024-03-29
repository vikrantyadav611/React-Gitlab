import React from 'react'

const Folder = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props} >
            <path  fillRule="evenodd" d="M1,12 L1,4 C1,2.89543 1.89543,2 3,2 L6.58579,2 C6.851,2 7.10536,2.10536 7.29289,2.29289 L9,4 L13,4 C14.1046,4 15,4.89543 15,6 L15,12 C15,13.1046 14.1046,14 13,14 L3,14 C1.89543,14 1,13.1046 1,12 Z M13,6 L3,6 L3,8 L13,8 L13,6 Z" />
        </svg> 
    );
}

export default Folder;