import React from 'react';
import './App.scss';
import FlatsList from '../FlatsList/FlatsList';
import Map from '../Map/Map';

class App extends React.Component {
    render() {
        return (
            <div>
               <div className="flat-list">
                   <FlatsList className="card"/>
               </div>
               <div className="map-container">
                    <Map />
               </div>
            </div>
        );
    }
    
};

export default App;