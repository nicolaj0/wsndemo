export interface Quotation {
  id: string;
  assurePrincipal?: Assure;
  conjoint?: FamilyPerson;
  enfants?: FamilyPerson[];
}

export interface Assure {
  dateNaissance: string;
  dateEffet: string;
}

export interface FamilyPerson {
  dateNaissance: string;
  isRegimeSocialDifferent: boolean;
  isDisabled: boolean;
}
