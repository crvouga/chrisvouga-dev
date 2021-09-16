import content from "../../content";
import { ProjectDataStore } from "./projects";

export const DataStore = () => {
  return {
    projects: ProjectDataStore(),
    async getContent() {
      return content;
    },
  };
};

export const dataStore = DataStore();
