export default function (plop) {
  // controller generator
  plop.setGenerator("controller", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "controller name please",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/index.tsx",
        templateFile: "plop-templates/controller.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/styles.css",
        templateFile: "plop-templates/component.css.hbs",
      },
    ],
  });
}
