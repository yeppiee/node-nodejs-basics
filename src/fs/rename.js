import { stat, rename as fsRename, open } from "node:fs/promises";

const rename = async () => {
  try {
    const stats = await stat("src/fs/files/properFilename.md").catch(() => {});

    if (stats) {
      throw Error("FS operation failed");
    }

    await fsRename(
      "src/fs/files/wrongFilename.txt",
      "src/fs/files/properFilename.md"
    ).catch(() => {
      throw Error("FS operation failed");
    });
  } catch (error) {
    console.log(error);
  }
};

await rename();
