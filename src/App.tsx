// Packages
import { Component, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import NavItem from './components/NavItem';

// Icons
import { IoMdHome as HomeIcon } from "react-icons/io";
import { AiOutlineBarChart as PerformanceIcon } from "react-icons/ai";
import { GiBookPile as AssignmentsIcon } from "react-icons/gi";
import { CgProfile as ProfileIcon } from "react-icons/cg";

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
    to: '/student/',
    Icon: HomeIcon,
  },
  {
    children: 'Performance',
    to: '/student/performance',
    Icon: PerformanceIcon,
  },
  {
    children: 'Assignments',
    to: '/student/assignments',
    Icon: AssignmentsIcon,
  },
  {
    children: 'Profile',
    to: '/student/profile',
    Icon: ProfileIcon,
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
            <Route index path='/student/' Component={Home} />
            <Route path='/student/performance' Component={Performance} />
            <Route path='/student/assignments' Component={Assignments} />
            <Route path='/student/profile' Component={Profile} />
          </Routes>
        </div>

        <nav className='navbar'>
          {
            navItemList.map((navDetails, index) => (
              <NavItem
                key={index}
                children={navDetails.children}
                to={navDetails.to}
                isActive={activePage === navDetails.to}
                changeActivePage={this.changeActivePage}
                Icon={navDetails.Icon}
              />
            ))
          }
        </nav>
      </div>
    )
  }
}

export default App
