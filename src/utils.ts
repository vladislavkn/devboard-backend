import jsdom from "jsdom";

export const getEnvOrFail = (name: string) => {
  if (process.env.hasOwnProperty(name)) return process.env[name];
  throw new Error(`Env variable "${name}" should be set!`);
};

export const getDocumentContentHTML = (html: string) => {
  const dom = new jsdom.JSDOM(html);
  return dom.window.document.body.innerHTML;
};

export const getReadableDate = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "short",
}).format;
