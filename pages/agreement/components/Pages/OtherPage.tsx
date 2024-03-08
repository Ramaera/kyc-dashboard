import { useRef, useState } from 'react';
import EnglishContent from './EnglishContent';
import SignatureCanvas from 'react-signature-canvas';
import handleImageUpload from '@/utils/upload';
import { useQuery } from '@apollo/client';
import { AGREEMENT_DATA } from '@/apollo/queries/auth';
import moment from 'moment';

const OtherPage = () => {
  const [signData, setSignData] = useState(null);
  const signatureCanvasRef = useRef(null);
  const { loading, data, error } = useQuery(AGREEMENT_DATA, {
    variables: {
      PWID: 'RIL-14'
    }
  });

  if (loading) {
    return <div>Loading .......</div>;
  }

  if (error) {
    console.log('err', error);
  }

  const clearSignature = () => {
    signatureCanvasRef.current.clear();
  };

  const saveSignature = async () => {
    const signatureImage = signatureCanvasRef.current.toDataURL();
    setSignData(signatureImage);
    // const data = URL.createObjectURL(signatureImage);
    // console.log(data);

    // Convert data URL to Blob
    const signatureBlob = dataURLtoFile(signatureImage, 'signature');

    const resp = await handleImageUpload(signatureBlob);
    console.log(resp);
  };
  function dataURLtoFile(dataURL, filename) {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  return (
    <div style={{ fontSize: 14, height: 'auto' }}>
      <h3
        style={{
          display: 'flex',
          justifyContent: 'center',
          textDecoration: 'underline',
          fontWeight: 'bold'
        }}
      >
        ADVANCE KYC AGREEMENT
      </h3>
      <p style={{ marginBottom: 20 }}>
        The Advance KYC Agreement, hereinafter referred to as the{' '}
        <span style={{ fontWeight: 'bold' }}>“Agreement”</span> is made on{' '}
        {data.getAgreementData.agreementFieldData['1']}{' '}
        <span style={{ fontWeight: 'bold' }}>(‘‘Execution dateʼʼ)</span> at
        <span style={{ fontWeight: 'bold' }}>
          {' '}
          Noida, Uttar Pradesh (Place).
        </span>
      </p>
      <p>
        अग्रिम केवाईसी एग्रीमेंट, जोकि "एग्रीमेंट" के रूप में
        {data.getAgreementData.agreementFieldData['1']}('निष्पादन तिथि’) को
        नोएडा उत्तर प्रदेश (स्थान) पर संदर्भित किया गया है।
      </p>
      <strong> By and amongst/ समझौते के पक्ष: -</strong>
      <p style={{ marginBottom: 30 }}>
        Mr./Ms. {data.getAgreementData.agreementFieldData['2']} (Name of the
        Subscriber) having PAN{data.getAgreementData.agreementFieldData['3']}{' '}
        S/O {data.getAgreementData.agreementFieldData['4']} and having
        Residential Address at {data.getAgreementData.agreementFieldData['5']},
        hereinafter referred to as the “Subscriber” (which expression shall,
        unless repugnant to the context or meaning thereof, be deemed to means
        and include its successors, nominee and permitted assigns), Of{' '}
        <strong> The FIRST PART</strong>
      </p>
      <p>
        श्री/श्रीमती {data.getAgreementData.agreementFieldData['2']} (कंपनी के
        सदस्या का नाम) जिनका स्थायी खाता संख्या (पैन कार्ड):
        {data.getAgreementData.agreementFieldData['3']} S/O{' '}
        {data.getAgreementData.agreementFieldData['4']} तथा निवास का पता
        {data.getAgreementData.agreementFieldData['5']}.,जिनको "सब्सक्राइबर" (जो
        अभिव्यक्ति, जब तक कि इस संदर्भ या इसके अर्थ के प्रतिकूल न हो, इसका मतलब
        यही माना जाएगा और इसके उत्तराधिकारी, नामांकित और अनुमत असाइनर्स शामिल
        होंगे ) <strong>समझौते के लिए पहली पार्टी</strong> के रूप में संदर्भित
        किया गया है,
      </p>
      <strong>And/ और</strong>
      <p style={{ marginBottom: 20 }}>
        Ramaera Industries Limited a Company incorporated under the Companies
        Act, 2013 having{' '}
        <strong>
          {' '}
          CIN: U74110UP2022PLC168553 and having its registered office H-150,
          Sector 63, Noida, Gautam Buddha Nagar, Uttar Pradesh-201301,{' '}
        </strong>
        is represented by the Managing Director (Mr. Devendra Kumar Mishra)
        (hereinafter referreed as “Authorised Person”) duly authorized by MD
        dated {data.getAgreementData.agreementFieldData['6']} hereinafter
        referred to as
        <strong>“Ramaera/Company” </strong>(which expression shall, unless
        repugnant to the context or meaning thereof, be deemed to means and
        include its successors and permitted assigns), Of The SECOND PART.
        <br /> The Company and the Subscriber shall individually be referred to
        as <strong>“Party” </strong>and collectively as the{' '}
        <strong>“Parties”.</strong>
      </p>
      <p style={{ marginBottom: 110 }}>
        <strong>रामाएरा इंडस्ट्रीज लिमिटेड </strong>,कंपनी जो कंपनी अधिनियम,
        2013 के तहत निगमित हुई है, जिसका
        <strong> CIN: U74110UP2022PLC168553 </strong>है और पंजीकृत कार्यालय{' '}
        <strong>
          H-150, सेक्टर 63, नोएडा, गौतम बुद्ध नगर, उत्तर प्रदेश -201301
        </strong>{' '}
        है, तथा इसका प्रतिनिधित्व बोर्ड के रेसोलुशन द्वारा दिनांक{' '}
        {data.getAgreementData.agreementFieldData['6']}
        विधिवत अधिकृत श्री देवेंद्र कुमार मिश्रा कर रहे हैं। इनको{' '}
        <strong>" रामाएरा /कंपनी" </strong> (जो अभिव्यक्ति, जब तक कि संदर्भ या
        उसके अर्थ के प्रतिकूल न हो, इसका अर्थ समझा जाएगा और इसमें इसके
        उत्तराधिकारी और अनुमत समनुदेशिती शामिल हैं) ,को{' '}
        <strong>समझौते के लिए दूसरी पार्टी</strong>के रूप में संदर्भित किया गया
        हैI <br />
        कंपनी और सब्सक्राइबर को व्यक्तिगत रूप से <strong> "पार्टी"</strong> और
        सामूहिक रूप से
        <strong>"पार्टियाँ"</strong> कहा जाएगा।
      </p>
      <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
        Definition:{' '}
      </p>
      <ol>
        <li style={{ marginBottom: 30 }}>
          <strong>“Articles”</strong> means the Articles of Association of the
          Company; <br />
          "आर्टिकल" का अर्थ है कंपनी के संस्था के अंतर्नियम;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Agreement”</strong> means a mutual contract entered between
          the Company and the Subscriber upon agreed terms and conditions.
          <br />
          "एग्रीमेंट" का अर्थ है सहमत नियमों और शर्तों पर कंपनी और निवेशक के बीच
          एक पारस्परिक अनुबंध।
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Board of Directors”</strong>means in the context of company
          that a group of directors in the organization.
          <br />
          बोर्ड ऑफ़ डायरेक्टर्स - कंपनी के संबंध में बोर्ड ऑफ़ डायरेक्टर्स का अर्थ
          है कंपनी के डायरेक्टर्स का सामूहिक निकाय।
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Business”</strong> means manufacture, distribution and sale
          of Fast-Moving Consumer Goods (“FMCG”) such as Spices, Noodles,
          Toothpaste, Edible Oil, Flour and such other similar business as the
          Company may undertake from time to time;
          <br />
          "बिजनेस" का अर्थ है फास्ट मूविंग कंज्यूमर गुड्स ("एफएमसीजी") जैसे
          मसाले, नूडल्स, टूथपेस्ट, खाद्य तेल, आटा और इसी तरह के अन्य व्यवसाय का
          निर्माण, वितरण और बिक्री, जिसे कंपनी समय-समय पर कर सकती है;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Business Day”</strong> means any day other than a Sunday or
          any days on which commercial banks in India are closed under the
          applicable Law or action of any Governmental Authority;; <br />
          "बिजनेस डे " का अर्थ है रविवार और जिस दिन भारत में वाणिज्यिक बैंक लागू
          कानून या किसी सरकारी प्राधिकरण की कार्रवाई के तहत बंद रहते हैं;को
          छोड़कर कोई भी दिन,
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Companies Act”</strong>means the Companies Act, 2013, as
          amended from time to time;
          <br />
          "कंपनी एक्ट " का अर्थ कंपनी अधिनियम, 2013 है, जो समय-समय पर संशोधित
          होता है;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Company”</strong> means the Ramaera Industries Limited having
          its registered office at H-150, Sector – 63, Noida, Gautam Buddha
          Nagar, Uttar Pradesh – 201301. <br />
          "कपनी" का अर्थ है रमेरा इंडस्ट्रीज लिमिटेड जिसका पंजीकृत कार्यालय
          एच-150, सेक्टर - 63, नोएडा, गौतम बुद्ध नगर, उत्तर प्रदेश - 201301 में
          है।
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Directors”</strong> mean the directors on the Board and
          “Director” has the corresponding meaning;
          <br />
          "डायरेक्टर्स" का अर्थ बोर्ड के निदेशकों से हैं और जिसका अर्थ "निदेशक"
          के अनुरूप है ;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Equity Shares”</strong> means the equity shares of the
          Company having a Face value of Rs 10/-; <br />
          "इक्विटी शेयर" का अर्थ है कंपनी के हिस्सेदारी शेयर जिनका अंकित मूल्य
          10/- रुपये (केवल दस रुपये) है;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Financial Statements”</strong> means the audited financial
          statements of the Company.
          <br />
          "फाइनेंसियल स्टेटमेंट " का अर्थ है कंपनी के लेखापरीक्षित वित्तीय
          विवरण।
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Governmental Authority”</strong> means any (a) national,
          state, local, municipal, foreign, or other government, (b)
          governmental or quasi-governmental authority of any nature (including
          any governmental agency, branch, department, or other entity and any
          court or other tribunal) or (c) body exercising or entitled to
          exercise, any administrative, executive, judicial, quasi-judicial,
          legislative, police, administrative, regulatory or taxing authority or
          power of any nature;
          <br />
          "गवर्नमेंटल अथॉरिटी " का अर्थ है कोई भी (अ) राष्ट्रीय, राज्य, स्थानीय,
          नगरपालिका, विदेशी या अन्य सरकारी, (ब) किसी भी प्रकृति का सरकारी या
          अर्ध-सरकारी प्राधिकरण (किसी भी सरकारी एजेंसी, शाखा, विभाग या अन्य
          संस्था सहित और कोई भी अदालत या अन्य न्यायाधिकरण) या (स) किसी भी
          प्रशासनिक, कार्यकारी, न्यायिक, अर्ध-न्यायिक, विधायी, पुलिस, प्रशासनिक,
          नियामक या कर लगाने वाले प्राधिकरण या किसी भी प्रकृति की शक्ति का
          प्रयोग या प्रयोग करने का हकदार निकाय;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“KYC”</strong> the abbreviation stands for Know your Customer,
          which is implies on the information provided to the company by the
          share subscriber to prove his legal self. <br />
          "केवाईसी" का संक्षिप्त नाम नो योर कस्टमर है, जिसका तात्पर्य शेयर
          ग्राहक द्वारा अपनी कानूनी पहचान साबित करने के लिए कंपनी को प्रदान की
          गई जानकारी से है।
        </li>
        <li style={{ marginBottom: 30 }}>
          {/* todo */}
          <strong>“Sale Shares”</strong> means Rs
          {data.getAgreementData.agreementFieldData['7']} equity shares, of face
          value and quantity.
          <br />
          "बिक्री शेयरों" का अर्थ अंकित मूल्य और मात्रा के रुपये{' '}
          {data.getAgreementData.agreementFieldData['7']} इक्विटी शेयर हैं।
          "आर्टिकल" का अर्थ है कंपनी के संस्था के अंतर्नियम;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“ADVANCE KYC AMOUNT”</strong> means the Subscription amount
          subscribed by the subscriber. ; <br />
          "अग्रिम केवाईसी राशि" का अर्थ ग्राहक द्वारा ली गई सदस्यता राशि है।
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Subscriber cum net profit margin partner”</strong> means an
          individual person or any other person who has subscribed an amount of
          Rs. 1,00,000 or more (Rupees One Lakh or more Only) in the Equity
          share of Ramaera Industries Limited. (Hereinafter referred to as “the
          Company”). ; <br />
          "सब्सक्राइबर सह शुद्ध लाभ मार्जिन पार्टनर" का अर्थ एक व्यक्तिगत
          व्यक्ति या कोई अन्य व्यक्ति है जिसने रुपये की राशि की सदस्यता ली है।
          रामाएरा इंडस्ट्रीज लिमिटेड के इक्विटी शेयर में 1,00,000 या अधिक (केवल
          एक लाख रुपये या अधिक)। (इसके बाद इसे "कंपनी" के रूप में संदर्भित किया
          जाएगा)।
        </li>

        <li style={{ marginBottom: 30 }}>
          <strong>“Law”</strong> means any federal, state, local, municipal,
          foreign, international, multinational, constitution, law, statute,
          treaty, rule, regulation, ordinance, code, case law, or principle of
          common law and includes any delegated legislation or a directive of a
          Governmental Authority; <br />
          "लॉ" का अर्थ है कोई भी संघीय, राज्य, स्थानीय, नगरपालिका, विदेशी,
          अंतर्राष्ट्रीय, बहुराष्ट्रीय, संविधान, कानून, क़ानून, संधि, नियम,
          विनियमन, अध्यादेश, कोड, मामला कानून या सामान्य कानून का सिद्धांत और
          इसमें कोई भी प्रत्यायोजित कानून शामिल है या एक सरकारी प्राधिकरण का
          निर्देश;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>““Liability”</strong>includes liabilities, debts, or other
          obligations of any nature, whether known or unknown, absolute,
          accrued, contingent or otherwise, due or to become due or otherwise,
          and whether or not required to be reflected in the Financial
          Statements of the Company;
          <br />
          "लायबिलिटी" में देयताएं, ऋण या किसी भी प्रकृति के अन्य दायित्व शामिल
          हैं, चाहे ज्ञात या अज्ञात, पूर्ण, उपार्जित, आकस्मिक या अन्यथा, देय या
          देय हो या अन्यथा, और कंपनी के वित्तीय विवरणों में परिलक्षित होने की
          आवश्यकता हो या नहीं ;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Memorandum”</strong> means the memorandum of association of
          the Company; <br />
          "मेमोरेंडम" का अर्थ कंपनी के सहयोग का ज्ञापन है;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Ordinary Course of Business”</strong> in relation to any
          action, transaction, or activity of the Company means the carrying out
          or undertaking of such action, transaction, or activity in accordance
          with past practices of the Company in accordance with the Business
          Plan and in each case only to the extent consistent with the
          Transaction Documents and Applicable Law;
          <br />
          "आर्डिनरी कोर्स ऑफ़ बिज़नेस" कंपनी के किसी भी कार्य, लेन-देन या गतिविधि
          के संबंध में "आर्डिनरी कोर्स ऑफ़ बिज़नेस" का अर्थ है व्यवसाय योजना के
          अनुसार और प्रत्येक में कंपनी की पिछली प्रथाओं के अनुसार ऐसी कार्रवाई,
          लेन-देन या गतिविधि करना या उपक्रम करना। मामला केवल लेन-देन दस्तावेजों
          और लागू कानून के अनुरूप होने की सीमा तक
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Profit”</strong> means the net profit of the Company after
          deducting all types of expenses but not limited to (including any
          adjustment or any type of taxes paid to any authority on behalf of the
          Company) from revenue of the Company <br />
          "प्रॉफिट" का अर्थ कंपनी के राजस्व से सभी प्रकार के खर्चों में कटौती के
          बाद कंपनी का लाभ है, लेकिन कंपनी के राजस्व से (कंपनी की ओर से किसी भी
          प्राधिकरण को भुगतान किए गए किसी भी समायोजन या किसी भी प्रकार के करों
          सहित) तक सीमित नहीं है।
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Net profit Sharing Ratio”</strong> means the net profit of
          the Company distributed among the Subscriber as per terms and
          conditions set out in the said Agreement.
          <br />
          "नेट प्रॉफिट शेयरिंग रेशियो" का अर्थ उक्त समझौते में निर्धारित नियमों
          और शर्तों के अनुसार निवेशक के बीच वितरित कंपनी का लाभ है।
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“ROC”</strong> means the relevant Registrar of Companies;
          <br />
          "आर ओ सी " का अर्थ संबंधित कंपनी रजिस्ट्रार है;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Securities”</strong> means the Equity Shares, preference
          shares, debentures, bonds, loans, warrants, options, or other similar
          instruments or securities of the Company that are convertible into or
          exercisable or exchangeable for or which carry a right to subscribe to
          or purchase, Equity Shares or any instrument or certificate
          representing a legal or beneficial ownership interest in Equity
          Shares, including global depository receipts or American depository
          receipts; <br />
          "सिक्योरिटीज" का अर्थ इक्विटी शेयर, वरीयता शेयर, डिबेंचर, बॉन्ड, ऋण,
          वारंट, विकल्प या कंपनी के अन्य समान उपकरण या प्रतिभूतियां हैं जो
          परिवर्तनीय हैं या प्रयोग करने योग्य या विनिमय योग्य हैं या जो सदस्यता
          लेने या खरीदने का अधिकार रखते हैं , इक्विटी शेयर या वैश्विक डिपॉजिटरी
          रसीदें या अमेरिकी डिपॉजिटरी रसीदें सहित इक्विटी शेयरों में कानूनी या
          लाभकारी स्वामित्व हित का प्रतिनिधित्व करने वाला कोई उपकरण या
          प्रमाणपत्र;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Shareholder”</strong> means any Person who owns the
          Securities;
          <br />
          "शेयर होल्डर" का अर्थ किसी भी व्यक्ति से है जो प्रतिभूतियों का मालिक
          है;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Share Capital”</strong>means the issued and fully paid-up
          Equity Share capital of the Company, on a Fully Diluted Basis; <br />
          "शेयर कैपिटल" का अर्थ है पूरी तरह से भुगतान किया हुआ और और कंपनी की
          तरफ से जारी इक्विटी शेयर पूंजी;
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Subscriber”</strong>The Subscriber is any individual person
          or an entity and a person authorized to sign on behalf of such Entity
          or is a duly appointed agent or representative of the Entity and
          hereby warrants.
          <br />
          सब्सक्राइबर- सब्सक्राइबर एक इकाई ("इकाई") है और ऐसी इकाई की ओर से
          हस्ताक्षर करने के लिए अधिकृत व्यक्ति एक विधिवत नियुक्त एजेंट या इकाई
          का प्रतिनिधि है और इसे प्रमाणित करता है।)
        </li>
        <li style={{ marginBottom: 30 }}>
          <strong>“Project Unit “</strong>Means a unit set up by the Company in
          any place in India for the Manufacturing of Fast-Moving Consumer Goods
          (“FMCG”).
          <br />
          प्रोजेक्ट यूनिट - का अर्थ है कंपनी द्वारा भारत में किसी भी स्थान पर
          फास्ट मूविंग कंज्यूमर गुड्स ("एफएमसीजी") के निर्माण के लिए स्थापित की
          गई इकाई। का अर्थ है सभी इकाइयां जहां एफएमसीजी उत्पादों का निर्माण
          कंपनी द्वारा किया जाना है।
        </li>
      </ol>
      <strong>
        WHEREAS
        <br />
        अतएव:
      </strong>
      <ol>
        <li>
          The Subscriber desires to subscribe to the Equity Shares of the
          Company for which the subscriber undertakes to provide complete
          information under this Advance KYC agreement.
          <br />
          सब्सक्राइबर कंपनी के इक्विटी शेयरों की सदस्यता लेना चाहता है जिसके लिए
          सब्सक्राइबर इस एडवांस केवाईसी समझौते के तहत पूरी जानकारी प्रदान करने
          का वचन देता है।
        </li>
        <li>
          The Subscriber wishes to subscribe for{' '}
          {data.getAgreementData.agreementFieldData['8']}(In figures) (
          {data.getAgreementData.agreementFieldData['9']}) Equity Shares of the
          Company of the face value of Rs. 10, at the subscription price of Rs.
          {data.getAgreementData.agreementFieldData['10']} (In figures) ({' '}
          {data.getAgreementData.agreementFieldData['11']}ONLY) per share.{' '}
          <br />
          सब्सक्राइबर, रामाएरा इंडस्ट्रीज लिमिटेड के{' '}
          {data.getAgreementData.agreementFieldData['8']} इक्विटी शेयरों के लिए
          प्रति शेयर रुपये {data.getAgreementData.agreementFieldData['10']} के
          सब्सक्रिप्शन मूल्य पर सब्सक्राइब करना चाहते हैं।
        </li>
        <li>
          The Subscriber hereby acknowledges that the Company is relying upon
          the accuracy and completeness of the representations, information and
          documents in this Agreement and in compliance with its obligations
          under applicable Laws, Rules and Regulations.
          <br />
          सब्सक्राइबर एतदद्वारा स्वीकार करता है कि कंपनी इस समझौते में
          प्रतिनिधित्व की सटीकता और पूर्णता पर भरोसा कर रही है और लागू कानूनों,
          नियमों और विनियमों के तहत अपने दायित्वों के अनुपालन में है।
        </li>
      </ol>
      <p>
        The Parties have agreed to execute this Agreement in order to stipulate
        the terms and conditions pertaining to the subscription of Investor
        Subscription Shares by the Investors.
        <br />
        निवेशकों द्वारा निवेशक सदस्यता शेयरों की सदस्यता से संबंधित नियमों और
        शर्तों को निर्धारित करने के लिए पार्टियां इस समझौते को निष्पादित करने के
        लिए सहमत हुई हैं।
      </p>
      <p>
        <strong>NOW, THEREFORE,</strong> in consideration of the mutual
        agreements, covenants, representations, and warranties set forth in this
        Agreement, and for other good and valuable consideration, the receipt
        and sufficiency of which is acknowledged by the Parties, the Parties
        hereby agree as follows:
        <br />
        अब, इसलिए, ऊपर दिए गए कारणों के लिए, और कंपनी और सब्सक्राइबर के
        पूर्वगामी और आपसी वादों और अनुबंधों को ध्यान में रखते हुए, और अन्य अच्छे
        और मूल्यवान विचार के लिए, जिसकी प्राप्ति एतदद्वारा स्वीकार की जाती है,
        कंपनी और सब्सक्राइबर्स निम्नलिखित बातों के लिए सहमत करती है :-
      </p>
      <ol type="A">
        <li>
          Such an Entity is an existing entity, and has not been organized or
          reorganized for the purpose of making this subscription <br />
          संस्था एक मौजूदा संस्था है और इसे निवेश को करने के उद्देश्य से संगठित
          या पुनर्गठित नहीं किया गया है;
        </li>
        <li>
          Any and all documents entered into and executed by the entity in
          connection with the Company are valid and binding documents of the
          Entity enforceable in accordance with their terms.
          <br />
          कंपनी के संबंध में दर्ज और निष्पादित किए गए सभी दस्तावेज उनकी शर्तों
          के अनुसार लागू करने योग्य इकाई के वैध और अनिवार्य दस्तावेज हैं।
        </li>
        <li>
          The Company is not promoting any type of direct selling, such as ROI,
          Types of Subscription, Fixed Deposit, Recurring Deposit Accounts, or
          any money monetary subscription center.
          <br />
          कंपनी रामाएरा इंडस्ट्रीज लिमिटेड किसी भी प्रकार की योजना प्रत्यक्ष
          बिक्री, जैसे आरओआई, निवेश के प्रकार, सावधि जमा, आवर्ती जमा खाता और
          किसी भी धन मौद्रिक निवेश केंद्र को बढ़ावा नहीं दे रहा है।
        </li>
      </ol>
      <strong>
        IDENTIFICATION CLAUSE
        <br />
        पहचान खंड
      </strong>
      <ol>
        {/* todo */}
        <li>
          Name of the Subscriber (As per PAN and Adhaar):{' '}
          {data.getAgreementData.agreementFieldData['2']}
          ; [In case of sole proprietorship]: i) Aadhar OR Enrolment No (ii) Pan
          card OR Form 60 (Mandatory) “Officially Valid Documents” i) Passport
          ii) Voter’s Identity Card iii) Driving License iv) NREGA Job Card: NA
          ; * With any one document as proof of business/ activity in the name
          of the proprietary firm. [In case of case of companies] : (i)
          Certificate of Incorporation (ii) Memorandum & Articles of Association
          (iii) Permanent Account Number of the company. (iv) Resolution of the
          Board of Directors to open an account and identification of those who
          have authority to operate the account: Name of the Company: NA CIN: NA
          <br />
          सब्सक्राइबर का नाम (पैन और आधार के अनुसार):{' '}
          {data.getAgreementData.agreementFieldData['2']}.; [एकमात्र स्वामित्व
          के मामले में]: i) आधार या नामांकन संख्या (ii) पैन कार्ड या फॉर्म 60
          (अनिवार्य) "आधिकारिक तौर पर वैध दस्तावेज़" i) पासपोर्ट ii) मतदाता
          पहचान पत्र iii) ड्राइविंग लाइसेंस iv) नरेगा जॉब कार्ड: NA * मालिकाना
          फर्म के नाम पर व्यवसाय/गतिविधि के प्रमाण के रूप में किसी एक दस्तावेज़
          के साथ। [कंपनियों के मामले में]: (i) निगमन प्रमाणपत्र (ii) मेमोरेंडम
          और आर्टिकल्स ऑफ एसोसिएशन (iii) कंपनी का स्थायी खाता नंबर। (iv) खाता
          खोलने के लिए निदेशक मंडल का संकल्प और उन लोगों की पहचान जिनके पास खाता
          संचालित करने का अधिकार है: कंपनी का नाम: NA सीआईएन: NA
          <br />
          Address of the Subscriber/sole proprietorship/ company (As per Adhaar
          Card/ company registration certificate): .
          {data.getAgreementData.agreementFieldData['5']}
          <br />
          अभिदाता/एकमात्र स्वामित्व/कंपनी का पता (आधार कार्ड/कंपनी पंजीकरण
          प्रमाणपत्र के अनुसार): {data.getAgreementData.agreementFieldData['5']}
        </li>
        <li>
          Number of Shares: The Subscriber wishes to subscribe for
          {data.getAgreementData.agreementFieldData['8']}/- (In figures) (
          {data.getAgreementData.agreementFieldData['9']}) Equity Shares of the
          Company of the face value of Rs.{' '}
          {data.getAgreementData.agreementFieldData['7']} at the subscription
          price of Rs.{data.getAgreementData.agreementFieldData['10']} (In
          figures) {data.getAgreementData.agreementFieldData['11']}(TEN RUPEES
          ONLY) per share.
          <br />
          शेयरों की संख्या: सब्सक्राइबर कंपनी के
          {data.getAgreementData.agreementFieldData['8']}/- (आंकड़ों में) (
          {data.getAgreementData.agreementFieldData['9']}) इक्विटी शेयरों की
          सदस्यता लेना चाहता है। रुपये का अंकित मूल्य.{' '}
          {data.getAgreementData.agreementFieldData['7']}, रुपये की सदस्यता कीमत
          पर।{data.getAgreementData.agreementFieldData['10']} (आंकड़ों में)
          {data.getAgreementData.agreementFieldData['11']} (केवल दस रुपये) प्रति
          शेयर।
        </li>
        <li>
          Class of Shares: Specify the class or classes of shares being
          transacted. <br />
          शेयरों की श्रेणी: लेन-देन किए जाने वाले शेयरों की श्रेणी या श्रेणियां
          निर्दिष्ट करें।
        </li>
        <li>
          Purchase Price:
          <br />
        </li>
      </ol>
      <strong>
        TERMS OF SUBSCRIPTION:
        <br />
        सदस्यता की शर्तें
      </strong>
      <ol type="a">
        <li>
          The Subscriber acknowledges that this subscription of the Shares is
          subject to acceptance by the Company. Company reserves the right, in
          whole or in part, in its sole and absolute discretion, to accept or
          reject this:
          <br />
          सब्सक्राइबर स्वीकार करता है कि शेयरों की यह सदस्यता रामाएरा द्वारा
          स्वीकृति के अधीन है। रामाएरा इस सदस्यता को स्वीकार या अस्वीकार करने के
          लिए, अपने एकमात्र और पूर्ण विवेकाधिकार में, पूर्ण या आंशिक रूप से
          अधिकार सुरक्षित रखता है और कंपनी द्वारा लिखित रूप में स्वीकार किए जाने
          तक सदस्यता बाध्यकारी नहीं होगी।)
        </li>
        <li>
          The Subscriber acknowledges that, in order to subscribe for Shares,
          the Subscriber must hereby deliver to the Company: सब्सक्राइबर स्वीकार
          करता है कि, शेयरों की सदस्यता लेने के लिए उन्हें निम्नलिखित दस्तावेजों
          को कंपनी में उपलब्ध करवानी पड़ेगी
          <br />
        </li>
        <li>
          Duly signed copies of this Subscription Agreement, <br />
          इस सदस्यता अनुबंध की विधिवत हस्ताक्षरित प्रतियां
        </li>
        <li>
          Receipt of all funds for the subscription of shares hereunder.
          <br />
          शेयरों की सदस्यता लेने के लिए शेयर्स के आवेदन में भुगतान किए गए राशि
          की रसीद।
        </li>
        <li>
          The closing of the Subscription of Shares hereunder (the “Closing”)
          shall occur as specified in the Act related hereto.
          <br />
          इसके तहत शेयरों की सदस्यता का समापन ("समापन") अधिनियम से संबंधित
          अधिनियम में निर्दिष्ट के अनुसार होगा।
        </li>
        <li>
          Once executed counterpart of the Signature Page attached to this
          Agreement together with appropriate notarization;
          <br />
          एक बार ये निष्पादित हो जाये तो इस समझौते और इससे जुड़े हस्ताक्षर पृष्ठ
          के प्रतिरूप को उचित नोटरीकरण के साथ संलग्न किये जाएं,
        </li>
        <li>
          A cheque, trade draft or media due bill in the amount set forth on the
          Signature Page attached to this Agreement, representing payment in
          full for the Shares desired to be subscribed hereunder, made payable
          in favor of the Company as per the Companies Act, 2013.
          <br />
          सब्सक्राइब किए जाने वाले शेयरों के पूर्ण भुगतान करने एवं कंपनी
          अधिनियम, 2013 के अनुसार, इस समझौते से जुड़े हस्ताक्षर पृष्ठ पर
          उल्लिखित निर्धारित राशि का एक चेक, ट्रेड ड्राफ्ट या मीडिया देय बिल,
          कंपनी के पक्ष में देय है; इस समझौता पत्र के साथ संलग्न किया जाएगा।
        </li>
      </ol>
      <strong>
        REPRESENTATION AND WARRANTY
        <br />
        प्रतिनिधित्व और वारंटी
      </strong>
      <ol type="a">
        <li>
          By executing this Agreement, the Subscriber makes the following
          representations, declarations and warranties to the Company, with the
          intent and understanding that the Company will rely thereon:
          <br />
          इस समझौते को क्रियान्वित करके, सब्सक्राइबर कंपनी को निम्नलिखित
          अभ्यावेदन, घोषणाएँ और वारंटी देता है, कि इस इरादे और समझ के साथ कि
          कंपनी उस पर भरोसा करेगी:
        </li>
        <li>
          The Subscriber has the right to invest in the upcoming project, as per
          the time period notified by the Company.
          <br />
          कंपनी द्वारा अधिसूचित समय अवधि के अनुसार सब्सक्राइबर को आगामी परियोजना
          में निवेश करने का अधिकार है।
        </li>
        <li>
          The Board of Directors of Ramaera has full right to issue the Shares
          at premium after complying the requirement of the Act.
          <br />
          रामाएरा के बोर्ड ऑफ़ डायरेक्टर्स को अधिनियम की आवश्यकता का अनुपालन करने
          के बाद प्रीमियम पर शेयर जारी करने का पूरा अधिकार है ।
        </li>
        <li>
          The Subscriber acknowledges that the Company has not represented,
          guaranteed, or warranted the achievement of any particular financial
          result by the Company.
          <br />
          सब्सक्राइबर स्वीकार करता है कि कंपनी द्वारा किसी विशेष वित्तीय परिणाम/
          या लाभ के उपलब्धि या प्राप्ति केलिए किसी भी प्रकार का गारंटी या वारंटी
          प्रस्तुत नहीं किया गया है।
        </li>
        <li>
          If the Subscriber is purchasing the Shares in a fiduciary capacity for
          another person or entity, including without limitation a corporation,
          partnership, trust, or any other entity, the Subscriber has been duly
          authorized and empowered to execute this Subscription Agreement and
          all other subscription documents. Upon request of the Company, the
          Subscriber will provide true, complete, and current copies of all
          relevant documents creating the Subscriber, authorizing its
          subscription amount in the Company, and/or evidencing the satisfaction
          of the foregoing.
          <br />
          यदि सब्सक्राइबर किसी अन्य व्यक्ति या संस्था के लिए एक प्रत्ययी क्षमता
          में शेयर खरीद रहा है, जिसमें बिना किसी सीमा के एक निगम, साझेदारी,
          ट्रस्ट या कोई अन्य संस्था शामिल है, तो सब्सक्राइबर को इस सदस्यता
          समझौते और अन्य सभी सदस्यता दस्तावेजों को निष्पादित करने के लिए विधिवत
          अधिकृत और सशक्त किया गया है। कंपनी के अनुरोध पर, सब्सक्राइबर,
          सब्सक्राइबर बनाने वाले, कंपनी में अपने निवेश को अधिकृत करने वाले और/या
          पूर्वगामी की संतुष्टि का प्रमाण देने वाले सभी प्रासंगिक दस्तावेजों की
          सही, पूर्ण और वर्तमान प्रतियां प्रदान करेगा।
        </li>
        <li>
          Prior to entering into this Agreement. The subscriber has determined
          that the subscription of the company is a suitable decision, with the
          terms and conditions of Company on the basis of net profit sharing, in
          accordance with the accepted by the subscriber. The details of the
          return based on contribution is mentioned herein below.
          <br />
          इस समझौते में प्रवेश करने से पहले. सब्सक्राइबर ने निर्धारित किया है कि
          कंपनी की सदस्यता एक उपयुक्त निर्णय है, कंपनी के नियमों और शर्तों के
          अनुसार, अनुपात के मुकाबले शुद्ध लाभ साझाकरण के आधार पर। ग्राहक द्वारा
          स्वीकृत योजना. निवेश के आधार पर रिटर्न का विवरण नीचे दिया गया है।
        </li>
      </ol>
      <strong>
        TERMS AND CONDITIONS
        <br />
        नियम और शर्तें
      </strong>
      <ol type="a">
        <li>
          After, execution and signing of the said Agreement the Subscriber
          shall get 30% of the Net profit of the Company on an annual basis as
          on the agreed net profit - sharing ratio set out in the said agreement
          which shall be distributed to the Subscriber (as defined in this said
          Agreement), as per the following conditions:
          <br />
          उक्त समझौते के निष्पादन और हस्ताक्षर के बाद, सब्सक्राइबर को वार्षिक
          आधार पर कंपनी के शुद्ध लाभ का 30% का हिस्सा सहमत शुद्ध लाभ-बंटवारे के
          अनुसार मिलेगा। उक्त समझौते में निर्धारित अनुपात जो सब्सक्राइबर को
          निम्नलिखित शर्तों के अनुसार वितरित किया जाएगा (जैसा कि इस समझौते में
          परिभाषित किया गया है):
          <ol type="I">
            <li>
              The 30 % of the net profit is only applicable in case where the
              amount invested is more than Rs. 1,00,000/- (One Lakh only).
              <br />
              लाभ का 30% केवल उस स्थिति में लागू होता है जहां निवेश की गई राशि
              रुपये 1,00,000/- (केवल एक लाख) से अधिक है। ।
            </li>
            <li>
              The 30% net profit is subject to the company being profitable in
              the fiscal year in case the company fails to achieve the target
              set forth by the company/board, then also board reserves the right
              to the net profit sharing as decided in the agreement.
              <br />
              30% लाभ कंपनी के वित्तीय वर्ष में लाभदायक होने के अधीन है, यदि
              कंपनी/बोर्ड द्वारा निर्धारित लक्ष्य को प्राप्त करने में विफल रहती
              है, तो बोर्ड शुद्ध लाभ साझा करने का अधिकार सुरक्षित रखता है।
              समझौते में तय हुआ.
            </li>
          </ol>
        </li>
        <li>
          The Amount of subscription in equity shares shall not be refundable to
          the Subscribers, the subscriber will be only entitled to profits and
          losses of the Company. <br />
          इक्विटी शेयरों में सदस्यता की राशि सब्सक्राइबर्स को वापस नहीं की
          जाएगी, सब्सक्राइबर केवल योजना के लाभ और हानि के हकदार होंगे।
        </li>
        <li>
          The Amount of subscription is not based on (ROI) return on
          contribution; this amount will not be refunded.
          <br />
          निवेश की राशि निवेश पर वापसी (रिटर्न ऑफ़ इन्वेस्टमेंट) पर आधारित नहीं
          होगी, यह राशि किसी भी हाल में वापस नहीं की जाएगी ।
        </li>
        <li>
          In case of the death of the subscriber, their shares and net profit
          sharing in net profit of Company shall be transferred to their legal
          heirs/nominees and will be passed on to the nominees from one
          generation to another generation, subject to the condition that the
          legal heirs have the valid and legal documents under the laws of
          India.
          <br />
          सब्सक्राइबर की मृत्यु के मामले में, उनके शेयर और कंपनी के लाभ का
          हिस्सा उनके कानूनी उत्तराधिकारियों/नामितों को हस्तांतरित कर दिया जाएगा
          और एक पीढ़ी से दूसरी पीढ़ी तक नामांकित व्यक्तियों को हस्तांतरित कर
          दिया जाएगा, बशर्ते कि कानूनी उत्तराधिकारियों के पास भारत के कानूनों के
          तहत वैध और कानूनी दस्तावेज हैं।
        </li>
        <li>
          The Subscriber cannot transfer their shares to a third party without
          offering the shares to Board or the Company and without the written
          permission of Ramaera ’s Board of Directors. This means, the
          subscriber has no right to transfer the share to anyone without
          permission of Ramaera ’s Board of Directors.
          <br />
          रामाएरा के बोर्ड ऑफ़ डायरेक्टर्स की लिखित अनुमति के बिना सब्सक्राइबर
          अपने शेयर किसी तीसरे पक्ष को हस्तांतरित नहीं कर सकते। इसका अर्थ है,
          सब्सक्राइबर को रामाएरा के बोर्ड ऑफ़ डायरेक्टर्स की अनुमति के बिना शेयर
          को किसी को हस्तांतरित करने का कोई अधिकार नहीं है ।
        </li>
        <li>
          The Shares will be credited to the demat account of the subscriber (on
          the opening of their demat account) which is received by the Company
          {data.getAgreementData.agreementFieldData['12']}from the subscriber.
          <br />
          शेयरों को ग्राहक के डीमैट खाते में (उनके डीमैट खाते के खुलने पर)
          {data.getAgreementData.agreementFieldData['12']}या ग्राहक के माध्यम से
          जमा किया जाएगा।
        </li>
        <li>
          If any subscriber’s sales their shares to a third party without the
          written permission of Ramaera ’s board of directors, the mutual
          agreement will be immediate become null and void.
          <br />
          अगर कोई सब्सक्राइबर रामाएरा के बोर्ड ऑफ़ डायरेक्टर्स की लिखित अनुमति के
          बिना किसी तीसरे पक्ष को अपने शेयर बेचता है, तो उपर्युक्त लिखा आपसी
          समझौता निष्क्रिय (नल्ल और वोइड) हो जाएगा ।
        </li>
      </ol>
      <strong>
        APPLICABLE LAW <br />
        लागू कानून{' '}
      </strong>
      <p style={{ marginBottom: 30 }}>
        This Agreement shall be executed in accordance with and governed by the
        laws applicable to contracts made and wholly performed in the state of
        Uttar Pradesh.
      </p>
      <p style={{ marginBottom: 30 }}>
        यह समझौता राज्य - उत्तर प्रदेश में पूरी तरह से किए गए अनुबंधों पर लागू
        कानूनों के अनुसार निष्पादित और शासित होगा।
      </p>
      <p style={{ marginBottom: 30 }}>
        Any dispute or difference whatsoever arising between the parties out of
        or relating to the construction, meaning, scope, operation or effect of
        this agreement or the validity or the breach thereof shall be settled by
        arbitration in accordance with the Rules of Arbitration of the Indian
        Council of Arbitration and Arbitration and Conciliation Act, 1996 and
        the award made in pursuance thereof shall be binding on the parties.",
        the seat for arbitration will be Kanpur, Uttar Pradesh. Both the parties
        further agree to appoint sole arbitrator as mutually agreed between the
        parties.
      </p>
      <p style={{ marginBottom: 30 }}>
        इस समझौते के निर्माण, अर्थ, दायरे, संचालन या प्रभाव या इसकी वैधता या
        उल्लंघन से संबंधित पक्षों के बीच उत्पन्न होने वाला कोई भी विवाद या मतभेद
        भारतीय परिषद के मध्यस्थता के नियमों के अनुसार मध्यस्थता द्वारा तय किया
        जाएगा। मध्यस्थता और मध्यस्थता और सुलह अधिनियम, 1996 और उसके अनुसरण में
        दिया गया पुरस्कार पार्टियों के लिए बाध्यकारी होगा।", मध्यस्थता की सीट
        कानपुर, उत्तर प्रदेश होगी। दोनों पक्ष आपसी सहमति से एकमात्र मध्यस्थ
        नियुक्त करने पर सहमत हैं। दलों।
      </p>
      <strong>
        EXECUTION IN COUNTERPARTS
        <br />
        समकक्षों में निष्पादन
      </strong>
      <p>
        This Agreement may be executed in one or more counterparts.
        <br /> यह एग्रीमेंट एक या अधिक समकक्षों में निष्पादित किया जा सकता है।
      </p>
      <strong>
        PERSONS BOUND
        <br />
        बाध्य व्यक्ति
      </strong>
      <p>
        This Agreement shall, except as otherwise provided herein, insure to the
        benefit of and be binding on the Company and its successors and assigns
        and on each Subscriber and his respective heirs, executors,
        administrators, successors, and assigns.
        <br />
        यह एग्रीमेंट, यहां प्रदान किए जाने के अलावा, कंपनी और उसके
        उत्तराधिकारियों और समनुदेशितियों और प्रत्येक सब्सक्राइबर और उनके संबंधित
        उत्तराधिकारियों, निष्पादकों, प्रशासकों, उत्तराधिकारियों और समनुदेशितियों
        के लाभ के लिए बाध्य होगा और उनके लिए बाध्यकारी होगा।
      </p>
      <strong>
        NOTICES
        <br />
        सूचना
      </strong>
      <p>
        Any notice or other communication required or permitted hereunder shall
        be in writing and shall be delivered personally, sent by facsimile or
        sent by certified, registered or express mail, postage prepaid, to the
        address of each party set forth herein. Any such notice shall be deemed
        given when delivered.
        <br />
        कोई भी नोटिस या आवश्यक अन्य संचार हमेशा लिखित रूप में होगी और व्यक्तिगत
        रूप से भेजी जाएगी। ये हमेशा फैक्समाइल या प्रमाणित, पंजीकृत या एक्सप्रेस
        मेल, पोस्टेज प्रीपेड द्वारा एवं निर्धारित पार्टी के पते पर भेजी जाएगी।
        ऐसी कोई भी सुचना केवल सुचना के डिलेवरी के उपरांत ही वितरित मानी जाएगी।
      </p>
      <strong>
        REVOCATION OF OFFER
        <br />
        प्रस्ताव का रद्द होना
      </strong>
      <p>
        The Subscriber agrees that whenever Ramaera comes to know about any
        discrepancy /miscommunication/misconduct by subscriber about the affairs
        of Company in any terms, Ramaera reserves the right to terminate or
        revoke such agreement by way of transfer/buyback of shares after
        complying the applicable provision of the Act.
        <br />
        सब्सक्राइबर इस बात से सहमत है कि जब भी रामाएरा को सब्सक्राइबर द्वारा
        कंपनी के मामलों के बारे में किसी भी तरह की विसंगति/गलतफहमी/कदाचार फ़ैलाने
        के बारे में पता चलता है तो रामाएरा के पास लागू प्रावधान/ अधिनियम का पालन
        करने के बाद शेयरों के हस्तांतरण/बायबैक के माध्यम से इस तरह के समझौते को
        समाप्त करने या रद्द करने का अधिकार सुरक्षित है।
      </p>
      <strong>
        MISCELLANEOUS <br /> विविध
      </strong>
      <p>
        This Agreement shall be governed by and executed/construed in accordance
        with the laws of the State of Uttar Pradesh.
        <br />
        यह समझौता उत्तर प्रदेश राज्य के कानूनों के अनुसार शासित और निष्पादित
        होगा।
      </p>
      <p>
        This Agreement constitutes the entire agreement between the Company and
        the Subscriber with respect to the subject matter.
        <br />
        यह अनुबंध विषय वस्तु के संबंध में कंपनी और सब्सक्राइबर के बीच संपूर्ण
        अनुबंध का गठन करता है।
      </p>
      <p>
        Force Majeure: Ramaera shall not be liable for any failure in
        performance of the obligation under this Agreement due to cause beyond
        that Ramaera's reasonable control (including and not limited to any
        pandemic, fire, strike, act or order of public authority, and other acts
        of God) during the pendency of such event.
        <br />
        अप्रत्याशितता- रामाएरा इस समझौते के तहत दायित्व के प्रदर्शन में किसी भी
        प्रकार की विफलता, जो कि रामाएरा के उचित नियंत्रण से परे है, (जैसे- किसी
        भी महामारी, आग, हड़ताल, अधिनियम या सार्वजनिक प्राधिकरण के आदेश, और भगवान
        के अन्य कृत्यों तक सीमित) के लिए उत्तरदायी नहीं होगा।
      </p>
      <strong>
        SUBSCRIBER SIGNATURE <br /> सब्सक्राइबर हस्ताक्षर
      </strong>
      <p>
        The undersigned, desiring to subscribe for the number of Shares of
        Ramaera Industries Limited. (the “Company”) as is set forth below,
        acknowledges that he/she has received and understands the terms and
        conditions of this Agreement attached hereto and that he/she does hereby
        agree to all the terms and conditions contained therein. <br />
        अधोहस्ताक्षरी, रामेरा इंडस्ट्रीज लिमिटेड के शेयरों की संख्या के लिए
        सदस्यता लेने के इच्छुक हैं, जैसा कि नीचे निर्धारित किया गया है, यह
        स्वीकार करता है कि उसने समझौते के नियमों और शर्तों को प्राप्त कर लिया है
        और उसे समझ लिया है और वह उसमें निहित सभी नियमों और शर्तों से सहमत है।
      </p>
      <p>
        IN WITNESS WHEREOF, the undersigned has hereby executed this Advance KYC
        Agreement as of the date set forth below. <br />
        इसके साक्ष्य में, अधोहस्ताक्षरी ने नीचे दी गई तिथि के अनुसार इस समझौते
        को निष्पादित किया है।
      </p>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tr>
          <th style={{ border: '1px solid black' }}>SUBSCRIBER DETAILS</th>
        </tr>
      </table>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black', width: '50%' }}>
            Number of Equity Shares <br /> (Value Rs.{' '}
            {data.getAgreementData.agreementFieldData['10']}/- Per Share)
          </th>
          <th style={{ border: '1px solid black' }}>
            {' '}
            {data.getAgreementData.agreementFieldData['8']}
          </th>
        </tr>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black' }}>
            Name(s) of Subscriber(s)
          </th>
          <th style={{ border: '1px solid black' }}>
            {' '}
            {data.getAgreementData.agreementFieldData['2']}
          </th>
        </tr>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black' }}>
            Signature of Subscriber(s)
          </th>
          <th style={{ border: '1px solid black' }}>
            <img src={signData} width={200} height={40} />
          </th>
        </tr>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black' }}>
            Details of Nominee/legal heirs
          </th>
          <th style={{ border: '1px solid black' }}>
            {' '}
            {data.getAgreementData.agreementFieldData['15']}
          </th>
        </tr>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black' }}>Date</th>
          <th style={{ border: '1px solid black' }}>
            {moment().format('DD-MM-YYYY')}
          </th>
        </tr>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black' }}>Residence Address</th>
          <th style={{ border: '1px solid black' }}>
            {' '}
            {data.getAgreementData.agreementFieldData['5']}
          </th>
        </tr>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black' }}>Pan Number</th>
          <th style={{ border: '1px solid black' }}>
            {' '}
            {data.getAgreementData.agreementFieldData['3']}
          </th>
        </tr>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black' }}>Contact No </th>
          <th style={{ border: '1px solid black' }}>
            {' '}
            {data.getAgreementData.agreementFieldData['16']}
          </th>
        </tr>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black' }}>E-Mail Id</th>
          <th style={{ border: '1px solid black' }}>
            {' '}
            {data.getAgreementData.agreementFieldData['17']}
          </th>
        </tr>
      </table>
      <strong>
        DECLARATION BY THE SUBSCRIBER <br />
        सब्सक्राइबर द्वारा घोषणा
      </strong>
      <p>
        I, hereby declare that I have read and understood the terms and
        conditions of this Agreement. I shall abide with Ramaera Industries
        Limited and the terms and conditions of this Agreement. <br /> मैं,
        एतत्द्वारा घोषणा करता हूं कि मैंने इस समझौते के नियमों और शर्तों को पढ़
        और समझ लिया है। मैं रामेरा इंडस्ट्रीज लिमिटेड और इस समझौते के नियमों और
        शर्तों का पालन करूंगा।
      </p>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Date: {moment().format('DD-MM-YYYY')}
            <br />
          </div>
          <div>
            Subscriber’s Signature:
            <br />
            सब्सक्राइबर के हस्ताक्षर
            <div
              style={{
                borderWidth: 2,
                borderColor: 'black',
                border: 2,
                borderStyle: 'solid'
              }}
            >
              <SignatureCanvas
                penColor="black"
                ref={signatureCanvasRef}
                backgroundColor="white"
                style={{}}
                canvasProps={{
                  width: 250,

                  height: 110,
                  className: 'sigCanvas'
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: 5 }}>
              <button onClick={clearSignature}>Clear Signature</button>
              <button onClick={saveSignature}>Save Signature</button>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Place:{' '}
            <input
              // color="black"

              style={{ backgroundColor: 'white', color: 'black' }}
              type="text"
              placeholder="Type Place Here"
              id="place"
              name="place"
            />
            <br />
          </div>
          <div>
            Name of the Subscriber :{' '}
            {data.getAgreementData.agreementFieldData['2']}
            <br />
            सब्सक्राइबर का नाम
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherPage;
