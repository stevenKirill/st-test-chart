import React from 'react';
import './Header.css';

export const Header = () => {
    return (
        <div className="header">
            <div className="header__name">Name</div>
            <div className="header__adress">Adress</div>
            <div className="header__host">Owner</div>
            <div className="header__type">Type</div>
            <div className="header__active">Activity</div>
            <div className="header__empty"></div>
        </div>
    )
}