import sipmleRender from './simpleRender';
import plainRender from './plainRender';
import jsonRender from './jsonRender';


const mapping = {
  simple: sipmleRender,
  plain: plainRender,
  json: jsonRender,
};


const render = (ast, format) => {
  const renderOfType = mapping[format];
  return renderOfType(ast);
};

export default render;
