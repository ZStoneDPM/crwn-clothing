import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
)

// const CustomButton = ({ children, loginMethod, loginMethodName, type }) => (
//     <button onClick={loginMethod} className={`${(loginMethodName ==='google') && 'google'} custom-button`} type={type}>
//         {children}
//     </button>
// )

export default CustomButton;