import React from 'react';

import './search.component.css';

export const SearchForm = ({placeholder,handleChange}) => {
      return (
            <div>
                    <input type='search' className='search' placeholder={placeholder} onChange={handleChange}/>
            </div>
            );
 };

