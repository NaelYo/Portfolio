import { SupportOption, Printer, Parser } from 'prettier';

declare const options: Record<string, SupportOption>;

declare const printers: Record<string, Printer>;
declare const parsers: Record<string, Parser>;
interface PluginOptions {
    /**
     * Path to the Tailwind config file.
     */
    tailwindConfig?: string;
    /**
     * Path to the Tailwind entry point (v4+)
     */
    tailwindEntryPoint?: string;
    /**
     * List of custom function and tag names that contain classes.
     */
    tailwindFunctions?: string[];
    /**
     * List of custom attributes that contain classes.
     */
    tailwindAttributes?: string[];
}
declare module 'prettier' {
    interface RequiredOptions extends PluginOptions {
    }
    interface ParserOptions extends PluginOptions {
    }
}

export { type PluginOptions, options, parsers, printers };
