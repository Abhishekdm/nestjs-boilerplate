module.exports = function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the model',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{name}}s/dto/create-{{name}}.dto.ts',
        templateFile: 'plop-templates/Models/dto.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}s/schemas/{{name}}.schema.ts',
        templateFile: 'plop-templates/Models/schema.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}s/{{name}}s.controller.ts',
        templateFile: 'plop-templates/Models/controller.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}s/{{name}}s.module.ts',
        templateFile: 'plop-templates/Models/module.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/{{name}}s/{{name}}s.service.ts',
        templateFile: 'plop-templates/Models/service.ts.hbs',
      },
    ],
  });
};
