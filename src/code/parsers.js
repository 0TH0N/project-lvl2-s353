import { car, cdr } from 'hexlet-pairs';
import yaml from 'js-yaml';
import ini from 'ini';


const mapping = {
  '.json': item => JSON.parse(item),
  '.yml': item => yaml.safeLoad(item) || {},
  '.ini': item => ini.parse(item),
};

export default content => mapping[car(content)](cdr(content));
/*
const parsers = (content) => {
  switch (car(content)) {
    case '.json': return JSON.parse(cdr(content));

    case '.yml': {
      const yml = yaml.safeLoad(cdr(content));
      return yml === null ? {} : yml;
    }

    case '.ini': return ini.parse(cdr(content));

    default: return null;
  }
};

export default parsers;
*/
