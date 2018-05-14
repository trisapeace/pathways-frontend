// This file contains dummy declarations for 3rd party dependencies that do not
// have their own TS declarations.
// Reference:
// - Shorthand module declarations: https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#shorthand-ambient-module-declarations
// - Wildcard character in module names: https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#wildcard-character-in-module-names
declare const Expo: Any;
declare module '@lingui/*';
declare module '../../locale/*/messages';
