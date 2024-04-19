import React, { useState } from 'react';
import { SelectAnAnimal } from '../pages/SelectAnAnimal';
import Donate from '../pages/Donate';
import './NavBar.css'

enum Tabs {
    SelectAnAnimal = 'Select An Animal',
    Donate = 'Donate',
    // Services = 'Services',
    // Contact = 'Contact'
}

const Pages: { [tabName: string]: React.ReactElement } = {
    [Tabs.SelectAnAnimal]: <SelectAnAnimal />,
    [Tabs.Donate]: <Donate />,
    // [Tabs.Services]: <h1>Our Services</h1>,
    // [Tabs.Contact]: <h1>Contact Us</h1>
}

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState<Tabs>(Tabs.SelectAnAnimal);

  const handleTabClick = (page: Tabs) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <ul>
            {Object.values(Tabs).map(tab =>  <li onClick={() => handleTabClick(tab)} className={currentPage === tab ? 'active' : ''}>{tab}</li>)}
        </ul>
      </nav>
      <div className='container'>
        {Pages[currentPage]}
      </div>
    </div>
  );
};

export default NavBar;
