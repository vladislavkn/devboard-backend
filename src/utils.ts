export const getEnvOrFail = (name: string) => {
  if (process.env.hasOwnProperty(name)) return process.env[name];
  throw new Error(`Env variable "${name}" should be set!`);
};
