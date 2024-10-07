import { writeFile } from "node:fs/promises";

const create = async () => {
  try {
    try {
      await writeFile("src/fs/files/fresh.txt", "I am fresh and young", {
        flag: "wx",
      });
    } catch (error) {
      throw Error("FS operation failed");
    }
  } catch (error) {
    console.log(error);
  }
};

await create();
