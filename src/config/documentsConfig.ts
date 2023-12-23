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
    id: 'aadhar',
    name: 'Aadhar Card',
    status: '',
    items: [
      {
        id: 'aadhar_front',
        name: 'AADHAR Card Front',
        status: ''
      },
      {
        id: 'aadhar_back',
        name: 'AADHAR Card Back',
        status: ''
      }
    ]
  },
  pancard: {
    id: 'pancard',
    name: 'Pancard',
    status: '',
    items: [
      {
        id: 'pancard',
        name: 'Pan Card',
        status: ''
      }
    ]
  },
  avatar: {
    id: 'photo',
    name: 'Photo',
    status: '',
    items: [
      {
        id: 'avatar',
        name: 'Passport Size Photo',
        status: ''
      }
    ]
  },

  voterId: {
    id: 'voterId',
    name: 'Voter Id Card',
    status: 'Not Uploaded',
    items: [
      {
        id: 'voterid_front',
        name: 'Voter Id Front',
        status: ''
      },
      {
        id: 'voterid_back',
        name: 'Voted Id Card Back',
        status: ''
      }
    ]
  },
  passbook: {
    name: 'Passbook  or Bank Statement',
    id: 'passbook',
    status: 'Not Uploaded',
    items: [
      {
        id: 'passbook',
        name: 'Bank Passbook Or Bank Statement',
        status: 'Not Uploaded'
      }
    ]
  },
  payment_proof: {
    name: 'Payment Proof',
    id: 'payment_proof',
    status: 'Not Uploaded',

    items: [
      {
        id: 'payment_proof',
        name: 'Payment Proof'
      }
    ]
  },
  agency_payment_proof: {
    name: 'Agency Payment Proof',
    id: 'agency_payment_proof',
    status: 'Not Uploaded',

    items: [
      {
        id: 'agency_payment_proof',
        name: 'Agency Payment Proof'
      }
    ]
  },
  additional_payment_documents: {
    name: 'Additional Payment Document',
    id: 'additional_payment_doc',
    items: [
      {
        id: 'additional_payment_doc2',
        name: 'Payment Document'
      },
      {
        id: 'additional_payment_doc3',
        name: 'Payment Document'
      },
      {
        id: 'additional_payment_doc4',
        name: 'Payment Document'
      },
      {
        id: 'additional_payment_doc5',
        name: 'Payment Document'
      }
    ]
  },
  to_advance_payment_proof: {
    name: 'To Advance Payment Proof',
    id: 'to_advance_payment_proof',
    status: 'Not Uploaded',

    items: [
      {
        id: 'to_advance_payment_proof',
        name: 'To Advance Payment Proof'
      }
    ]
  },
  to_advance_additional_documents: {
    name: 'To Advance Additional Payment Document',
    id: 'to_advance_additional_payment_doc',
    items: [
      {
        id: 'to_advance_additional_payment_doc2',
        name: 'To Advance Payment Document'
      },
      {
        id: 'to_advance_additional_payment_doc3',
        name: 'To Advance Payment Document'
      },
      {
        id: 'to_advance_additional_payment_doc4',
        name: 'To Advance Payment Document'
      },
      {
        id: 'to_advance_additional_payment_doc5',
        name: 'To Advance Payment Document'
      }
    ]
  },

  driving_license: {
    name: 'Driving License',
    id: 'driving_license',
    status: 'Not Uploaded',
    items: [
      {
        id: 'driving_license_front',
        name: 'Driving License Front',
        status: ''
      },
      {
        id: 'driving_license_back',
        name: 'Driving License Back',
        status: ''
      }
    ]
  },
  nominee_aadhar: {
    name: 'Nominee Aadhar',
    id: 'nominee_aadhar',
    status: 'Not Uploaded',
    items: [
      {
        id: 'nominee_aadhar_front',
        name: 'AADHAR Card Front',
        status: ''
      },
      {
        id: 'nominee_aadhar_back',
        name: 'AADHAR Card Back',
        status: ''
      }
    ]
  },
  demat_document: {
    name: 'Demat Document',
    id: 'demat_document',
    status: 'Not Uploaded',
    items: [
      {
        id: 'demat_document',
        name: 'Demat Document',
        status: ''
      }
    ]
  },

  additional_demat_documents: {
    name: 'Additional Demat Document',
    id: 'additional_demat_documents',
    items: [
      {
        id: 'demat_document_2',
        name: 'Demat Document'
      },
      {
        id: 'demat_document_3',
        name: 'Demat Document'
      },
      {
        id: 'demat_document_4',
        name: 'Demat Document'
      },
      {
        id: 'demat_document_5',
        name: 'Demat Document'
      }
    ]
  },
  project_payment: {
    name: 'Project Payment',
    id: 'project_payment',
    items: [
      {
        id: 'project_payment_1',
        name: 'Payment Document'
      },
      {
        id: 'project_payment_2',
        name: 'Payment Document'
      },
      {
        id: 'project_payment_3',
        name: 'Payment Document'
      },
      {
        id: 'project_payment_4',
        name: 'Payment Document'
      },
      {
        id: 'project_payment_5',
        name: 'Payment Document'
      },
      {
        id: 'project_payment_6',
        name: 'Payment Document'
      },
      {
        id: 'project_payment_7',
        name: 'Payment Document'
      },
      {
        id: 'project_payment_8',
        name: 'Payment Document'
      },
      {
        id: 'project_payment_9',
        name: 'Payment Document'
      },
      {
        id: 'project_payment_10',
        name: 'Payment Document'
      },
      {
        id: 'project_payment_11',
        name: 'Payment Document'
      }
    ]
  }
};
