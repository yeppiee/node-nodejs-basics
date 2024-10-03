import { rm } from "node:fs/promises";

const remove = async () => {
  try {
    await rm("src/fs/files/fileToRemove.txt").catch(() => {
      throw Error("FS operation failed");
    });
  } catch (error) {
    console.log(error);
  }
};

await remove();
