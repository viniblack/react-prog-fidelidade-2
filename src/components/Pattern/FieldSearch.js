import React from 'react';
import ButtonSearch from '../../styles/pattern/search';
import Search from '../../assets/img/search.svg';

import '../../styles/pattern/search.css';

const FieldSearch = () => (
  <>
    <form id="search">
      <div className="input-block">
        <input type="number" id="subject" />
        <ButtonSearch><img className="bt-search" src={Search} alt="Close" /></ButtonSearch>
      </div>
    </form>
  </>
);

export default FieldSearch;
