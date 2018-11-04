

const objToString = (item, currentDepth) => {
  const spacesForItem = '  '.repeat(currentDepth);
  const spacesForCloseBracket = '  '.repeat(currentDepth - 1);
  const keys = Object.keys(item);
  const result = keys.map((key) => {
    const tempValue = item[key] instanceof Object
      ? objToString(item[key], currentDepth + 1) : item[key];
    const value = typeof tempValue === 'boolean' || item[key] instanceof Object
      ? tempValue : `"${tempValue}"`;

    return `${spacesForItem}"${key}": ${value}`;
  });
  return `{\n${result.join(',\n')}\n${spacesForCloseBracket}}`;
};


const remakeValue = (value, currentDepth) => {
  const tempValue = value instanceof Object ? objToString(value, currentDepth + 2) : value;
  return typeof tempValue === 'boolean' || value instanceof Object ? tempValue : `"${tempValue}"`;
};


const mapping = {
  removed: (spaces, spaces2, item, currentDepth) => `${spaces}"${item.key}": {\n${spaces2}"Status": "removed",\n${spaces2}"oldValue": ${remakeValue(item.oldValue, currentDepth)}\n${spaces}}`,
  added: (spaces, spaces2, item, currentDepth) => `${spaces}"${item.key}": {\n${spaces2}"Status": "added",\n${spaces2}"newValue": ${remakeValue(item.newValue, currentDepth)}\n${spaces}}`,
  changed: (spaces, spaces2, item, currentDepth) => `${spaces}"${item.key}": {\n${spaces2}"Status": "changed",\n${spaces2}"oldValue": ${remakeValue(item.oldValue, currentDepth)},\n${spaces2}"newValue": ${remakeValue(item.newValue, currentDepth)}\n${spaces}}`,
  notChanged: (spaces, spaces2, item, currentDepth) => `${spaces}"${item.key}": {\n${spaces2}"Status": "notChanged",\n${spaces2}"oldValue": ${remakeValue(item.oldValue, currentDepth)}\n${spaces}}`,
  children: (spaces, spaces2, item, currentDepth, jsonRender) => `${spaces}"${item.key}": ${jsonRender(item.children, currentDepth + 1)}`,
};

const jsonRender = (ast, currentDepth = 1) => {
  const spaces = '  '.repeat(currentDepth);
  const spaces2 = '  '.repeat(currentDepth + 1);
  const tempResult = ast.map(item => mapping[item.condition](spaces,
    spaces2, item, currentDepth, jsonRender));
  const result = `{\n${tempResult.join(',\n')}\n${spaces}}`;
  return result.slice(0, -3).concat('}');
};


export default jsonRender;
