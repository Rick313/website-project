export interface Business {
  id: string;
  name: string;
  picture: string;
  content: string;
  desciption: string;
  created_at: Date;
  updated_at: Date;
}

export type BusinessList = Business[];
