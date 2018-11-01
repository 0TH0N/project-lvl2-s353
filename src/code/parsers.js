import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';


const parsers = (filePath) => {
  try {
    const ext = path.extname(filePath);
    if (ext === '.json') {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    if (ext === '.yml') {
      const yml = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
      return yml === null ? {} : yml;
    }
    return null;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export default parsers;
