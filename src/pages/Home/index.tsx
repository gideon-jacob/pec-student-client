// Packages
import { Component, ReactNode } from 'react'
import { getDay } from 'date-fns'
import axios from 'axios'
import Cookies from 'js-cookie'
import {v4 as uuidv4} from 'uuid'

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
const weekdayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let localTimetable: string | null = null;

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
        isLoading: true,
        timetableList: [],
    }

    private activeDayRef: HTMLButtonElement | null = null;
    private activeSubjectRef: HTMLDivElement | null = null;
    private firstSubjectRef: HTMLDivElement | null = null;

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
        },
        () => {
            this.activeSubjectRef?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        });
    }

    getTimetableList = async () => {
        const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL as string | undefined;
        const options = {headers: {'Content-Type': 'application/json'}}
        try {
            const response = await axios.get<{ timetable: Timetable[] }>(`${backendUrl}/api/timetable`, options)
            const timetableList = response.data.timetable

            this.setState({
                timetableList,
            })

            localStorage.setItem('timetableList', JSON.stringify(timetableList))
            Cookies.set('retainData', 'true', {expires: 1})
        } catch (error) {
            console.error("Failed to load timetable:", error);
            // Optionally set an error state here if you have one
            // this.setState({ error: 'Failed to load timetable' });
        } finally {
            this.setState({ isLoading: false })
        }
    }

    componentDidMount(): void {
        const isExpired: boolean = Cookies.get('retainData') ? false : true
        localTimetable = localStorage.getItem('timetableList')

        if (isExpired || localTimetable == null) {
            this.setState({ isLoading: true }); // Ensure isLoading is true before fetching
            this.getTimetableList().catch((error) => {
                console.error("Failed to fetch timetable data:", error);
            });
        } else {
            try {
                const parsedTimetable = JSON.parse(localTimetable) as Timetable[];
                this.setState({
                    isLoading: false,
                    timetableList: parsedTimetable,
                });
            } catch (error) {
                console.error("Failed to parse timetable from localStorage:", error);
                localStorage.removeItem('timetableList'); // Clear corrupted data
                this.setState({ isLoading: true }); // Ensure isLoading is true before fetching
                this.getTimetableList().catch((error) => {
                    console.error("Failed to fetch timetable data:", error);
                }); // Fetch fresh data
            }
        }

        this.activeDayRef?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
        this.firstSubjectRef?.scrollIntoView({ // Changed from activeSubjectRef
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
        // setInterval and forceUpdate removed
    }

    // componentWillUnmount removed as its only purpose was to clear the interval

    render(): ReactNode {
        const { activeWeekday, activeSlotNumber, isLoading, timetableList } = this.state
        const filteredTimetableList = timetableList.filter(timetable => timetable.day === activeWeekday)
        const isTimeTableEmpty = filteredTimetableList.length === 0;
        const user_fullname = "Sujit Kumar".toUpperCase();

        return (
            <>
                <div className='home-container'>
                    <header className='home-header'>
                        {/* TODO: Replace 'USER' with dynamic user data from authentication/profile */}
                        <h1 className='greeting'>
                            GOOD MORNING, <br />
                            <span className='username'>{ user_fullname }</span>
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
                                    filteredTimetableList.map((timetable) => (
                                            <SubjectCard
                                                key={uuidv4()}
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