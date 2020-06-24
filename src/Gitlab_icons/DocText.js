import React from 'react'

const DocText = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" {...props} >
            <path fillRule="evenodd" d="M3,1 L9.17157,1 C9.64307222,1 10.0973893,1.16648691 10.4559723,1.46691468 L10.5858,1.58579 L13.4142,4.41421 C13.7476222,4.74761444 13.9511481,5.18659519 13.9922598,5.65257532 L14,5.82843 L14,14 C14,14.51285 13.613973,14.9355092 13.1166239,14.9932725 L13,15 L3,15 C2.48716857,15 2.06449347,14.613973 2.0067278,14.1166239 L2,14 L2,2 C2,1.48716857 2.38604429,1.06449347 2.88337975,1.0067278 L3,1 L9.17157,1 L3,1 Z M9,3 L4,3 L4,13 L12,13 L12,6 L10,6 C9.48715929,6 9.06449214,5.61395571 9.00672766,5.11662025 L9,5 L9,3 Z M6,10 L8,10 C8.55228,10 9,10.4477 9,11 C9,11.51285 8.61395571,11.9355092 8.11662025,11.9932725 L8,12 L6,12 C5.44772,12 5,11.5523 5,11 C5,10.48715 5.38604429,10.0644908 5.88337975,10.0067275 L6,10 Z M10,7 C10.5523,7 11,7.44772 11,8 C11,8.55228 10.5523,9 10,9 L6,9 C5.44772,9 5,8.55228 5,8 C5,7.44772 5.44772,7 6,7 L10,7 Z" />
        </svg>
    );
}

export default DocText;