import React from 'react';
import ReactDOM from 'react-dom';
import trafficMeister from './service';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

const RootComponent = () => (
  <div>Traffic app</div>
);

ReactDOM.render(
  <RootComponent/>,
  document.getElementById('root')
);

// Previewing the included data service
trafficMeister.fetchData(function(err, data) {
  console.log(data);
});

