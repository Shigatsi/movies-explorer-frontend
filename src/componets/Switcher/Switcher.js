import React from 'react';

import './Switcher.css';

function Swither () {
  return (
    <section className = "switch">
    <label className="switcher">
       <input className = "switcher__checkbox" id = "switcher" type = "checkbox" />
       <span className= "swithcer__btn" />
    </label>
    <p className = "switcher__caption">Коротокометражки</p>
    </section>
  )
}

export default Swither;
