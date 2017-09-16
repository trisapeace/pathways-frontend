# Polymer Web Component Wrappers

This directory contains wrappers for web components that are rendered by React using react-polymer. Each file has the same name as a component package, such as [paper-badge](https://www.webcomponents.org/element/PolymerElements/paper-badge), and exports one or more classes, each one corresponding to an element defined in that package. Wrapper classes should have the same name as the original elements, except in UpperCamelCase instead of snake-case.

Events should *always* be renamed, and shortened. For example, "iron-overlay-opened" becomes "onOpen" in PaperDialog. Other properties should stay the same, as they are passed to their web components verbatim.

Normally, Polymer components update their own properties, violating React's props-down rule. We are able to change this behaviour in our wrapper classes, making these components act as controlled components.
