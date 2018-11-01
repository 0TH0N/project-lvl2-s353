import { car, cdr } from 'hexlet-pairs';
import yaml from 'js-yaml';
import ini from 'ini';


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
