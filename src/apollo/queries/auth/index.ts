import { gql } from '@apollo/client';

export const LOGIN = gql(`
mutation AuthUser($pw_id:String!,$password:String!) {
  login(data: { pw_id:$pw_id, password:$password}) {
    accessToken
    user{
     createdAt
     pw_id
    }

    refreshToken
  }
}`);

export const CHANGE_PASSWORD = gql(`
mutation changePassword($oldpassword:String!,$newPassword:String!) {
  changePassword(data: { oldpassword:$oldpassword, newPassword:$newPassword}) {
    name
  }
}`);

export const SIGNUP = gql(`
mutation AuthUser(
  $pw_id: String!
  $membership: Membership!
  $password: String!
  $referralAgencyCode: String
  $aadharCardNumber: String
) {
  signup(
    data: {
      pw_id: $pw_id
      membership: $membership
      password: $password
      referralAgencyCode: $referralAgencyCode
      aadharCardNumber: $aadharCardNumber
    }
  ) {
    accessToken
    user {
      createdAt
      membership
      pw_id
    }
    refreshToken
  }
}
`);

export const RESETPASSWORD = gql(`
mutation forgetPasswordWithPrivateKey($pwId: String!, $newPassword: String!) {
  forgetPasswordWithPrivateKey(
    data: { pwId: $pwId, newPassword: $newPassword }
  ) {
    message
  }
}`);

export const UPDATEUSERDETAILS = gql(`
mutation updateUser(
  $name: String
  $father_or_husband_name: String
  $date_of_birth: String
  $mobile_number: String
  $alternate_mobile_number: String
  $email: String
  $demat_account: String
  $Address: String
  $aadharCardNumber: String
  $panCardNumber: String
) {
  updateUser(
    data: {
      Address: $Address
      aadharCardNumber: $aadharCardNumber
      panCardNumber: $panCardNumber
      name: $name
      father_or_husband_name: $father_or_husband_name
      date_of_birth: $date_of_birth
      mobile_number: $mobile_number
      alternate_mobile_number: $alternate_mobile_number
      email: $email
      demat_account: $demat_account
    }
  ) {
    Address
    aadharCardNumber
    panCardNumber
    updatedAt
    name
    father_or_husband_name
    email
    date_of_birth
    demat_account
    mobile_number
    alternate_mobile_number
  }
}
`);

export const CREATEDOCUMENT =
  gql(`mutation createDocument($title: String!, $url: String!) {
  createDocument(data: { title: $title, url: $url }) {
    title
    url
  }
}`);

export const UPDATEDOCUMENT =
  gql(`mutation updateDocument($id: String!, $title: String!, $url: String!) {
  updateDocument(data: { title: $title, url: $url, id: $id }) {
    title
    url
    id
    status
  }
}`);

export const UPSERTNOMINEE = gql(`
mutation upsertNominee($name: String!, $relationship: String!) {
  upsertNominee(data: { name: $name, relationship: $relationship }) {
    name
    relationship
  }
}`);

export const GetUser = gql(`
query GetUser {
  me {
    aadharCardNumber
    Address
    panCardNumber
    alternate_mobile_number
    createdAt
    referralAgencyCode
    date_of_birth
    membership
    demat_account
    DSCDetails {
      DSCStatus
      DscExpiryDate
      DscCreatedDate
    }
    documents {
      createdAt
      updatedAt
      id
      title
      url
      status
      amount
      utrNo
    }
    nominee {
      id
      name
      relationship
    }
    email
    father_or_husband_name
    id
    kyc
    mobile_number
    name
    pw_id
    rm_id
    updatedAt
  }
}`);

export const GET_ALL_USERS = gql(`
query($skip: Int! $take: Int!) {
  getAllUser(skip:$skip, take:$take) {
  alternate_mobile_number
  createdAt
  date_of_birth
  demat_account
  membership
  documents{
    createdAt
    updatedAt
    id
    title
    url
    userId
    status
    amount
    utrNo
  }
  nominee{
    id
    name
    relationship
  }
  email
  father_or_husband_name
  id
  kyc
  mobile_number
  name
  role
  pw_id
  rm_id
  updatedAt
}
  }
  `);

export const ALL_KYC_USERS = gql(`
query($skip: Int!, $take: Int!, $input: SearchMembershipInput!) {
  allKycUser(skip: $skip, take: $take, input: $input) {
    createdAt
    date_of_birth
    demat_account
    membership
    documents {
     
      title
      
      status
      
    }
   
   
    father_or_husband_name
    id
    kyc
    mobile_number
    name
   
    pw_id
  }
}
`);

export const SEARCH_USERS = gql(`
query($searchTerm:String!){
  searchUsers(input:{searchTerm:$searchTerm})
  {
   alternate_mobile_number
  createdAt
  date_of_birth
  demat_account
  membership
  documents{
    createdAt
    updatedAt
    id
    title
    url
    userId
    status
    amount
    utrNo
  }
  nominee{
    id
    name
    relationship
  }
  email
  father_or_husband_name
  id
  kyc
  mobile_number
  name
  role
  pw_id
  rm_id
  updatedAt
}
}
`);

export const GET_AGENCY_CODE = gql(`
  query($userID: String!) {
  kycAgency(userId: $userID) {
    agencyCode
  }
}
`);
export const GET_ALL_AGENCY_USERS = gql(`
query($agencyCode: String!) {
  GetAllKycAgencyUser(agencyCode: $agencyCode) {
    alternate_mobile_number
    createdAt
    referralAgencyCode
    date_of_birth
    demat_account
    membership
    documents {
      createdAt
    updatedAt
      id
      title
      url
      userId
      status
      amount
      utrNo
    }
    nominee {
      id
      name
      relationship
    }
    email
    father_or_husband_name
    id
    kyc
    mobile_number
    name
    pw_id
    rm_id
    updatedAt
  }
}`);

/* export const GET_ALL_AGENCY_USERS = gql(`
query($agencyCode: String!) {
  GetAllKycAgencyUser(agencyCode: $agencyCode) {
    user {
      alternate_mobile_number
      createdAt
      date_of_birth
      demat_account
      membership
      documents {
        createdAt
    updatedAt
        id
        title
        url
        userId
        status
        amount
      }
      nominee {
        id
        name
        relationship
      }
      email
      father_or_husband_name
      id
      kyc
      mobile_number
      name
      pw_id
      rm_id
      updatedAt
    }
  }
}

  `);
 */
