const _ = require('lodash');

function detectChanges(original, modified) {
    return _.toPairs(_.omitBy(modified, (value, key) => _.isEqual(original[key], value)));
}

const object1 = {
    id: 2,
    name: 'Przyjaciele',
    startYear: 1994,
    endYear: 2004,
    type: ["Komedia"],
    seasons: 10
  };
  
  const object2 = {
    id: 2,
    name: 'Przyjaciele edytowany',
    startYear: 1994,
    endYear: 2010,
    type: ["Komedia"],
    seasons: 10
  };
  
  console.log(detectChanges(object1, object2)); // => [ [ 'name', 'Przyjaciele edytowany' ], [ 'endYear', 2010 ] ]