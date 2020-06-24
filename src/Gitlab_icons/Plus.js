import React from 'react'

const Plus = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props} >
            <path  fillRule="evenodd" d="M8,3 C7.44772,3 7,3.44772 7,4 L7,7 L4,7 C3.44772,7 3,7.44771 3,8 C3,8.55228 3.44772,9 4,9 L7,9 L7,12 C7,12.5523 7.44772,13 8,13 C8.55228,13 9,12.5523 9,12 L9,9 L12,9 C12.5523,9 13,8.55228 13,8 C13,7.44772 12.5523,7 12,7 L9,7 L9,4 C9,3.44772 8.55228,3 8,3 Z" />
        </svg>
    );
}

export default Plus;