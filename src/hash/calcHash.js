import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";

const calculateHash = async () => {
  const hash = createHash("sha256");
  const readStream = createReadStream(
    "src/hash/files/fileToCalculateHashFor.txt"
  );

  readStream
    .on("data", (chunk) => {
      hash.update(chunk);
    })
    .on("end", () => {
      console.log(hash.digest("hex"));
    });
};

await calculateHash();
