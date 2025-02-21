import React from "react";
import './index.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props {
    percentage: number;
    className?: string;
    title?: string;
}

const ProgressBar: React.FC<Props> = props => {
    const { percentage, className, title } = props 
    
    return (
        <div className='progress-bar-container'>
            {/* TODO Write the styel for this element */}
            {title && <p className='title'>{title}</p>}

            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                className={`progress-bar-dark ${className}`}
                styles={buildStyles({
                    textColor: '#c1acf1',
                    pathColor: '#c1acf1',
                    trailColor: '#c1acf144',
                })}
            />

            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                className={`progress-bar-light ${className}`}
                styles={buildStyles({
                    textColor: '#7660ae',
                    pathColor: '#7660ae',
                    trailColor: '#7660ae44',
                })}
            />
        </div>
    );
};

export default ProgressBar;