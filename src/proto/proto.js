/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

import $protobuf from "protobufjs/light";

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  Person: {
    nested: {
      Person: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          id: {
            type: "int32",
            id: 2
          },
          email: {
            type: "string",
            id: 3
          }
        }
      }
    }
  }
});

export default $root;
