export interface BlogSection {
  heading: string;
  text: string;
}

export interface BlogContent {
  title: string;
  slug: string;
  sections: BlogSection[];
}
