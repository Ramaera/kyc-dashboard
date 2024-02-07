import { gql } from '@apollo/client';

export const GET_DOCUMENT_FOR_CARD = gql(`
query PaymentDocumetForCard($cardId:Int!) {
    PaymentDocumetForCard(cardId: $cardId) {
        amount
        status
        title
        url
        utrNo
    }
}
`);
