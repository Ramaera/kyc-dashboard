import { gql } from '@apollo/client';



// mutation createArticle($title: String, $content: String, $summary: String) {
//     createArticle(title: $title,content: $content,summary: $summary) {
//         content
//         summary
//         title
//     }
// }



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
mutation AuthUser($pw_id:String!,$password:String!) {
  signup(data: { pw_id:$pw_id, password:$password}) {
    accessToken
    user{
     createdAt
     pw_id
    }
    refreshToken
  }
}`);


export const FORGETPASSWORD=gql(`
mutation AuthUser($pw_id:String!){
  passwordresetRequest(data:{pw_id:$pw_id}){
    accessToken
  }
}
`)
