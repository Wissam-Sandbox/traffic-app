import React from 'react';
import ReactDOM from 'react-dom';
import trafficMeister from './service';
import registerServiceWorker from './registerServiceWorker';
import RootComponent from './components/RootComponent';

registerServiceWorker();

ReactDOM.render(
  <RootComponent/>,
  document.getElementById('root')
);

// Previewing the included data service
trafficMeister.fetchData(function(err, data) {
  console.log(data);
});

