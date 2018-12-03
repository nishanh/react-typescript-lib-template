# react-typescript-lib-template
This is my take on creating a template library project for React components using Typescript. 
Basically, the team wants to create component libraries using React with Typescript and the BlueprintJs GUI control set. After looking at other github projects, I decided to roll my own.

The objectives were:  
* React / Typescript enabled
* Storybook integration
* Testing with Jest/Enzyme
* Localization with i18next

The webpack configuration was cannibalized from an ejected create-react-app project. Be aware that I'm new to React, Typescript and web-development in general. So use at your own risk.

What follows is the guidance for developers on this team regarding usage.

## `React/Typescript Library Project Template`

### `Setup`

* Clone this project and rename the project folder to your desired library name
* In `webpack.config.js`, locate the `output` section and change the `library` entry to the new project name
* In `package.json`, change the `name` entry to the new project name

### `Development`

* Add your components to the `src/components` folder
* Add your tests to the `tests` folder
* CSS files **MUST** follow the naming convention of `[component].module.css`
* A corresponding `[component].module.css.d.ts` must also be specified to enable CSS import into a variable (*see TestComponent.tsx for example usage*)
* Re-export your component classes in the `src/index.ts` file to make them available to clients using the library
* Two example components are provided in the `src/components` folder

### `Localization`

* Do not hard-code strings meant for user presentation
* Add your strings to the `translations.xx.json` files in the `locales` folder
* Use the `i18next.t()` function to resolve user strings (*see TestComponent.tsx for example usage*)
### `Scripts`

* Execute `yarn build` to build the bundle and typedefs into the `dist` folder
* Execute `yarn package` to build and package the distributable into a tarball (*Production only*)
* Execute `yarn clean` to remove the `dist` folder and any packaged tarball
* Execute `yarn nuke` to clean the project and delete the `node_modules` folder
* Execute `yarn test` to run established tests

### `Storybook`

* Add your stories to the `stories` folder or append stories to the `index.stories.tsx` file
* Execute `yarn storybook` to see your components hosted in `storybook`
* Avoid altering the files in the `.storybook` folder

### `Using the library in the client application`

* In the `package.json` file of the client application, add an entry for the library to the `dependencies` section, such as:
    * `"my-library-name": "file:<relative path to library folder>"`
* Import elements from the library via the `import` statement as you would any other NPM package
* To enable hot-loading of the library in the client (assuming it was created with create-react-app)
    * Navigate to the root folder of the library project
    * Execute command `yarn link`
    * Navigate to the root folder of the client project
    * Execute the command `yarn link my-library-name`
    * Make changes to the library project and execute command `yarn build`
    * Once the build completes, the client should refresh to show the changes
    * If you do not want to use hot-loading via `link`, you will have to execute the command `yarn install --force` to pick-up the changes
