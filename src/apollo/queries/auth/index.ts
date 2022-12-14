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

export const SIGNUP = gql(`
mutation AuthUser($pw_id:String!,$membership:Membership!,$password:String!) {
  signup(data: { pw_id:$pw_id, membership:$membership ,password:$password}) {
    accessToken
    user{
     createdAt
     membership
     pw_id
    }
    refreshToken
  }
}`);

export const RESETPASSWORD=gql(`
mutation forgetPasswordWithPrivateKey($private_key:String!,$newPassword:String!){
  forgetPasswordWithPrivateKey(data:{
    private_key:$private_key,
    newPassword:$newPassword
  }){
    message
  }
}`)








export const UPDATEUSERDETAILS = gql(`
mutation updateUser(
                    $name:String,
                    $father_or_husband_name:String,
                    $date_of_birth:String,
                    $mobile_number:String,
                    $alternate_mobile_number:String,
                    $email:String,
                    $demat_account:String
                    ){
updateUser(data:{
                name:$name,
                father_or_husband_name:$father_or_husband_name,
                date_of_birth:$date_of_birth,
                mobile_number:$mobile_number,
                alternate_mobile_number:$alternate_mobile_number,
                email:$email,
                demat_account:$demat_account
                }){
     updatedAt
     name
     email
     demat_account
 }}`);

export const CREATEDOCUMENT = gql(`
                          mutation createDocument(
                            $title:String!,
                            $url:String!
                          ){
                            createDocument(data:{
                              title:$title
                              url:$url
                            }){
                              title
                              url
                            }
                          }
                          `)


export const UPDATEDOCUMENT = gql(`
                          mutation updateDocument(
                            $id:String!,
                            $title:String!,
                            $url:String!
                          ){
                            updateDocument(data:{
                              title:$title
                              url:$url,
                              id:$id
                            }){
                              title
                              url
                            }
                          }
                          `)


export const UPSERTNOMINEE = gql(`
        mutation upsertNominee(
                      $name:String!,
                      $relationship:String!
                               ){
                      upsertNominee(
                        data:{
                        name:$name,
                        relationship:$relationship
                      }){
                        name
                        relationship
                      }}`)

export const GetUser = gql(`
query GetUser {
 me{
  alternate_mobile_number
  createdAt
  date_of_birth
  membership
  demat_account
  documents{
    id
    title
    url
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
  pw_id
  rm_id
  updatedAt
}
  }
  `);
