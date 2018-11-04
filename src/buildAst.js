import _ from 'lodash';


const mapping = [
  {
    check: (content1, content2, key) => (_.has(content1, key) && !_.has(content2, key)),
    process: (content1, content2, key) => ({ key, condition: 'removed', oldValue: content1[key] }),
  },
  {
    check: (content1, content2, key) => (!_.has(content1, key) && _.has(content2, key)),
    process: (content1, content2, key) => ({ key, condition: 'added', newValue: content2[key] }),
  },
  {
    check: (content1, content2, key) => ((!(content1[key] instanceof Object)
      || !(content2[key] instanceof Object)) && (content1[key] !== content2[key])),
    process: (content1, content2, key) => ({
      key, condition: 'changed', oldValue: content1[key], newValue: content2[key],
    }),
  },
  {
    check: (content1, content2, key) => (!(content1[key] instanceof Object)
      || !(content2[key] instanceof Object)),
    process: (content1, content2, key) => ({ key, condition: 'notChanged', oldValue: content1[key] }),
  },
  {
    check: (content1, content2, key) => ((content1[key] instanceof Object)
      && (content2[key] instanceof Object)),
    process: (content1, content2, key, buildAst) => ({ key, condition: 'children', children: buildAst(content1[key], content2[key]) }),
  },
];

const buildAst = (content1, content2) => {
  const commonKeys = _.union(Object.keys(content1), Object.keys(content2));
  return commonKeys.map(key => mapping.find(el => el.check(content1, content2, key))
    .process(content1, content2, key, buildAst));
};

export default buildAst;
