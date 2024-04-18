export interface Todo {
  id: number;
  content: string;
}

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  route?: string;
  icon?: string;
}
