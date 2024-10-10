import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className='flex gap-4 align-items-center justify-content-center'>
          <li>
            <Link
              to='/'
              className='font-medium text-700 hover:text-orange-700 focus:text-blue-500 active:text-blue-500'
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
