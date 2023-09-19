import { gql } from '@apollo/client';

export const UPDATE_BY_ADMIN = gql(`
mutation updateDataByAdmin(
  $id: String!
  $name: String
  $father_or_husband_name: String
  $date_of_birth: String
  $mobile_number: String
  $alternate_mobile_number: String
  $email: String
  $demat_account: String
  $nomineeName: String
  $nomineeRelationship: String
  $documentId: String
  $url: String
  $amount: Int
) {
  updateDataByAdmin(
    data: {
      id: $id
      name: $name
      father_or_husband_name: $father_or_husband_name
      date_of_birth: $date_of_birth
      mobile_number: $mobile_number
      alternate_mobile_number: $alternate_mobile_number
      email: $email
      demat_account: $demat_account
      nomineeName: $nomineeName
      nomineeRelationship: $nomineeRelationship
      documentId: $documentId
      url: $url
      amount: $amount
    }
  ) {
    name
    documents {
      id
      title
      url
      amount
    }
  }
}`);

export const UPDATE_KYC_BY_ADMIN = gql(`
mutation updateStatus($id: String!, $kyc: KYC!) {
  updateStatus(data: { id: $id, kyc: $kyc }) {
    kyc
  }
}`);

export const UPDATE_STATUS_BY_ADMIN = gql(`
mutation updateDocumentStatusByAdmin($id: String!, $status: STATUS!) {
  updateDocumentStatusByAdmin(data: { id: $id, status: $status }) {
    id
    status
  }
}`);

export const GET_ALL_KYC_HANDLER = gql(`
query getAllKycHandler {
  getAllKycHandler{
    userId
    handlerId
    updatedKycStatus
  }
}
`);

export const GET_ALL_AGENCY = gql(`
query{
  AllKycAgency{
    agencyCode
    user{
      id
      name
      referralAgencyCode
      kyc
      membership
      referralAgencyCode
      pw_id
      rm_id
      mobile_number
      email
    }
  }
}
`);

export const GET_NUMBERS = gql(`
query{
  getAllUsersCount{
    totalSubscribers
    totalAgraSubscribers
    totalBasicSubscribers
    totalAdvanceSubscribers
    totalHajipurSubscribers
  }
}
`);
export const GET_RLI = gql(`
query{
  ChangeAmountOfRamaeraLegalInfoTech{name}
}
`);

export const GET_PROJECT_AMOUNTS = gql(`
query{
  getProjectsPayment{
    ProjectAgraAmountReceived
    ProjectHajipurAmountReceived
  }
}
`);
