import React from 'react';

import './Switcher.css';

function Swither ({ isOn, handleToggle }) {
  return (
    <section className = "switch">
    <label className="switcher">
       <input
        className = "switcher__checkbox"
        id = "switcher"
        type = "checkbox"
        checked = {isOn}
        onChange = {handleToggle}
      />
       <span className= "swithcer__btn" />
    </label>
    <p className = "switcher__caption">Коротокометражки</p>
    </section>
  )
}

export default Swither;
