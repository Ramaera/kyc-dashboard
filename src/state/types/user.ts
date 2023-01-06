import DocumentType  from "./document";
import NomineeType from "./nominee";

   type UserType = {
    membership?: Membership;
    alternate_mobile_number?:string
    createdAt: string
    date_of_birth?: String
    demat_account?: String
    email?:String
    father_or_husband_name?:String
    id?:String
    mobile_number?:String
    name?:String
    pw_id?:String
    rm_id?:String
    updatedAt?:String
    password?:String
    nominee?:NomineeType | undefined
    documents?:[DocumentType] | []
  }

  enum Membership {
    BASIC="BASIC",
    ADVANCE="ADVANCE"
  }


  export default UserType
