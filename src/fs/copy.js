import { cp } from "node:fs/promises";

const copy = async () => {
  try {
    await cp("src/fs/files", "src/fs/files_copy", {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (error) {
    throw Error("FS operation failed");
  }
};

await copy();
