import React from 'react';
import './Header.scss';

const Header = (props) => {
  const { title } = props;

  return (
    <div className="header">
      <div className="headerTitle">{ title }</div>
    </div>
  );
}

export default Header;
