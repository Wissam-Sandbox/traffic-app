import trafficMeister from './apiLocal';

const requestData = () => {
  return new Promise((resolve, reject) => {
    trafficMeister.fetchData(function(err, data) {
      if (err) reject([err]);
      resolve(data);
    });
  });
};

export {
  requestData
};
