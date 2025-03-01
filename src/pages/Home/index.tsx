// Packages
import { Component, ReactNode } from 'react'
import { getDay } from 'date-fns'
import { IoIosNotifications as NotificationIcon } from "react-icons/io"
import axios from 'axios'

// Components
import StatsCard from '../../components/StatsCard'
import WeekDayNavItem from '../../components/WeekDayNavItem'
import SubjectCard from '../../components/SubjectCard'

// Styles
import './index.scss'

// Constants
// import timetableList from './timetable'
const weekdayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const localTimetable: string | null = localStorage.getItem('timetableList')

interface Timetable {
    day: string;
    slotNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    subjectCode: string;
    subjectName: string;
    subjectType: string;
    facultyName: string;
    attandancePercentage: number;
}

interface HomeState {
    activeWeekday: string;
    activeSlotNumber: number;
    isLoading: boolean;
    timetableList: Timetable[];
}

class Home extends Component<unknown, HomeState> {
    state: HomeState = {
        activeWeekday: weekdayList[getDay(new Date())],
        activeSlotNumber: 0,  // 0 means no active slot
        isLoading: localTimetable === null,
        timetableList: localTimetable? JSON.parse(localTimetable) : [],
    }

    private activeDayRef: HTMLButtonElement | null = null;

    setActiveDayRef = (element: HTMLButtonElement) => {
        this.activeDayRef = element
    }

    onChangeActiveWeekDay = (weekday: string) => {
        this.setState({
            activeWeekday: weekday,
            activeSlotNumber: 0,
        })
    }

    onChangeActiveSlot = (slotNumber: number) => {
        this.setState(prevState => {
            if (prevState.activeSlotNumber === slotNumber) {
                return ({ activeSlotNumber: 0 })
            } else {
                return ({ activeSlotNumber: slotNumber })
            }
        })
    }

    getTimetableList = async () => {
        const { isLoading } = this.state
        
        if (isLoading) {
            const response = await axios.get('https://5b60i1fwi9.execute-api.ap-south-1.amazonaws.com/api/timetable')
            const timetableList = response.data.timetable as Timetable[]

            this.setState({
                isLoading: false,
                timetableList,
            })

            localStorage.setItem('timetableList', JSON.stringify(timetableList))
        }
    }

    componentDidMount(): void {
        this.getTimetableList();
        this.activeDayRef?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
    }

    render(): ReactNode {
        const { activeWeekday, activeSlotNumber, isLoading, timetableList } = this.state

        return (
            <>
                <div className='home-container'>
                    <header className='home-header'>
                        <h1 className='greeting'>
                            GOOD MORNING, <br />
                            <span className='username'>SUJIT KUMAR</span>
                        </h1>

                        <button className='notification-button'>
                            <NotificationIcon className='notification-icon' />
                        </button>
                    </header>

                    <div className='stats-container'>
                        <StatsCard description='Overall Attandance' metric='98%' />
                        <StatsCard description='Overall Credits Earned' metric='68' />
                        <StatsCard description='CGPA' metric='8.7' />
                    </div>

                    <div className='timetable-container'>
                        <nav className='weekday-navbar'>
                            {
                                weekdayList.map((day, index) => (
                                    <WeekDayNavItem
                                        key={index}
                                        day={day}
                                        isActive={day === activeWeekday}
                                        onChangeActiveWeekDay={this.onChangeActiveWeekDay}
                                        setActiveDayRef={this.setActiveDayRef}
                                    />
                                ))
                            }
                        </nav>

                        {
                            !isLoading &&
                            <div className='subject-card-container'>
                                {
                                    timetableList
                                        .filter(timetable => timetable.day === activeWeekday)
                                        .map((timetable, index) => (
                                            <SubjectCard
                                                key={index}
                                                {...timetable}
                                                isActive={timetable.slotNumber === activeSlotNumber}
                                                onChangeActiveSlot={this.onChangeActiveSlot}
                                            />
                                        ))
                                }
                            </div>
                        }

                        { isLoading && <div className='subject-card-container'></div> }
                    </div>
                </div>
            </>
        )
    }
}

export default Home