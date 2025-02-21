import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

interface Props {
    to: string;
    children: string;
    isActive: boolean;
    changeActivePage: (path: string) => void;
}

const NavItem: React.FC<Props> = props => {
    const { to, children, isActive, changeActivePage } = props
    const activeClassName = isActive ? 'active' : '';
    const onChangePage = () => {
        changeActivePage(to);
    }

    return (
        <Link
            to={to}
            children={children}
            className={`nav-item ${activeClassName}`}
            onClick={onChangePage}
        />
    )
}

export default NavItem;