export type UserMembership = 'BASIC' | 'ADVANCE';

export interface User {
  id: string;
  alternate_mobile_number?: String;
  avatar?: String;
  createdAt: String;
  date_of_birth?: String;
  demat_account?: String;
  email?: String;
  father_or_husband_name?: String;
  mobile_number?: String;
  name?: String;
  pw_id?: String;
  rm_id?: String;
  referralAgencyCode?: String;
  updatedAt?: String;
  membership?: Membership;
  documents?: DocumentType;
  kyc?: KYC;
}
export type DocumentType = {
  id: String;
  title: String;
  url: String;
  updatedAt: String;
  createdAt: String;
  amount: String;
  status: String;
};
enum Membership {
  BASIC = 'BASIC',
  ADVANCE = 'ADVANCE'
}
enum KYC {
  APPROVED = 'APPROVED',
  NOT_INITIALIZED = 'NOT_INITIALIZED',
  AGENT_APPROVED = 'AGENT_APPROVED',
  ONGOING = 'ONGOING',
  REJECTED = 'REJECTED',
  SUBMITTED = 'SUBMITTED'
}
