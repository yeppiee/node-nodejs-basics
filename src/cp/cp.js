import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const scriptPath = path.join(__dirname, "files/script.js");

const spawnChildProcess = async (args) => {
  const child = spawn("node", [scriptPath, ...args], {
    stdin: ["inherit", "inherit", "inherit", "ipc"],
  });

  process.stdin.pipe(child.stdin);

  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
};

spawnChildProcess(["a", "b", "c"]);
