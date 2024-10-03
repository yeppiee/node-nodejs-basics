import { readdir, stat } from "node:fs/promises";

const list = async () => {
  const allFilesFolderContent = await readdir("src/fs/files", {
    withFileTypes: true,
  }).catch(() => {
    throw Error("FS operation failed");
  });

  const onlyFiles = allFilesFolderContent.filter((file) => file.isFile());

  const onlyFilesNames = onlyFiles.map((file) => file.name.split(".")[0]);

  console.log(onlyFilesNames);
};

await list();
