const presets = [
  ['@babel/env', {
    // Require the highest node version you can.
    // You should use at least a node version which 
    // supports async/await because Babel has been
    // configured without polyfills/generators for
    // async/await.
    targets: { node: '10.0.0' }
  }],
  // If you are not using flow remove the following line.
  '@babel/preset-flow',
];

const plugins = [
  ['module-resolver', {
    'root': ['./src'],
    'alias': {
      '@lib': './src/lib'
    }
  }]
];

module.exports = {
  presets,
  plugins,

  // For compatibility we generate inline source maps _and_
  // source maps in dedicated files. However due to a bug in babel
  // this option is not honored at the moment.
  sourceMaps: 'both',

  // Retaining lines increases debugability but may lead to less
  // readable source code. However if you have to debug for whatever
  // reason it is better to have the lines match up than to have 
  // nicer source code.
  retainLines: true,
};
