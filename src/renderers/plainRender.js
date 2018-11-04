

const remakeValue = (value) => {
  const tempValue = typeof value === 'string' ? `'${value}'` : value;
  return tempValue instanceof Object ? '[complex value]' : tempValue;
};


const mapping = {
  removed: fullName => `Property '${fullName}' was removed`,
  added: (fullName, item) => `Property '${fullName}' was added with value: ${remakeValue(item.newValue)}`,
  changed: (fullName, item) => `Property '${fullName}' was updated. From ${remakeValue(item.oldValue)} to ${remakeValue(item.newValue)}`,
  notChanged: () => '',
  children: (fullName, item, plainRender) => plainRender(item.children, fullName),
};


const plainRender = (ast, ancestors = '') => {
  const result = ast.map((item) => {
    const fullName = ancestors === '' ? item.key : `${ancestors}.${item.key}`;
    return mapping[item.type](fullName, item, plainRender);
  });

  return result.filter(item => item !== '').join('\n');
};


export default plainRender;
