export interface Settings {
  infos: Infos;
}

export interface Infos {
  copyright?: string;
  years?: string;
  owner: Owner;
}

export interface Owner {
  name: string;
  tel?: string;
  email?: string;
  siret?: string;
  adrress?: string;
}
