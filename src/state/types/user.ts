import DocumentType  from "./document";
import NomineeType from "./nominee";

   type UserType = {
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
    nominee?:NomineeType | undefined
    documents?:[DocumentType] | []
  }


  export default UserType
//   alternate_mobile_number
//   createdAt
//   date_of_birth
//   demat_account
//   documents{
//     id
//     title
//     url
//   }
//   email
//   father_or_husband_name
//   id
//   kyc
//   mobile_number
//   name
//   pw_id
//   rm_id
//   updatedAt