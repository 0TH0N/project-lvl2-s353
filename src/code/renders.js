import sipmleRender from './simpleRender';
import plainRender from './plainRender';


const render = (ast, format) => {
  switch (format) {
    case 'plain': {
      return plainRender(ast);
    }
    default: {
      return sipmleRender(ast);
    }
  }
};

export default render;
