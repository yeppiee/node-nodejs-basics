import { readFile } from "node:fs/promises";

const read = async () => {
  try {
    const content = await readFile("src/fs/files/fileToRead.txt", "utf8").catch(
      () => {
        throw Error("FS operation failed");
      }
    );
    console.log(content);
  } catch (error) {
    console.log(error);
  }
};

await read();
