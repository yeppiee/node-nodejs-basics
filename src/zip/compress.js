import { createReadStream, createWriteStream } from "node:fs";
import { rm, stat } from "node:fs/promises";
import { createGzip } from "node:zlib";

const compress = async () => {
  try {
    await stat("src/zip/files/fileToCompress.txt").catch(() => {
      throw Error("Sorry, but fileToCompress.txt is not defined");
    });

    const readStream = createReadStream("src/zip/files/fileToCompress.txt");
    const writeStream = createWriteStream("src/zip/files/archive.gz");

    readStream.pipe(createGzip()).pipe(writeStream);

    await rm("src/zip/files/fileToCompress.txt");
  } catch (error) {
    console.log(error);
  }
};

await compress();
