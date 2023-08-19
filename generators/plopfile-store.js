module.exports = (plop) => {
  plop.setGenerator('store', {
    description: 'Create a store',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre de tu store en minúsculas y espacios (user info)?',
      },
    ],
    actions: ({}) => [
      {
        type: 'add',
        path: '../src/store/{{camelCase name}}.ts',
        templateFile: `templates/store/storeEx.ts.hbs`,
      },
    ],
  });
};
