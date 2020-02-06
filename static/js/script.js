import { select, csv } from 'd3' ;

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

csv('population_growth.csv').then(data => {
    console.log(data);
});
csv('population_meta');
