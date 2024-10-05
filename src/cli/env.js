const parseEnv = () => {
  const filteredEnvs = Object.entries(process.env).filter(([key]) =>
    key.startsWith("RSS_")
  );

  const envsResultString = filteredEnvs.map(
    ([key, value]) => `${key}=${value}`
  );

  console.log(envsResultString.join("; "));
};

parseEnv();
