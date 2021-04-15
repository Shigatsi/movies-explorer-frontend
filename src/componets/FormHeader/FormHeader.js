import React from 'react';
import { Link } from 'react-router-dom';

import './FormHeader.css';

import movieExplorerLogo from '../../images/logo.svg';

function FormHeader ({ subtitle }) {
  return (
    <>
    <Link to = '/'>
      <img className="form__logo" src={movieExplorerLogo} alt="Логотип Movie Explorer"/>
    </Link>
    <h2 className="form__subtitle">{subtitle}</h2>
    </>
  )
}

export default FormHeader;
