module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  env: {
    build: {
      ignore: [
        "**/*.test.tsx",
        "**/*.test.ts",
        "**/*.story.tsx",
        "__snapshots__",
        "__tests__",
        "__stories__",
      ],
    },
  },
  ignore: [
    "node_modules/(?!${typescript-44ms|typescript-44ms-reactionary-template-method|typescript-44ms-ootb-all|typescript-44ms-ootb-create-element|typescript-44ms-ootb-dom|typescript-44ms-ootb-events|typescript-44ms-ootb-form-refs|typescript-44ms-ootb-logical-context|typescript-44ms-ootb-public-form-state|typescript-44ms-ootb-reactionary|typescript-44ms-ootb-service|typescript-44ms-ootb-service-controller|typescript-44ms-ootb-source-of-truth|typescript-44ms-ootb-state-indexing})/"
  ],
  plugins: ["@babel/plugin-transform-runtime"]
};
