// ./../how-to-rob/fo-bundlin/rollup.config.js
import path from "node:path";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

const everythingToBuild = (tsconfig) => [
  {
    input: ["./src/index.ts"],
    output: [
      {
        file: "build/index.cjs.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "build/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({
        browser: true,
        extensions: [".ts", ".tsx"],
      }),
      commonjs(),
      babel({
        sourceMaps: true,
        configFile: "./../../zormu44/how-to-rob/fo-bundlin/babel.config.js",
        babelHelpers: "runtime",
        exclude: [
          /node_modules\/((?!react-44ms|typescript-44ms-reactionary-template-method|typescript-44ms))+/,
        ],
        extensions: [".ts", ".tsx"],
      }),
      terser(),
    ],
    external: ["react", "react-dom", /@babel\/runtime/],
    onwarn,
  },
  {
    input: ["./src/index.ts"],
    output: [
      {
        file: "build/typesonly.js.ignore",
        format: "iife",
      },
    ],
    plugins: [
      nodeResolve({
        browser: true,
        extensions: [".ts", ".tsx"],
      }),
      commonjs(),
      typescript({
        // tsconfig: whereIsMyTsconfig
        //   ? whereIsMyTsconfig
        //   : "./../../zormu44/how-to-rob/always/tsconfig.json",
        ...tsconfig,
        declaration: true,
        declarationDir: "build",
        exclude: ["**/*.test.*", "**/*.stories.*", "./src/test-utils/*"],
      }),
    ],
    external: ["react", "react-dom", /@babel\/runtime/],
    onwarn,
  },
];

const onwarn = (message, warn) => {
  if (/Unknown CLI flags: whereIsMyTsconfig/.test(message.message)) {
    return;
  }
  warn(message);
};

const rollupMain = (cliArguments) => {
  const whereAmI = process.cwd();
  const whereIsMyTsconfig = path.join(whereAmI, "tsconfig.json");
  console.log(`whereIsMyTsconfig = ${whereIsMyTsconfig}`);

  const baseTsconfig = JSON.parse(
    require("fs").readFileSync(__dirname + "/../always/tsconfig.json", "utf8")
  );
  let myTsconfig;
  try {
    myTsconfig = JSON.parse(
      require("fs").readFileSync(whereIsMyTsconfig, "utf8")
    );
  } catch (e) {
    myTsconfig = {};
  }

  const tsconfig = {
    ...baseTsconfig,
    ...myTsconfig,
  };

  return everythingToBuild(tsconfig);
};

export default rollupMain;
