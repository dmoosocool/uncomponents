import type { PlopTypes } from '@turbo/gen'

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator('react-component', {
    description: 'Adds a new react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{kebabCase name}}/index.tsx',
        templateFile: 'templates/component.hbs',
      },
      // add index.tsx file if it doesn't exist
      {
        type: 'add',
        path: 'index.tsx',
        skipIfExists: true,
        templateFile: 'templates/injectable-index.tsx.hbs',
      },
      {
        type: 'append',
        path: 'index.tsx',
        pattern: /(?<insertion>\/\* COMPONENTS_INJECT_IMPORT \*\/)/g,
        template: 'import {{pascalCase name}} from \'./components/{{kebabCase name}}\'',
      },
      {
        type: 'append',
        path: 'index.tsx',
        pattern: /(?<insertion>\/\* COMPONENTS_INJECT_EXPORT \*\/)/g,
        template: '  {{pascalCase name}},',
      },
    ],
  })
}
