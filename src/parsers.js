import yaml from 'js-yaml';
import ini from 'ini';


const mapping = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.yaml': yaml.safeLoad,
  '.ini': ini.parse,
};


const parse = (ext, data) => {
  const parseData = mapping[ext];
  if (ext === '.yml' || ext === '.yaml') {
    return parseData(data) || {};
  }
  return parseData(data);
};


export default parse;
