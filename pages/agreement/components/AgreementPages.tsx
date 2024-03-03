import MainPage from './Pages/MainPage';
import OtherPage from './Pages/OtherPage';

const AgreementPages = () => {
  return (
    <>
      <div
        style={{
          height: '100%',
          width: '80%',
          padding: 40,
          backgroundColor: 'white'
        }}
      >
        <MainPage />
        <OtherPage />
      </div>
    </>
  );
};

export default AgreementPages;
