

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


const remakeValue = (value, currentDepth) => (value instanceof Object
  ? objToString(value, currentDepth + 1) : value);


const mapping = {
  removed: (spaces, item, currentDepth) => `${spaces}  - ${item.key}: ${remakeValue(item.oldValue, currentDepth)}`,
  added: (spaces, item, currentDepth) => `${spaces}  + ${item.key}: ${remakeValue(item.newValue, currentDepth)}`,
  changed: (spaces, item, currentDepth) => `${spaces}  - ${item.key}: ${remakeValue(item.oldValue, currentDepth)}\n${spaces}  + ${item.key}: ${remakeValue(item.newValue, currentDepth)}`,
  notChanged: (spaces, item, currentDepth) => `${spaces}    ${item.key}: ${remakeValue(item.oldValue, currentDepth)}`,
  children: (spaces, item, currentDepth, sipmleRender) => `${spaces}    ${item.key}: ${sipmleRender(item.children, currentDepth + 1)}`,
};


const sipmleRender = (ast, currentDepth = 0) => {
  const spaces = '    '.repeat(currentDepth);
  const result = ast.map(item => mapping[item.condition](spaces, item, currentDepth, sipmleRender));
  return `{\n${result.join('\n')}\n${spaces}}`;
};


export default sipmleRender;
