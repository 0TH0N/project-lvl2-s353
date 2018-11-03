

const plainRender = (ast, ancestors = '') => {
  const result = ast.map((item) => {
    const tempOldValue = typeof item.oldValue === 'string' ? `'${item.oldValue}'` : item.oldValue;
    const oldValue = tempOldValue instanceof Object
      ? '[complex value]' : tempOldValue;
    const tempNewValue = typeof item.newValue === 'string' ? `'${item.newValue}'` : item.newValue;
    const newValue = tempNewValue instanceof Object
      ? '[complex value]' : tempNewValue;
    const fullName = ancestors === '' ? item.key : `${ancestors}.${item.key}`;
    switch (item.condition) {
      case 'removed': {
        return `Property '${fullName}' was removed`;
      }

      case 'added': {
        return `Property '${fullName}' was added with value: ${newValue}`;
      }

      case 'changed': {
        return `Property '${fullName}' was updated. From ${oldValue} to ${newValue}`;
      }

      case 'notChanged': {
        return '';
      }

      case 'children': {
        return plainRender(item.children, fullName);
      }

      default: {
        return '';
      }
    }
  });

  return result.filter(item => item !== '').join('\n');
};


export default plainRender;
