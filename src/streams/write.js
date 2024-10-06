import { createWriteStream } from "node:fs";

const write = async () => {
  const writeStream = createWriteStream("src/streams/files/fileToWrite.txt");

  process.stdin.on("data", (chunk) => {
    writeStream.write(chunk);
  });
};

await write();
