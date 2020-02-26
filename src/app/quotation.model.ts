export interface Quotation {
  id: string;
  assurePrincipal: Assure;
  family: Family;
}

export interface Assure {
  dateNaissance: string;
  dateEffet: string;
}

export interface Family {
  conjoint: FamilyPerson;
  enfants: FamilyPerson[];
}

export interface FamilyPerson {
  dateNaissance: string;
  isRegimeSocialDifferent: boolean;
  isDisabled: boolean;
}
