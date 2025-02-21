// Packages
import { Component, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import NavItem from './components/NavItem';

// Pages
import Home from './pages/Home';
import Performance from './pages/Performance';
import Assignments from './pages/Assignments';
import Profile from './pages/Profile';

// Styles
import './App.scss'

const navItemList = [
  {
    children: 'Home',
    to: '/',
  },
  {
    children: 'Performance',
    to: '/performance',
  },
  {
    children: 'Assignments',
    to: '/assignments',
  },
  {
    children: 'Profile',
    to: '/profile',
  },
]

class App extends Component {  
  state = { activePage: window.location.pathname }

  changeActivePage = (path: string) => {
    this.setState({activePage: path})
  }
  
  render(): ReactNode {
    const { activePage } = this.state
    
    return (
      <div className='bg-container'>
        <div className='body'>
          <Routes>
            <Route index path='/' Component={Home} />
            <Route path='/performance' Component={Performance} />
            <Route path='/assignments' Component={Assignments} />
            <Route path='/profile' Component={Profile} />
          </Routes>
        </div>

        <nav className='navbar'>
          {
            navItemList.map((navDetails, index) => (
              <NavItem
                key={index}
                {...navDetails}
                isActive={activePage === navDetails.to}
                changeActivePage={this.changeActivePage}
              />
            ))
          }
        </nav>
      </div>
    )
  }
}

export default App
