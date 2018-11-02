import yaml from 'js-yaml';
import ini from 'ini';


const mapping = {
  '.json': item => JSON.parse(item),
  '.yml': item => yaml.safeLoad(item) || {},
  '.ini': item => ini.parse(item),
};


const parse = data => mapping[Object.keys(data)[0]](data[Object.keys(data)[0]]);


exports.parse = parse;

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
