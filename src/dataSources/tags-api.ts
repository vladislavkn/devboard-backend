import { Tag } from "@/graphql-types";
import { getEnvOrFail } from "../utils";
import { RESTDataSource } from "apollo-datasource-rest";

type TagDTO = {
  id: number;
  name: string;
  bg_color_hex: string;
  text_color_hex: string;
};

export default class TagsAPI extends RESTDataSource {
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
