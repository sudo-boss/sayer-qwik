module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre de tu hook?',
      },
      {
        type: 'input',
        name: 'path',
        message:
          'Path de tu hook? (click derecho copy path en el FOLDER donde quieres tu hook)',
      },
    ],
    actions: () => {

      const hook = {
        type: 'add',
        path: '{{path}}/{{camelCase name}}.ts',
        templateFile: `templates/others/hook.ts.hbs`,
      };

    
      return [hook];
    },
  });
};
