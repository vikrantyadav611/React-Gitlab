import React from 'react'

const Lock = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props} >
            <path  fillRule="evenodd" d="M4,6 L4,4 C4,1.790861 5.790861,0 8,0 C10.209139,0 12,1.790861 12,4 L12,6 L14,6 L14,16 L2,16 L2,6 L4,6 Z M6,6 L10,6 L10,4 C10,2.8954305 9.1045695,2 8,2 C6.8954305,2 6,2.8954305 6,4 L6,6 Z M4,8 L4,14 L12,14 L12,8 L4,8 Z M7,10 L9,10 L9,12 L7,12 L7,10 Z" />
        </svg>
    );
}

export default Lock;