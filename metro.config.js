const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Fix for Windows backslash issues
config.resolver.blacklistRE = /(__tests__|\.expo[/\\]types)/;

// Alternative resolver configuration
config.resolver.blockList = [
  /\/__tests__\/.*/,
  /\/\.expo\/types\/.*/
];

module.exports = config;
