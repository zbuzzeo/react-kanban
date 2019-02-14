import React from 'react';
import NewTask from '../../containers/NewTask';
import './Header.scss';

const Header = (props) => {
  const { title } = props;

  return (
    <div className="header">
      <div className="titleContainer">
        <div className="headerTitle">{ title }</div>
      </div>
      <div className="NewTaskContainer">
        <NewTask />
      </div>
    </div>
  );
}

export default Header;
