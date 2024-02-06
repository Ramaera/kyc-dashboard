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
    shareHoldingType{
      InvestmentType
      allotedShare
      status
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
    kycAgency {
      agencyCode
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
    createdAt
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

export const STAR_OF_THE_WEEK = gql(`

query($EndOfTheWeek: String!,$startOfTheWeek: String!)  {
  starOfTheWeek(
      EndOfTheWeek: $EndOfTheWeek
      startOfTheWeek: $startOfTheWeek
  ) {
      agencyCode
      agencyOwnerName
      users {
          membership
          pw_id
          referralAgencyCode
      }
  }
}
`);

export const VERIFYREFERRAL = gql(`
  mutation VerifyReferralId($ReferralCode:String!){
    getSponserDetails(data:{ReferralCode:$ReferralCode}){
      SponserDetails {
      pw_id
      name
    }
    agencyCode
    }
  }`);

export const SHARE_HOLDER = gql(` 
  query($skip: Int!, $take: Int!, $input: SearchInvestmentType!){
    searchShareHolding(skip: $skip, take: $take, input: $input){
      status
      InvestmentType
      allotedShare
      user{
        pw_id
        name
        membership
      }
    }
  }
  `);

export const SHARE_HOLDER_MEMBERSHIP = gql(`
query($skip: Int!, $take: Int!, $input: SearchInvestmentType!) {
  searchShareHolding(skip: $skip, take: $take, input: $input) {
      status
      InvestmentType
      allotedShare
      user{
        pw_id
        name
        membership
        kyc
      }
    }
  }
  `);

export const TOTAL_SHARE_HOLDERS = gql(`
  query ($skip: Int!, $take: Int!){
    TotalShareholders(skip: $skip, take: $take) {
      InvestmentType
      status
      allotedShare
      user{
        pw_id
        name
        membership
      }
    }
  }
  `);

export const GET_ALL_SHARE_HOLDER = gql(`
query{
  getAllShareHoldersCount{
    TotalAdvanceShareHolder
    TotalBasicShareHolder
    TotalHajipurShareHolder
    TotalShareholders
  }
}
`);

export const GET_AGENCY_PAYMENT = gql(`
query AgencyPayment($agencyCode: String!, $month: Int!, $year: Int!) {
  AgencyPayment(agencyCode: $agencyCode, month: $month, year: $year) {
      agraProjectAmount
      hajipurProjectAmount
      kycAmount
      BasicKycApprovedUser {
        id
        pw_id
        createdAt
        kyc
        name
        membership
    }
    AdvanceKycApprovedUser {
        id
        pw_id
        createdAt
        kyc
        name
        membership
    }
    basicHajipurprojectDocument {
      id
      amount
      createdAt
      status
      user {
          id
          kyc
          membership
          name
          pw_id
      }
    }
    advanceHajipurprojectDocument {
      id
      amount
      createdAt
      status
      user {
          id
          kyc
          membership
          name
          pw_id
      }
    }
    basicAgraprojectDocument {
      id
      amount
      createdAt
      status
      user {
          id
          kyc
          membership
          name
          pw_id
      }
    }
    advanceAgraprojectDocument {
      id
      amount
      createdAt
      status
      user {
          id
          kyc
          membership
          name
          pw_id
      }
    }
  }

}
`);

export const TRANSACTION_TO_WALLET = gql(`
mutation TransactionToWallet($agencyCode: String!, $type: String!,  $amount: Int!, $category: String!, $metaData: [JSONObject!]!) {
  TransactionToWallet(transactionToWallet: { agencyCode: $agencyCode, type: $type,amount: $amount,category:$category,metaData: $metaData }) {
      finalBalance
      id
  }
}`);

export const GET_FINAL_WALLET_BALANCE_OF_AGENCY = gql(`
query GetFinalWalletBalanceOfAgency($agencyCode: String!) {
  GetFinalWalletBalanceOfAgency(agencyCode: $agencyCode) {
    agencyCode
    finalBalance
  }
}`);
export const AGENCY_WALLET_HISTORY = gql(`
query AgencyWalletHistory($agencyCode: String!) {
  AgencyWalletHistory(agencyCode: $agencyCode) {
    agencyCode
    amount
    createdAt
    finalBalance
    type
    category
    metaData
  }
}`);

export const GET_ALL_KYC_REFERRAL = gql(`
query GetAllKycReferral {
  getAllKycReferral {
      agencyCode
      createdAt
      userId
      id
  }
}
`);
export const GET_ALL_PROJECT_REFERRAL = gql(`
query GetAllProjectReferral {
  getAllProjectReferral {
      agencyCode
      createdAt
      documentId
      id
      updatedAt
      userId
  }
}
`);

export const GET_USER_DETAILS = gql(`
query GetUserDetails ($id:String!){
  getUserDetails(id: $id) {
      pw_id
  }
}
`);

export const GET_DOCUMENT_DETAILS = gql(`
query GetDocumentDetails ($id:String!){
  getDocumentDetails(id: $id) {
    title
    user{
      pw_id
    }
  }
}
`);
export const CREATE_CARD_USER = gql(`

mutation CreateUser (
   $address: [JSONObject!]!
   $metaData: [JSONObject!]!
   $email: String!
   $mobileNumber: String!
   $referralAgencyCode: String!
   $name:String!
    ) {
  CreateUser(
   data: {
    email: $email
    mobileNumber: $mobileNumber
    name: $name
    referralAgencyCode: $referralAgencyCode
    metaData: $metaData
    address: $address
  }
  ) {
    createdAt
    email
    id
    mobileNumber
    name
    referralAgencyCode
    updatedAt
  }
}


`);

export const CARD_USERS_DETAIL = gql(`

query FindCardHoldersInAgency($agencyCode:String!) {
  findCardHoldersInAgency(agencyCode: $agencyCode) {
      createdAt
      email
      id
      mobileNumber
      name
      referralAgencyCode
      updatedAt
  }
}
`);

export const GENERATE_CARD = gql(`

mutation CreateCard(
  $cardHolderId:String!
  $cardType:CARD_TYPE!
  ) {
  createCard(data: { cardHolderId: $cardHolderId, cardType: $cardType }) {
      cardValidity
      cardValue
      isActive
      maxDiscount
      cardNumber
  }
}

`);

export const CREATE_PAYMENT_DOCUMENT = gql(`


mutation CreatePaymentDocument ($cardUserId:String! $myCardId:Int! $title:String! $url:String! $amount:Int! $utrNo:String!) {
  createPaymentDocument(
      createPaymentDocumentInput: {
          cardUserId: $cardUserId
          myCardId: $myCardId
          title: $title
          url: $url
          amount:$amount
          utrNo: $utrNo
      }
  ) {
   title
  }
}
`);

export const UPDATE_PAYMENT_DOCUMENT = gql(`
mutation UpdatePaymentDocument ($cardUserId:String! $myCardId:Int! $id:String! $title:String! $url:String! $amount:Int! $utrNo:String!){
  updatePaymentDocument(
      updatePaymentDocumentInput: {
          amount: $amount
          cardUserId: $cardUserId
          id: $id
          myCardId: $myCardId
          title: $title
          url: $url
          utrNo: $utrNo
      }
  ) {
      amount
      status
      title
      url
      utrNo
  }
}

`);

export const FIND_CARD_OF_A_USER = gql(`


query FindCardOfaUser ($userId:String!) {
  findCardOfaUser(userId: $userId) {
      cardNumber
      cardType
      cardValidity
      cardValue
      id
      isActive
      maxDiscount
      Documents {
        amount
        status
        title
        url
        id
        utrNo
      }
  }
}
`);

export const GET_CARD_USER = gql(`

query CardDetails($cardNumber:String!) {
  CardDetails(cardNumber: $cardNumber) {
      cardNumber
      cardType
      cardValidity
      cardValue
      id
      isActive
      maxDiscount
  }
}

`);
