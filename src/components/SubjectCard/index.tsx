import React from "react";
import { AiTwotoneExperiment as LabIcon } from "react-icons/ai";
import { FaRunning as ActivityIcon } from "react-icons/fa";
import { IoIosArrowDown as ToggleIcon } from "react-icons/io";
import ProgressBar from "../ProgressBar";
import TheoryIcon from '../../assets/TheoryLogo';
import './index.scss';

interface Props {
    slotNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    subjectCode: string;
    subjectName: string;
    subjectType: string;
    facultyName: string;
    day: string;
    isActive: boolean;
    attendancePercentage: number;
    onChangeActiveSlot: (slotNumber: number) => void;
    setActiveSubjectRef: (element: HTMLDivElement) => void;
    setFirstSubjectRef: (element: HTMLDivElement) => void;
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

class SubjectCard extends React.Component<Props> {
    getDateTime = (slotNumber: number): [Date, Date] => {
        const [startTime, endTime] = slotTiming[slotNumber - 1].split(' - ');
        const [startHour, startMinute, startPeriod] = startTime.split(/[: ]/);
        const [endHour, endMinute, endPeriod] = endTime.split(/[: ]/);

        const startDate = new Date();
        const endDate = new Date();
        
        startDate.setHours(parseInt(startHour) + (startPeriod === 'PM' && startHour !== '12' ? 12 : 0), parseInt(startMinute));
        endDate.setHours(parseInt(endHour) + (endPeriod === 'PM' && endHour !== '12' ? 12 : 0), parseInt(endMinute));
        
        return [startDate, endDate];
    }

    getSlotStatus = (startTime: Date, endTime: Date, day: string): string => {
        const today = new Date();
        const currentDayIndex = today.getDay();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const targetDayIndex = daysOfWeek.indexOf(day);

        if (targetDayIndex === -1) {
            throw new Error('Invalid day provided');
        }

        if (targetDayIndex === currentDayIndex) {
            const currentTime = today.getTime();
            if (currentTime < startTime.getTime()) {
                return 'upcoming';
            } else if (currentTime > endTime.getTime()) {
                return 'finished';
            } else {
                return 'in-progress';
            }
        } else if (targetDayIndex < currentDayIndex) {
            return 'finished';
        } else {
            return 'upcoming';
        }
    }

    renderIcon = (type: string): React.ReactNode => {
        if (type === 'Theory')
            return <TheoryIcon className='activity-icon' />;
        if (type === 'Laboratory')
            return <LabIcon className='activity-icon' />;
        if (type === 'Activity')
            return <ActivityIcon className='activity-icon' />;
    }

    render() {
        const {
            day,
            slotNumber,
            subjectCode,
            subjectName,
            subjectType,
            facultyName,
            attendancePercentage,
            isActive,
            onChangeActiveSlot,
            setActiveSubjectRef,
            setFirstSubjectRef,
        } = this.props;
        const [startTime, endTime] = this.getDateTime(slotNumber);
        const slotStatus = this.getSlotStatus(startTime, endTime, day);
        let isInProgress, isFinished, progressValue = 0;
        let facultyNameList = [facultyName];

        if (slotStatus === 'finished') {
            [isInProgress, isFinished] = [false, true];
        } else if (slotStatus === 'upcoming') {
            [isInProgress, isFinished] = [false, false];
        } else if (slotStatus === 'in-progress') {
            [isInProgress, isFinished] = [true, false];
            progressValue = Math.floor((Date.now() - startTime.getTime()) / (endTime.getTime() - startTime.getTime()) * 100);
        }

        if (facultyName.includes('/')) {
            facultyNameList = facultyName.split('/');
        }
        
        return (
            <div
                className={`subject-card ${isInProgress ? 'in-progress' : ''} ${isFinished? 'completed' : ''}`}
                style={{ '--progress': `${progressValue}%` } as React.CSSProperties}
                {...(isInProgress && { ref: setActiveSubjectRef })}
                {...(slotNumber === 1 && { ref: setFirstSubjectRef })}
            >
                <div className='toggle-icon-wrapper' onClick={() => onChangeActiveSlot(slotNumber)}>
                    <div className='activity-icon-wrapper'>
                        {this.renderIcon(subjectType)}
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
                                <p className="subject-name">{subjectName}</p>
                                <p className="faculty-name">Faculty: <br />
                                    {facultyNameList.map(eachName => (
                                        <>
                                            <span className="name-highlight">{eachName}</span>
                                            <br />  
                                        </>
                                    ))}
                                </p>
                            </div>

                            <div className="progress-bar-container">
                                <ProgressBar
                                    percentage={attendancePercentage}
                                    description='Attendance'
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default SubjectCard;