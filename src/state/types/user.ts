import DocumentType from './document';
import DSCType from './dsc';
import NomineeType from './nominee';

type UserType = {
  membership?: Membership;
  alternate_mobile_number?: string;
  createdAt: string;
  date_of_birth?: String;
  demat_account?: String;
  email?: String;
  father_or_husband_name?: String;
  id?: String;
  mobile_number?: String;
  name?: String;
  pw_id?: String;
  rm_id?: String;
  isKycAgent: Boolean;
  kyc?: KYCType | undefined;
  updatedAt?: String;
  password?: String;
  nominee?: NomineeType | undefined;
  documents?: [DocumentType] | [];
  DSCDetails?: [DSCType] | [];
  avatar?: String;
  referralAgencyCode?: String;
  Address?: String;
  aadharCardNumber?: String;
  panCardNumber?: String;
  role: ROLE;
};

enum Membership {
  BASIC = 'BASIC',
  ADVANCE = 'ADVANCE'
}
enum ROLE {
  ADMIN = 'ADMIN',
  AGENT = 'AGENT',
  USER = 'USER'
}

enum KYCType {
  ONGOING = 'ONGOING',
  APPROVED = 'APPROVED',
  NOT_INITIALIZED = 'NOT_INITIALIZED',
  REJECTED = 'REJECTED',
  SUBMITTED = 'SUBMITTED'
}

export default UserType;
