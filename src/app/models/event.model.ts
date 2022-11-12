export interface Event {
  title: string;
  teaser: string;
  description: string;
  city: string;
  members?: string[];
  date: Date;
  imageUrl: string;
}
