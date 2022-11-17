import { Options } from "tsup";
import { prodConfig } from "./src";

const config: Options = {
    ...prodConfig,
    dts: true,
    sourcemap: false,
};

export default config;
