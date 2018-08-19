# What is this?
It is being said that getting into JavaScript development is easy. This may be true. The language it very forgiving (wat?) and (compared to many other languages) has very few key concepts (which is a good thing IMHO. Writing the first 100 lines of JavaScript code is easy. However, without any tooling writing more code than that quickly becomes unmanageable. Fortunately there are many tools that make it a joy to write more thant 100 lines of JavaScript. Unfortunately setting those tools up can be frustrating. It is usually a mix of trial and error with a lot of reading inbetween. This repository contains a very basic project template that can be used as a basis for new Node.js projects. If you use this template as a starting point you get the following things (preconfigured):

- Linting (using ESLint): Enforces a consistent code style and (more importantly) enforces best practices. 
- Type checking (using Flow; optional): To catch type/null errors and for auto completion.
- Testing (using Jest; optional)
- Multiple ways to debug your code (using Chrome DevTools and Visual Studio Code)

This template is merely a composition of existing tools and a hopefully helpful Readme. It tries to include the least amount of stuff but, at the same time, provide the maximum benefit. Everything in this template is optional. For example: If you don't like type checks simply remove `.src/.flowconfig`. If you don't like testing your code simply remove the sample test. If you want type checks but hate an extra compile step simply use comment-based type annotations. If you hate Visual Studio Code simply remove the `.vscode` folder.


## Usage
Using this template is easy:

```
git clone https://github.com/ChristianKienle/nodejs-template.git myproject
cd myproject
```

Then edit `package.json` accordingly and adapt the template to your needs.


## Testing
Because testing should be delightful this template is using [Jest](https://jestjs.io/). You can run tests via NPM:

```
npm run test
```

You can also start the jest running in Visual Studio Code. This makes it possible to launch individual tests, debug tests and get live feedback.

![Visual Studio Code Jest Testing](./templateDocs/images/live-test.gif "Visual Studio Code Jest Testing")

A few notes about testing and this template:

- There is a sample test (`./src/index.test.js`).
- You may have to install the Jest Visual Studio Code extension in order to get all the benefits from Jest + Visual Studio Code.
- Type checking using Flow should work in tests (Jest type annoations are installed and enabled)
- ESLint was configured to ignore type definitions installed via *flow-typed* (subfolder: *npm*).
- It is assumed that all `**/*.test.js`-files contain tests which are then executed using *Jest*. 

## Compiling (optional; please read for more details)
Since this template is using [Flow](https://flow.org) (for type checking) the code has to be compiled before it can be executed. However, compiling is optional if you are:

- not using Flow at all or if you are
- only using Flows [comment-based syntax](https://flow.org/en/docs/types/comments/).

Personally I like the comment-based syntax very much. It definitely has several benefits: You obviously don't have this extra compile step and thus makes adoption easier. Personally I usually start by using the comment-based syntax and then later on I switch to Flows full blown feature set. There are two NPM-compile-scripts:

```
npm run build
```

This runs a one-off compilation. In contrast:

```
npm run build:watch
```

is watching `./src` for changes and automatically runs the compiler once a change is detected. In both cases the compiled code is written to `./dist` (alonside with source maps).

## Executing and Debugging
There are multiple ways to execute and debug the code. The most basic one is to use the predefined NPM-scripts. Execute the `start`-script in order to simply start the execution:

```
npm run start
```

There is also a debug version of the `start`-script available:

```
npm run start:debug
```

The `start:debug`-script does the same as the `start`-script but halts execution until a debugger is attached. There are multiple ways to attach a debugger to the waiting Node process. More about that later.

This template comes with a Visual Studio Code launch configuration (called *Launch index.js*) which you can use to start execution.

Let's now have a look at the debugging side of things:

### Debugging using Chrome DevTools
Simply execute `start:debug` as described above and then launch Chrome and open [chrome://inspect](chrome://inspect). You should see something like this:

![Screenshot showing the Chrome DevTools start page](./templateDocs/images/chrome-dev-tools.png "Screenshot showing the Chrome DevTools start page")

Launch the debugger by clicking on the circled link. This should open the debugger.

![Screenshot showing the Chrome DevTools Debugger](./templateDocs/images/chrome-dev-tools-debugger.png "Screenshot showing the Chrome DevTools debugger")

You can now add breakpoints, watch expression (...). Once you are ready click on `Resume` (circled in red).

### Debugging using Visual Studio Code
If you use the *Launch index.js* launch configuration breakpoints you have setup in Visual Studio Code should work out of the box, without any additional configuration. You can also use the *auto attach* feature of Visual Studio Code.

- Make sure that *auto attach* is **on**.
  - If you fail to end up in your debugger *auto attach* may be disabled.
  - In that case you can try to *toggle auto attach*.
  - Open the command palette ⇧⌘P (macOS).
  - Execute the *toggle auto attach* command.
  - Try again.
- Then you can use the integrated terminal and execute the `start:debug`-script.
- You should also end up in your debugger if a breakpoint is hit. Magic!
