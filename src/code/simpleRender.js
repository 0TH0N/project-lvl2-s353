

const objToString = (item, currentDepth) => {
  const spaces = '    '.repeat(currentDepth);
  const keys = Object.keys(item);
  const result = keys.map((key) => {
    const value = item[key] instanceof Object
      ? objToString(item[key], currentDepth + 1) : item[key];
    return `${spaces}    ${key}: ${value}`;
  });
  return `{\n${result.join('\n')}\n${spaces}}`;
};


const sipmleRender = (ast, currentDepth = 0) => {
  const spaces = '    '.repeat(currentDepth);
  const result = ast.map((item) => {
    const oldValue = item.oldValue instanceof Object
      ? objToString(item.oldValue, currentDepth + 1) : item.oldValue;
    const newValue = item.newValue instanceof Object
      ? objToString(item.newValue, currentDepth + 1) : item.newValue;
    switch (item.condition) {
      case 'removed': {
        return `${spaces}  - ${item.key}: ${oldValue}`;
      }

      case 'added': {
        return `${spaces}  + ${item.key}: ${newValue}`;
      }

      case 'changed': {
        return `${spaces}  - ${item.key}: ${oldValue}\n${spaces}  + ${item.key}: ${newValue}`;
      }

      case 'notChanged': {
        return `${spaces}    ${item.key}: ${oldValue}`;
      }

      default: return `${spaces}    ${item.key}: ${sipmleRender(item.children, currentDepth + 1)}`;
    }
  });

  return `{\n${result.join('\n')}\n${spaces}}`;
};


export default sipmleRender;
