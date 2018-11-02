import _ from 'lodash';


const buildAst = (content1, content2) => {
  const commonKeys = _.union(Object.keys(content1), Object.keys(content2));
  const ast = commonKeys.map((key) => {
    if (_.has(content1, key) && !_.has(content2, key)) {
      return {
        key,
        condition: 'removed',
        oldValue: content1[key],
        newValue: null,
        children: null,
      };
    }

    if (!_.has(content1, key) && _.has(content2, key)) {
      return {
        key,
        condition: 'added',
        oldValue: null,
        newValue: content2[key],
        children: null,
      };
    }

    if (!(content1[key] instanceof Object) || !(content2[key] instanceof Object)) {
      return {
        key,
        condition: content1[key] !== content2[key] ? 'changed' : 'notChanged',
        oldValue: content1[key],
        newValue: content2[key],
        children: null,
      };
    }

    return {
      key,
      condition: 'children',
      oldValue: null,
      newValue: null,
      children: buildAst(content1[key], content2[key]),
    };
  });

  return ast;
};

export default buildAst;
