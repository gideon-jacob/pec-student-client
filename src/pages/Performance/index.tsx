import { Component, ReactNode } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

// Components
import StatsCard from '../../components/StatsCard'

// Icons
import { IoIosNotifications as NotificationIcon } from "react-icons/io"
import { AiOutlineBarChart as PerformanceIcon } from "react-icons/ai"
import { InfinitySpin } from 'react-loader-spinner'

// Styles
import './index.scss'

interface Subject {
    subjectCode: string;
    subjectName: string;
    subjectType: 'theory' | 'lab' | 'project';
    credits: number;
    internalMarks: number;
    externalMarks: number;
    totalMarks: number;
    grade: string;
    gradePoint: number;
}

interface SemesterPerformance {
    semester: number;
    year: string;
    sgpa: number;
    totalCredits: number;
    subjects: Subject[];
}

interface PerformanceState {
    activeSemester: number;
    isLoading: boolean;
    semesterPerformance: SemesterPerformance[];
    currentSemester: number;
    overallCGPA: number;
    totalCreditsEarned: number;
    overallAttendance: number;
}

class Performance extends Component<unknown, PerformanceState> {
    state: PerformanceState = {
        activeSemester: 0, // 0 means current semester
        isLoading: true,
        semesterPerformance: [],
        currentSemester: 6,
        overallCGPA: 8.7,
        totalCreditsEarned: 68,
        overallAttendance: 98,
    }

    private activeSemesterRef: HTMLButtonElement | null = null;

    setActiveSemesterRef = (element: HTMLButtonElement) => {
        this.activeSemesterRef = element
    }

    onChangeSemester = (semester: number, element: HTMLButtonElement) => {
        this.setState({ activeSemester: semester })
        this.setActiveSemesterRef(element)
        this.activeSemesterRef?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
    }

    getPerformanceData = async () => {
        // Mock data for demonstration - in real app, this would come from API
        const mockData: SemesterPerformance[] = [
            {
                semester: 6,
                year: '2024-25',
                sgpa: 8.9,
                totalCredits: 22,
                subjects: [
                    {
                        subjectCode: 'CS601',
                        subjectName: 'Machine Learning',
                        subjectType: 'theory',
                        credits: 4,
                        internalMarks: 38,
                        externalMarks: 45,
                        totalMarks: 83,
                        grade: 'A',
                        gradePoint: 9.0
                    },
                    {
                        subjectCode: 'CS602',
                        subjectName: 'Database Management Systems',
                        subjectType: 'theory',
                        credits: 4,
                        internalMarks: 42,
                        externalMarks: 48,
                        totalMarks: 90,
                        grade: 'A+',
                        gradePoint: 10.0
                    },
                    {
                        subjectCode: 'CS603',
                        subjectName: 'Software Engineering',
                        subjectType: 'theory',
                        credits: 3,
                        internalMarks: 35,
                        externalMarks: 40,
                        totalMarks: 75,
                        grade: 'B+',
                        gradePoint: 8.0
                    },
                    {
                        subjectCode: 'CS604',
                        subjectName: 'Computer Networks',
                        subjectType: 'theory',
                        credits: 3,
                        internalMarks: 40,
                        externalMarks: 46,
                        totalMarks: 86,
                        grade: 'A',
                        gradePoint: 9.0
                    }
                ]
            },
            {
                semester: 5,
                year: '2024',
                sgpa: 8.5,
                totalCredits: 24,
                subjects: [
                    {
                        subjectCode: 'CS501',
                        subjectName: 'Operating Systems',
                        subjectType: 'theory',
                        credits: 4,
                        internalMarks: 36,
                        externalMarks: 42,
                        totalMarks: 78,
                        grade: 'B+',
                        gradePoint: 8.0
                    },
                    {
                        subjectCode: 'CS502',
                        subjectName: 'Computer Architecture',
                        subjectType: 'theory',
                        credits: 4,
                        internalMarks: 40,
                        externalMarks: 44,
                        totalMarks: 84,
                        grade: 'A',
                        gradePoint: 9.0
                    }
                ]
            },
            {
                semester: 4,
                year: '2023',
                sgpa: 8.2,
                totalCredits: 22,
                subjects: [
                    {
                        subjectCode: 'CS401',
                        subjectName: 'Data Structures',
                        subjectType: 'theory',
                        credits: 4,
                        internalMarks: 38,
                        externalMarks: 40,
                        totalMarks: 78,
                        grade: 'B+',
                        gradePoint: 8.0
                    }
                ]
            }
        ]

        this.setState({
            semesterPerformance: mockData,
            isLoading: false
        })
    }

    componentDidMount(): void {
        this.getPerformanceData()
    }

    renderSemesterSelector = (): ReactNode => {
        const { activeSemester, semesterPerformance, currentSemester } = this.state

        return (
            <nav className='semester-navbar'>
                <button
                    type='button'
                    className={`semester-nav-item ${activeSemester === 0 ? 'active' : ''}`}
                    onClick={(e) => this.onChangeSemester(0, e.currentTarget)}
                >
                    Current Semester
                </button>
                {semesterPerformance.map((semester) => (
                    <button
                        key={semester.semester}
                        type='button'
                        className={`semester-nav-item ${activeSemester === semester.semester ? 'active' : ''}`}
                        onClick={(e) => this.onChangeSemester(semester.semester, e.currentTarget)}
                    >
                        Semester {semester.semester}
                    </button>
                ))}
            </nav>
        )
    }

    renderCurrentSemesterPerformance = (): ReactNode => {
        const { semesterPerformance, currentSemester } = this.state
        const currentSemesterData = semesterPerformance.find(s => s.semester === currentSemester)

        if (!currentSemesterData) {
            return (
                <div className='performance-content'>
                    <div className='no-data'>
                        <PerformanceIcon className='no-data-icon' />
                        <p>No performance data available for current semester</p>
                    </div>
                </div>
            )
        }

        const theorySubjects = currentSemesterData.subjects.filter(subject => subject.subjectType === 'theory')

        return (
            <div className='performance-content'>
                <div className='semester-overview'>
                    <h2>Current Semester Performance</h2>
                    <div className='semester-stats'>
                        <div className='stat-item'>
                            <span className='stat-label'>SGPA</span>
                            <span className='stat-value'>{currentSemesterData.sgpa}</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-label'>Credits</span>
                            <span className='stat-value'>{currentSemesterData.totalCredits}</span>
                        </div>
                    </div>
                </div>

                <div className='subjects-container'>
                    <h3>Theory Subjects Performance</h3>
                    <div className='subjects-grid'>
                        {theorySubjects.map((subject) => (
                            <div key={subject.subjectCode} className='subject-performance-card'>
                                <div className='subject-header'>
                                    <h4 className='subject-code'>{subject.subjectCode}</h4>
                                    <span className='subject-grade'>{subject.grade}</span>
                                </div>
                                <p className='subject-name'>{subject.subjectName}</p>
                                <div className='marks-breakdown'>
                                    <div className='mark-item'>
                                        <span className='mark-label'>Internal</span>
                                        <span className='mark-value'>{subject.internalMarks}/50</span>
                                    </div>
                                    <div className='mark-item'>
                                        <span className='mark-label'>External</span>
                                        <span className='mark-value'>{subject.externalMarks}/50</span>
                                    </div>
                                    <div className='mark-item total'>
                                        <span className='mark-label'>Total</span>
                                        <span className='mark-value'>{subject.totalMarks}/100</span>
                                    </div>
                                </div>
                                <div className='subject-footer'>
                                    <span className='credits'>Credits: {subject.credits}</span>
                                    <span className='grade-point'>GP: {subject.gradePoint}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    renderPastSemesterPerformance = (): ReactNode => {
        const { activeSemester, semesterPerformance } = this.state
        const selectedSemester = semesterPerformance.find(s => s.semester === activeSemester)

        if (!selectedSemester) {
            return (
                <div className='performance-content'>
                    <div className='no-data'>
                        <PerformanceIcon className='no-data-icon' />
                        <p>No performance data available for this semester</p>
                    </div>
                </div>
            )
        }

        return (
            <div className='performance-content'>
                <div className='semester-overview'>
                    <h2>Semester {selectedSemester.semester} Performance</h2>
                    <div className='semester-stats'>
                        <div className='stat-item'>
                            <span className='stat-label'>SGPA</span>
                            <span className='stat-value'>{selectedSemester.sgpa}</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-label'>Credits</span>
                            <span className='stat-value'>{selectedSemester.totalCredits}</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-label'>Year</span>
                            <span className='stat-value'>{selectedSemester.year}</span>
                        </div>
                    </div>
                </div>

                <div className='subjects-container'>
                    <h3>All Subjects Performance</h3>
                    <div className='subjects-grid'>
                        {selectedSemester.subjects.map((subject) => (
                            <div key={subject.subjectCode} className='subject-performance-card'>
                                <div className='subject-header'>
                                    <h4 className='subject-code'>{subject.subjectCode}</h4>
                                    <span className='subject-grade'>{subject.grade}</span>
                                </div>
                                <p className='subject-name'>{subject.subjectName}</p>
                                <div className='marks-breakdown'>
                                    <div className='mark-item'>
                                        <span className='mark-label'>Internal</span>
                                        <span className='mark-value'>{subject.internalMarks}/50</span>
                                    </div>
                                    <div className='mark-item'>
                                        <span className='mark-label'>External</span>
                                        <span className='mark-value'>{subject.externalMarks}/50</span>
                                    </div>
                                    <div className='mark-item total'>
                                        <span className='mark-label'>Total</span>
                                        <span className='mark-value'>{subject.totalMarks}/100</span>
                                    </div>
                                </div>
                                <div className='subject-footer'>
                                    <span className='credits'>Credits: {subject.credits}</span>
                                    <span className='grade-point'>GP: {subject.gradePoint}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    render(): ReactNode {
        const { activeSemester, isLoading, overallCGPA, totalCreditsEarned, overallAttendance } = this.state
        const user_fullname = "Sujit Kumar".toUpperCase();

        return (
            <div className='performance-container'>
                <header className='performance-header'>
                    <h1 className='greeting'>
                        PERFORMANCE, <br />
                        <span className='username'>{user_fullname}</span>
                    </h1>

                    <button type='button' className='notification-button'>
                        <NotificationIcon className='notification-icon' />
                    </button>
                </header>

                <div className='stats-container'>
                    <StatsCard description='Overall CGPA' metric={overallCGPA.toString()} />
                    <StatsCard description='Credits Earned' metric={totalCreditsEarned.toString()} />
                    <StatsCard description='Attendance' metric={`${overallAttendance}%`} />
                </div>

                <div className='performance-main'>
                    {this.renderSemesterSelector()}

                    {isLoading ? (
                        <div className='loading-container'>
                            <InfinitySpin color='#7e69b3' />
                        </div>
                    ) : (
                        activeSemester === 0 ? this.renderCurrentSemesterPerformance() : this.renderPastSemesterPerformance()
                    )}
                </div>
            </div>
        )
    }
}

export default Performance