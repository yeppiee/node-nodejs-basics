import { EOL } from "node:os";
import { Transform } from "node:stream";

const transform = async () => {
  const reverseTransformStream = new Transform({
    transform: (chunk, _, callback) => {
      callback(null, `${chunk.toString().split("").reverse().join("")}${EOL}`);
    },
  });

  process.stdin.pipe(reverseTransformStream).pipe(process.stdout);
};

await transform();
