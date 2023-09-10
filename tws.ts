import { Command } from "./deps.ts";
import { consume, stringify } from "./deps.ts";
import { tw } from "./config.ts";

const { _args } = await new Command()
  .name("tws")
  .version("0.0.1")
  .description("Simple cli tool for twind")
  // .option("-a, --all", "show all.")
  .arguments("<input> <output>")
  .action(async (_args, input: string, output: string) => {
    const html = await Deno.readTextFile(input);

    const _ = consume(html);
    const restore = tw.snapshot();
    const css = stringify(tw.target);

    restore();

    await Deno.writeTextFile(output, css);
  })
  .parse(Deno.args);
