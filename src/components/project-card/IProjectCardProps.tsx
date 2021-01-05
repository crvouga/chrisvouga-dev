export interface IProjectCardProps {
  src: string;
  title: string;
  liveSiteUrl: string;
  sourceCodeUrl: string;
  topics: string[];
  languages: {
    [language: string]: number;
  };
  description: string;
}
