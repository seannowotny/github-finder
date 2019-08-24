import React from 'react';

type NavbarProps = {|
  title: string,
  icon: string
|};

const Navbar = ({ icon, title }: NavbarProps) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

export default Navbar;
