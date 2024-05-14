import Header from '../components/Header';
import Main from '../components/Main';
import { useState } from 'react';

function List() {

  let [searchString, setSearchString] = useState ("")
  let [searchSection, setSearchSection] = useState ("tv")

  return (
    <div className="container">
      <Header 
        searchSectionAction = {setSearchSection}
        searchStringAction={setSearchString}/>
      <Main 
        searchString = {searchString}
        searchSection = {searchSection} 
      />
    </div>
  );
}

export default List;
