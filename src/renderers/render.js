import sipmleRender from './simpleRender';
import plainRender from './plainRender';


const mapping = {
  simple: sipmleRender,
  plain: plainRender,
};


const render = (ast, format) => {
  const renderOfType = mapping[format];
  return renderOfType(ast);
};

export default render;
