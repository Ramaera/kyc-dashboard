import AgreementPages from './AgreementPages';
import MainPage from './Pages/MainPage';

const AgreementDetails = () => {
  return (
    <>
      <div
        style={{
          height: '100%',

          //   backgroundColor: 'red',
          color: 'black',
          overflowY: 'auto',
          borderWidth: 2,
          borderColor: 'gray',
          padding: 20
        }}
      >
        <AgreementPages />
      </div>
    </>
  );
};
export default AgreementDetails;
