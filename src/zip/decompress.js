import { createReadStream, createWriteStream } from "node:fs";
import { rm, stat } from "node:fs/promises";
import { createGunzip } from "node:zlib";

const decompress = async () => {
  try {
    await stat("src/zip/files/archive.gz").catch(() => {
      throw Error("Sorry, but archive.gz is not defined");
    });

    const readStream = createReadStream("src/zip/files/archive.gz");
    const writeStream = createWriteStream("src/zip/files/fileToCompress.txt");

    readStream.pipe(createGunzip()).pipe(writeStream);

    await rm("src/zip/files/archive.gz");
  } catch (error) {
    console.log(error);
  }
};

await decompress();
