const presets = [
  // If you are not using flow remove the following line.
  '@babel/preset-flow',
  ['@babel/env',
    {
      // Require the highest node version you can.
      // You should use at least a node version which 
      // supports async/await because Babel has been
      // configured without polyfills/generators for
      // async/await.
      targets: { node: '10.0.0' }
    }
  ]
];

const plugins = [];

module.exports = {
  presets,
  plugins,

  // For compatibility we generate inline source maps _and_
  // source maps in dedicated files. 
  sourceMaps: 'both',

  // Retaining lines increases debugability but may lead to less
  // readable source code. However if you have to debug for whatever
  // reason it is better to have the lines match up than to have 
  // nicer source code.
  retainLines: true,
};
