import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss'

interface Props {
    to: string;
    children: string;
    Icon: React.ElementType;
}

const NavItem: React.FC<Props> = props => {
    const { to, children, Icon } = props

    return (
        <NavLink
            to={to}
            end
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
            <div className='nav-icon-wrapper'>
            <Icon className='nav-icon' />
            </div>

            <span className='nav-text'>{children}</span>
        </NavLink>
    )
}

export default NavItem;