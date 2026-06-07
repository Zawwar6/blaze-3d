export type Social = {
  instagram: string;
  tiktok: string;
  facebook: string;
  github: string;
  linkedin: string;
  upwork: string;
};

export type Config = {
  title: string;
  description: {
    long: string;
    short: string;
  };
  keywords: string[];
  author: string;
  email: string;
  site: string;
  ogImg?: string;
  social: Social;
};