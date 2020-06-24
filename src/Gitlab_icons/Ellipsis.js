import React from 'react'

const Ellipsis = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props} >
            <path d="M2,6 C3.10457,6 4,6.89543 4,8 C4,9.10457 3.10457,10 2,10 C0.895431,10 0,9.10457 0,8 C0,6.89543 0.895431,6 2,6 Z M8,6 C9.10457,6 10,6.89543 10,8 C10,9.10457 9.10457,10 8,10 C6.89543,10 6,9.10457 6,8 C6,6.89543 6.89543,6 8,6 Z M14,6 C15.1046,6 16,6.89543 16,8 C16,9.10457 15.1046,10 14,10 C12.8954,10 12,9.10457 12,8 C12,6.89543 12.8954,6 14,6 Z" />
        </svg>

    );
}

export default Ellipsis;