import { prodConfig } from "tsup-config";
import { Options } from "tsup";

const config: Options = {
    ...prodConfig,
    dts: true,
    sourcemap: false,
};

export default config;
