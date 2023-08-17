import amountToWords from '../utils/amountToWords';

const Certificate = ({ username, membership, digit, description }: any) => {
  return (
    <div style={{ fontSize: '1.6rem', minHeight: '800px' }}>
      <div
        style={{
          backgroundImage: 'url("/certificateAssets/bg.png")',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          padding: '6rem 8rem'
        }}
      >
        <h1
          style={{
            width: '1000px',
            fontSize: '5.6rem',
            color: 'orange',
            textAlign: 'left'
          }}
        >
          RAMAERA INDUSTRIES LTD
        </h1>
        <h2 style={{ fontSize: '2.4rem', padding: ' 2.4rem 0' }}>
          Received From {username}
        </h2>

        <h2 style={{ fontSize: '2.6rem', padding: ' 2rem 0 0 0' }}>
          We have Received the sum of rupees{' '}
          <span style={{ color: 'red' }}>
            {digit} ({amountToWords(digit)} ONLY )
          </span>
          ,
        </h2>
        <h2 style={{ fontSize: '2.6rem', padding: '  0 0 2rem 0' }}>
          {membership === 'BASIC' || membership === 'ADVANCE'
            ? ', For Your '
            : ', For '}
          <p style={{ color: '#1FAE47' }}>{membership}</p>
          {(membership === 'BASIC' || membership === 'ADVANCE') && ' KYC'}
        </h2>
        <h3
          style={{
            width: '780px',
            color: 'white',
            fontSize: '2.8rem',
            padding: ' 0.6rem 0',
            backgroundColor: 'green',
            textAlign: 'center',
            border: 'solid 2px black'
          }}
        >
          {description}
        </h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'right',
            flexDirection: 'column',
            margin: ' 0 0 0 600px'
          }}
        >
          <img
            style={{
              width: '200px',
              transform: 'scale(80%)'
            }}
            src="/certificateAssets/stamp1.png"
            alt=""
          />
          <span
            style={{
              width: '200px',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.8rem'
            }}
          >
            Authorized Stamp
          </span>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
