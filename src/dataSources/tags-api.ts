import { Tag } from "@/graphql-types";
import { getEnvOrFail } from "../utils";
import { RESTDataSource } from "apollo-datasource-rest";
import { ITagsAPI, TagDTO } from "@/types";

export default class TagsAPI extends RESTDataSource implements ITagsAPI {
  constructor() {
    super();
    this.baseURL = getEnvOrFail("API_URL") as string;
  }

  async getTags(page: number, per_page: number): Promise<Tag[]> {
    const data = await this.get<TagDTO[]>("/tags", {
      page,
      per_page,
    });

    return data.map((tag) => ({
      id: tag.id.toString(),
      name: tag.name,
      textColor: tag.text_color_hex,
      backgroundColor: tag.bg_color_hex,
    }));
  }
}
