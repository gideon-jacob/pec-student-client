import React from 'react'
import './index.scss'

interface Props {
    day: string;
    isActive: boolean;
    onChangeActiveWeekDay: (weekday: string, element: HTMLButtonElement) => void;
    setActiveDayRef: (element: HTMLButtonElement) => void;
}

const WeekDayNavItem: React.FC<Props> = props => {
    const { day, isActive, onChangeActiveWeekDay, setActiveDayRef } = props
    const activeClassName = isActive ? 'active' : ''
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => onChangeActiveWeekDay(day, event.currentTarget)

    return (
        <button 
            className={`weekday-nav-item ${activeClassName}`}
            onClick={handleClick}
            {...(isActive ? { ref: setActiveDayRef } : {})}
        >
            {day[0]}
        </button>
    )
}

export default WeekDayNavItem