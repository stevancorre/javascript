import { Options } from "tsup";

const baseConfig: Options = {
    name: "tsup",
    target: "node16",
    entry: ["src/index.ts"],
    outDir: "dist",
    format: "cjs",
    sourcemap: true,
    clean: true,
};
export default baseConfig;

export const devConfig: Options = {
    ...baseConfig,
};

export const prodConfig: Options = {
    ...baseConfig,
    minify: true,
};
