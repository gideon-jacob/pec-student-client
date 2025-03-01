import React from "react";
import { ImBooks as TheoryIcon } from "react-icons/im";
import { AiTwotoneExperiment as LabIcon } from "react-icons/ai";
import { FaRunning as ActivityIcon } from "react-icons/fa";
import { IoIosArrowDown as ToggleIcon } from "react-icons/io";
import ProgressBar from "../ProgressBar";
import './index.scss';

interface Props {
    slotNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    subjectCode: string;
    subjectName: string;
    subjectType: string;
    facultyName: string;
    isActive: boolean;
    attandancePercentage: number;
    onChangeActiveSlot: (slotNumber: number) => void;
}

const slotTiming = [
    '8:30 AM - 9:20 AM',
    '9:20 AM - 10:10 AM',
    '10:20 AM - 11:10 AM',
    '11:10 AM - 12:00 PM',
    '12:00 PM - 12:50 PM',
    '1:30 PM - 2:20 PM',
    '2:20 PM - 3:10 PM',
    '3:10 PM - 4:00 PM',
];

const renderIcon = (type: string): React.ReactNode => {
    if (type === 'Theory')
        return <TheoryIcon className='activity-icon' />
    if (type === 'Laboratory')
        return <LabIcon className='activity-icon' />
    if (type === 'Activity')
        return <ActivityIcon className='activity-icon' />
}

const SubjectCard: React.FC<Props> = props => {
    const {
        slotNumber,
        subjectCode,
        subjectName,
        subjectType,
        facultyName,
        attandancePercentage,
        isActive,
        onChangeActiveSlot
    } = props
    
    return (
        <div className='subject-card'>
            <div className='toggle-icon-wrapper' onClick={() => onChangeActiveSlot(slotNumber)}>
                <div className='activity-icon-wrapper'>
                    {renderIcon(subjectType)}
                    <div className='text-container'>
                        <h1 className='code'>{subjectCode}</h1>
                        <p className='slot'>{slotTiming[slotNumber - 1]}</p>
                    </div>
                </div>
                
                <ToggleIcon className={`toggle-icon ${isActive? 'active' : ''}`} />
            </div>
            {isActive && (
                <>
                    <hr className='seperator' />
                    
                    <div className='additional-details-container'>
                        <div className='text-container'>
                            <p>{subjectName}</p>
                            <p>{ facultyName }</p>
                        </div>

                        <ProgressBar
                            percentage={attandancePercentage}
                            title='Attandance'
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default SubjectCard;