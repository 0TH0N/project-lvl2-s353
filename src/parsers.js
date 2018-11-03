import yaml from 'js-yaml';
import ini from 'ini';


const mapping = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.ini': ini.parse,
};


const parse = (ext, data) => {
  const parser = mapping[ext];
  return parser(data) || {};
};


export default parse;
