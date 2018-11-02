import yaml from 'js-yaml';
import ini from 'ini';


const mapping = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.ini': ini.parse,
};


const parse = (data) => {
  const extKey = Object.keys(data)[0];
  const parser = mapping[extKey];
  return parser(data[extKey]) || {};
};


export default parse;
