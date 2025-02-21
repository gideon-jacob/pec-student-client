import { Component, ReactNode } from 'react'
import './index.scss'

class Profile extends Component {
    toggleTheme = () => {
        const rootDiv = document.getElementById('root');
        rootDiv?.classList.toggle('light');
        rootDiv?.classList.toggle('dark');
        
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }
    
    render(): ReactNode {
        return (
            <>
                <div>Profile</div>
                <button onClick={this.toggleTheme}>Change Theme</button>
            </>
        )
    }
}

export default Profile