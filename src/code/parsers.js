import yaml from 'js-yaml';
import ini from 'ini';


const parsers = (content, ext) => {
  if (ext === '.json') {
    return JSON.parse(content);
  }

  if (ext === '.yml') {
    const yml = yaml.safeLoad(content);
    return yml === null ? {} : yml;
  }

  if (ext === '.ini') {
    return ini.parse(content);
  }

  return null;
};

export default parsers;
