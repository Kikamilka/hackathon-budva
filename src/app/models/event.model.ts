export interface Activity {
  id: string;
  title: string;
  teaser: string;
  description: string;
  city?: string;
  members?: string[];
  max_people?: number,
  datetime: string;
  photo: string;
}
