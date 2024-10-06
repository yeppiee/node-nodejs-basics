import { cpus } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Worker, isMainThread } from "node:worker_threads";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const performCalculations = async () => {
  const coresCount = cpus().length;
  const pathToWorker = path.join(__dirname, "worker.js");
  const arrayFromCores = Array.from({ length: coresCount });

  const workerPromises = arrayFromCores.map((_, i) => {
    return new Promise((resolve) => {
      const workerData = 10 + i;
      const worker = new Worker(pathToWorker, { workerData });

      worker.on("message", (result) => {
        resolve(result);
      });
    });
  });

  const workerResults = await Promise.all(workerPromises);

  console.log("workerResults", workerResults);
};

await performCalculations();
