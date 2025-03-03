import React from 'react';

interface SVGProps {
    className?: string;
}

const TheoryLogo: React.FC<SVGProps> = ({ className }) => (
    <div
        style={{ display: 'flex', placeContent: 'center' }}
        className={className}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="5 21 94 75"
            fill="currentColor"
            height="1em"
            width="1em"
        >
            <path d="M33.46,92.9h20.75v8.56c0,1.12-.91,2.03-2.03,2.03h-16.7c-1.12,0-2.03-.91-2.03-2.03v-8.56Z"/>
            <rect x="33.46" y="85.43" width="20.75" height="6.54"/>
            <rect x="33.46" y="30.64" width="20.75" height="53.87"/>
            <rect x="33.46" y="23.5" width="20.75" height="6.23"/>
            <path d="M33.46,22.54v-6.69c0-1.1.89-1.99,1.99-1.99h16.78c1.1,0,1.99.89,1.99,1.99v6.69h-20.75Z"/>
            <path d="M7.23,35.55h24.83v48.96H7.23v-48.96ZM15.16,54.76h9.54c1.15,0,2.08-.93,2.08-2.08v-9.36c0-1.15-.93-2.08-2.08-2.08h-9.54c-1.15,0-2.08.93-2.08,2.08v9.36c0,1.15.93,2.08,2.08,2.08Z"/>
            <rect x="7.23" y="85.43" width="24.83" height="6.54"/>
            <path d="M7.23,34.43h24.83v-6.53c0-1.1-.89-2-2-2H9.22c-1.1,0-2,.89-2,2v6.53Z"/>
            <path d="M7.39,92.9h24.5c.09,0,.17.07.17.17v8.43c0,1.1-.89,1.99-1.99,1.99H9.22c-1.1,0-1.99-.89-1.99-1.99v-8.43c0-.09.07-.17.17-.17Z"/>
            <path d="M69.24,94.14l26.18-6.53c.1-.02.19.02.22.11l1.94,7.77c.25,1.01-.5,2.07-1.67,2.36l-22.28,5.56c-1.17.29-2.33-.29-2.58-1.3l-1.94-7.77c-.02-.08.04-.17.14-.2Z"/>
            <path d="M56.37,43.29l26.54-6.62-2.07-8.28c-.35-1.4-1.59-2.3-2.77-2l-22.27,5.55c-1.18.29-1.85,1.67-1.5,3.07l2.07,8.28Z"/>
            <rect x="67.48" y="82.19" width="27.35" height="7.95" transform="translate(-18.43 22.19) rotate(-14)"/>
            <rect x="56.91" y="40.88" width="27.35" height="5.52" transform="translate(-8.46 18.37) rotate(-14)"/>
            <rect x="62.04" y="46.88" width="27.35" height="34.94" transform="translate(-13.32 20.23) rotate(-14)"/>
        </svg>
    </div>
);

export default TheoryLogo;
