import React from 'react';

function Menu() {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        <li>
          <a href="#">Word Search 1</a>
        </li>
        <li>
          <a href="#">Word Search 2</a>
        </li>
        <li>
          <a href="#">Word Search 3</a>
        </li>
        {/* Add more options as needed */}
      </ul>
    </div>
  );
}

export default Menu;
