import { Component, ReactNode } from 'react'
import './index.scss'

let localStorageTheme = localStorage.getItem('theme');

class Profile extends Component {
    state = {
        theme: localStorageTheme === 'light' || localStorageTheme === 'dark' ? localStorageTheme : 'system'
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

    componentDidMount(): void {
        // This is a workaround to make sure the theme value is set correctly in select tag, when there is a page navigation
        localStorageTheme = localStorage.getItem('theme');
        this.setState({
            theme: localStorageTheme === 'light' || localStorageTheme === 'dark' ? localStorageTheme : 'system',
        })
    }
    
    render(): ReactNode {
        const { theme } = this.state;

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
            </>
        )
    }
}

export default Profile