import yaml from 'js-yaml';
import ini from 'ini';


const mapping = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.yaml': yaml.safeLoad,
  '.ini': ini.parse,
};


const getParser = (ext, data) => {
  const parse = mapping[ext];
  if (ext === '.yml' || ext === '.yaml') {
    return parse(data) || {};
  }
  return parse(data);
};


export default getParser;
