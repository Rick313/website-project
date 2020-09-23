export type Roles = {
  owner?: boolean;
  admin?: boolean;
  subscriber?: boolean;
  editor?: boolean;
  contributor?: boolean;
  [key: string]: boolean;
};

export interface User {
  id: string;
  name: string;
  email: string;
  roles: Roles;
  created_at: Date;
  updated_ad: Date;
  delete_at: Date;
}
