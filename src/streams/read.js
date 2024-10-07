import { createReadStream } from "node:fs";
import { EOL } from "node:os";

const read = async () => {
  const readStream = createReadStream("src/streams/files/fileToRead.txt", {
    encoding: "utf8",
  });

  readStream.on("data", (chunk) => {
    process.stdout.write(`${chunk}${EOL}`);
  });
};

await read();
