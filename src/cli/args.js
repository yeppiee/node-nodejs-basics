const parseArgs = () => {
  const filteredArguments = {};

  for (let i = 0; i < process.argv.length; i += 1) {
    const arg = process.argv[i];
    if (arg.startsWith("--")) {
      filteredArguments[arg] = process.argv[i + 1];
      i += 1;
    }
  }

  const resString = Object.entries(filteredArguments)
    .map(([key, value]) => `${key} is ${value}`)
    .join(", ");

  console.log(resString);
};

parseArgs();
