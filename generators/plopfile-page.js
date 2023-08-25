module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'Cual es el nombre de tus componentes sin Prefijos o Sufijos ex: Home, PublicRegister?',
      },
      {
        type: 'input',
        name: 'route',
        message:
          'Cual es la ruta de tu "PAGE"? (EXCLUYE iniciar o terminar con "/" o rutas que incluyan /es, /en, /admin o /my-forge )',
      },
    ],
    actions: ({ route }) => {
      // const styleType = haveStyles ? 'withStyle' : 'noStyle';
      // const propsType = haveProps ? '' : 'NoProps';

      const pageTemplate = {
        type: 'add',
        path: '../src/routes/{{route}}/index.tsx',
        templateFile: `templates/pages/page.tsx.hbs`,
      };

      const compTemplate = {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: `templates/components/withStyleNoPropsComponent.tsx.hbs`,
      };

      const styles = {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss',
        templateFile: `templates/components/compStyles.module.scss.hbs`,
      };

      return [pageTemplate, compTemplate, styles];
    },
  });
};
