import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

interface Props {
    to: string;
    children: string;
    Icon: React.ElementType;
    isActive: boolean;
    changeActivePage: (path: string) => void;
}

const NavItem: React.FC<Props> = props => {
    const { to, children, isActive, changeActivePage, Icon } = props
    const activeClassName = isActive ? 'active' : '';
    const onChangePage = () => {
        changeActivePage(to);
    }

    return (
        <Link
            to={to}
            className={`nav-item ${activeClassName}`}
            onClick={onChangePage}
        >
            <div className='nav-icon-wrapper'>
                <Icon className='nav-icon' />
            </div>

            <span className='nav-text'>{children}</span>
        </Link>
    )
}

export default NavItem;