import { Component, ReactNode } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import Cookies from 'js-cookie'
import axios from 'axios'
import './index.scss'

let localStorageTheme = localStorage.getItem('theme');

interface Timetable {
    day: string;
    slotNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    subjectCode: string;
    subjectName: string;
    subjectType: string;
    facultyName: string;
    attendancePercentage: number;
}

class Profile extends Component {
    state = {
        theme: localStorageTheme === 'light' || localStorageTheme === 'dark' ? localStorageTheme : 'system',
        isLoading: false,
    }

    setAppTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const rootDiv = document.getElementById('root');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const selectedTheme = event.target.value;

        rootDiv?.classList.remove('light', 'dark');

        if (selectedTheme === 'light' || selectedTheme === 'dark') {
            localStorage.setItem('theme', selectedTheme);
            rootDiv?.classList.add(selectedTheme);
        } else if (selectedTheme === 'system') {
            localStorage.removeItem('theme');

            if (prefersDarkScheme.matches) {
                rootDiv?.classList.add('dark');
            } else {
                rootDiv?.classList.add('light');
            }
        }

        this.setState({ theme: selectedTheme });
    }

    onClickRefreshData = async () => {
        await this.setState({ isLoading: true })
        
        const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL
        const options = {headers: {'Content-Type': 'application/json'}}
        const response = await axios.get(`${backendUrl}/api/timetable`, options)
        const timetableList = response.data.timetable as Timetable[]
        
        localStorage.setItem('timetableList', JSON.stringify(timetableList))
        Cookies.set('retainData', 'true', {expires: 1})

        await this.setState({ isLoading: false })
    }

    componentDidMount(): void {
        // This is a workaround to make sure the theme value is set correctly in select tag, when there is a page navigation
        localStorageTheme = localStorage.getItem('theme');
        this.setState({
            theme: localStorageTheme === 'light' || localStorageTheme === 'dark' ? localStorageTheme : 'system',
        })
    }
    
    render(): ReactNode {
        const { theme, isLoading } = this.state;

        return (
            <>
                <div>Profile</div>
                <label>Theme</label>
                <select
                    value={theme}
                    onChange={this.setAppTheme}
                >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System Default</option>
                </select>

                <br />
                <br />
                <br />

                <button type="button" onClick={this.onClickRefreshData}>Refresh Data</button>

                <br />
                <br />
                <br />

                { isLoading && <InfinitySpin color='#7e69b3' /> }
            </>
        )
    }
}

export default Profile