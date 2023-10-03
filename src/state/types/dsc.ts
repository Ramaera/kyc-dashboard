export type DSCType = {
  DscCreatedDate?: string;
  DscExpiryDate?: string;
  userId?: string;
  DSCStatus?: DSCSTATUS;
};

export default DSCType;

enum DSCSTATUS {
  RECEIVED = 'RECEIVED',
  NOT_RECEIVED = 'NOT_RECEIVED'
}
