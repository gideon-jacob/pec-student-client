// Packages
import { Component, ReactNode } from 'react'
import { getDay } from 'date-fns'
import axios from 'axios'

// Components
import StatsCard from '../../components/StatsCard'
import WeekDayNavItem from '../../components/WeekDayNavItem'
import SubjectCard from '../../components/SubjectCard'

// Icons
import { IoIosNotifications as NotificationIcon } from "react-icons/io"
import { FaMountainSun as NoClassIcon } from "react-icons/fa6";
import {InfinitySpin} from 'react-loader-spinner'

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
    attendancePercentage: number;
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
    private activeSubjectRef: HTMLDivElement | null = null;
    private firstSubjectRef: HTMLDivElement | null = null;
    intervalId: NodeJS.Timeout | undefined;

    setActiveDayRef = (element: HTMLButtonElement) => {
        this.activeDayRef = element
    }
    
    setActiveSubjectRef = (element: HTMLDivElement) => {
        this.activeSubjectRef = element
    }
    
    setFirstSubjectRef = (element: HTMLDivElement) => {
        this.firstSubjectRef = element
    }

    onChangeActiveWeekDay = (weekday: string, element: HTMLButtonElement) => {
        this.setState({
            activeWeekday: weekday,
            activeSlotNumber: 0,    // Reset active slot
        })
        this.setActiveDayRef(element)
        this.activeDayRef?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
        this.firstSubjectRef?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
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
            const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL
            const options = {headers: {'Content-Type': 'application/json'}}
            const response = await axios.get(`${backendUrl}/api/timetable`, options)
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
        this.activeSubjectRef?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
        this.intervalId = setInterval(() => {
            this.forceUpdate();
        }, 60000);
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    render(): ReactNode {
        const { activeWeekday, activeSlotNumber, isLoading, timetableList } = this.state
        const filteredTimetableList = timetableList.filter(timetable => timetable.day === activeWeekday)
        const isTimeTableEmpty = filteredTimetableList.length === 0

        return (
            <>
                <div className='home-container'>
                    <header className='home-header'>
                        <h1 className='greeting'>
                            GOOD MORNING, <br />
                            <span className='username'>SUJIT KUMAR</span>
                        </h1>

                        <button type='button' className='notification-button'>
                            <NotificationIcon className='notification-icon' />
                        </button>
                    </header>

                    <div className='stats-container'>
                        <StatsCard description='Overall Attendance' metric='98%' />
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
                            !isLoading && !isTimeTableEmpty &&
                            <div className='subject-card-container'>
                                {
                                    filteredTimetableList.map((timetable, index) => (
                                            <SubjectCard
                                                key={index}
                                                day={timetable.day}
                                                slotNumber={timetable.slotNumber}
                                                subjectCode={timetable.subjectCode}
                                                subjectName={timetable.subjectName}
                                                subjectType={timetable.subjectType}
                                                facultyName={timetable.facultyName}
                                                attendancePercentage={timetable.attendancePercentage}
                                                isActive={timetable.slotNumber === activeSlotNumber}
                                                onChangeActiveSlot={this.onChangeActiveSlot}
                                                setActiveSubjectRef={this.setActiveSubjectRef}
                                                setFirstSubjectRef={this.setFirstSubjectRef}
                                            />
                                        ))
                                }
                            </div>
                        }

                        {
                            !isLoading && isTimeTableEmpty &&
                            <div className={`subject-card-container ${isTimeTableEmpty ? 'no-class' : ''}`}>
                                <NoClassIcon className='no-clas-icon' />
                                <p className="no-class-text">No Classes Today</p>
                            </div>
                        }
                        
                        {
                            isLoading &&
                            <div className={`subject-card-container ${isLoading ? 'loading' : ''}`}>
                                <InfinitySpin color='#7e69b3' />
                            </div>
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Home