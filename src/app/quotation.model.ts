import QuotationInfo = namespace.QuotationInfo;

export interface Quotation {
  id: string;
  assurePrincipal?: Assure;
  conjoint?: FamilyPerson;
  enfants?: FamilyPerson[];
  quotationInfo?: QuotationInfo;
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


declare module namespace {


  export interface BrokerCommissions {
    monthly: number;
    yearly: number;
  }

  export interface ClientPrice {
    monthly: number;
    yearly: number;
  }

  export interface QuotationInfo {
    formulas: any;
    isWithholdingThresholdExceeded: boolean;
    maxCommission: number;
    maxLoading: number;
    maxFees: number;
    selectedFees: number;
    selectedLoading: number;
    selectedFormula: number;
    staggering: number;
    selectedOptionnalWarranties: any[];
    commissionType: number;
    healthRateLinear: number;
    healthRateWithholding: number;
    brokerCommissions: BrokerCommissions;
    clientPrice: ClientPrice;
  }
}


