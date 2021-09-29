import TagsAPI from "./dataSources/tags-api";

export type DataSources = {
  tagsAPI: TagsAPI;
};

export type Context = {
  dataSources: DataSources;
};
