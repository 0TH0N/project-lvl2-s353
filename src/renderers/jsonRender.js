

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


const jsonRender = (ast, currentDepth = 1) => {
  const spaces = '  '.repeat(currentDepth);
  const spaces2 = '  '.repeat(currentDepth + 1);

  const tempResult = ast.map((item) => {
    const tempOldValue = item.oldValue instanceof Object
      ? objToString(item.oldValue, currentDepth + 2) : item.oldValue;

    const oldValue = typeof tempOldValue === 'boolean' || item.oldValue instanceof Object
      ? tempOldValue : `"${tempOldValue}"`;

    const tempNewValue = item.newValue instanceof Object
      ? objToString(item.newValue, currentDepth + 2) : item.newValue;

    const newValue = typeof tempNewValue === 'boolean' || item.newValue instanceof Object
      ? tempNewValue : `"${tempNewValue}"`;

    switch (item.condition) {
      case 'removed': {
        return `${spaces}"${item.key}": {\n${spaces2}"Status": "removed",\n${spaces2}"oldValue": ${oldValue}\n${spaces}}`;
      }

      case 'added': {
        return `${spaces}"${item.key}": {\n${spaces2}"Status": "added",\n${spaces2}"newValue": ${newValue}\n${spaces}}`;
      }

      case 'changed': {
        return `${spaces}"${item.key}": {\n${spaces2}"Status": "changed",\n${spaces2}"oldValue": ${oldValue},\n${spaces2}"newValue": ${newValue}\n${spaces}}`;
      }

      case 'notChanged': {
        return `${spaces}"${item.key}": {\n${spaces2}"Status": "notChanged",\n${spaces2}"oldValue": ${oldValue}\n${spaces}}`;
      }

      case 'children': {
        return `${spaces}"${item.key}": ${jsonRender(item.children, currentDepth + 1)}`;
      }
      default: {
        return '';
      }
    }
  });

  const result = `{\n${tempResult.join(',\n')}\n${spaces}}`;
  return result.slice(0, -3).concat('}');
};


export default jsonRender;
