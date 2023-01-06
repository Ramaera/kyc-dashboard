// export default {
//     AADHAR_CARD_FRONT:"aadhar_front",
//     AADHAR_CARD_BACK:"aadhar_back",
//     PASSPORT_SIZE_PHOTO:"passport_size_photo",
//     PAN_CARD:"pancard",
//     PAYMENT_PROOF:"payment_proof",
//     // ADDITIONAL_DOCUMENT:"payment_proof",
//     PASSBOOK:"passbook",
//     DRIVING_LICENSE:"driving_license",
//     VOTER_ID:"voter_id",



// }

export default {
    aadhar: {
        id: "aadhar",
        name:"Aadhar Card",
        
        items: [
            {
                id: "aadhar_front",
                name: "AADHAR Card Front"
            },
            {
                id: "aadhar_back",
                name: "AADHAR Card Back"
            }
        ]
    },
    pancard: {
        
        name:"Pancard",
        items: [
            {
                id: "pancard",
                name: "Pan Card"
            }
        ]
    },
    avatar: {
        name:"Photo",
        items: [
            {
                id: "avatar",
                name: "Passport Size Photo"
            }
        ]
    },

    voterId: {
        id:"voterId",
        name:"Voter Id Card",
        items: [
            {
                id: "voterid_front",
                name: "Voter Id Front"
            },
            {
                id: "voterid_back",
                name: "Voted Id Card Back"
            }
        ]
    },
    passbook: {
        name:"Passbook",
        id: "passbook",

        items: [
            {
                id: "passbook",
                name: "Bank Passbook"
            },

        ]
    },
    payment_proof: {
        name:"Payment Proof",
        id: "payment_proof",


        items: [
            {
                id: "payment_proof",
                name: "Payment Proof"
            },

        ]
    },
    

    driving_license: {
        name:"Driving License",
        id:"driving_license",
        items: [
            {
                id: "driving_license_front",
                name: "Driving License Front"
            },
            {
                id: "driving_license_back",
                name: "Driving License Back"
            }
        ]
    },
    nominee_aadhar: {
        name:"Nominee Aadhar",
        
        items: [
            {
                id: "nominee_aadhar_front",
                name: "AADHAR Card Front"
            },
            {
                id: "nominee_aadhar_back",
                name: "AADHAR Card Back"
            }
        ]
    },
    demat_document: {
        name:"Demat Document",
        id:"demat_document",
        items: [
            {
                id: "demat_document",
                name: "Demat Document"
            },
            
        ]
    }


}