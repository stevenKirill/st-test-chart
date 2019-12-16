import React,{ } from 'react';
import './SerchingPanel.css';

export default function SearchingPanel({ search, setSearch }) {
    return <input 
    type="search" 
    className='search ml-3' 
    placeholder="searching by name" 
    value={search} 
    onChange={(event) => setSearch(event.target.value)}
    />
}
