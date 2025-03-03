import React from "react";
import './index.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props {
    percentage: number;
    title?: string;
    description?: string;
}

const ProgressBar: React.FC<Props> = props => {
    const { percentage, title, description } = props 
    
    return (
        <div className='progress-bar-container'>
            {/* TODO Write the styel for this element */}
            {title && <p className='title'>{title}</p>}

            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                className="progress-bar-dark"
                styles={buildStyles({
                    textColor: '#c1acf1',
                    pathColor: '#c1acf1',
                    trailColor: '#c1acf144',
                })}
            />

            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                className="progress-bar-light"
                styles={buildStyles({
                    textColor: '#7660ae',
                    pathColor: '#7660ae',
                    trailColor: '#7660ae44',
                })}
            />

            {description && <p className='description'>{description}</p>}
        </div>
    );
};

export default ProgressBar;