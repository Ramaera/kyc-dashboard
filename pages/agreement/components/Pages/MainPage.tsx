import { View, Text } from '@react-pdf/renderer';

const MainPage = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        gap: 4
      }}
    >
      <Text style={{ marginBottom: 0, color: 'black' }}>
        ADVANCE KYC AGREEMENT
      </Text>
      <Text style={{ marginTop: 0 }}>by and between</Text>
      <Text style={{ marginBottom: 0 }}>RAMAERA INDUSTRIES LIMITED</Text>
      <Text style={{ marginTop: 0 }}>and</Text>
      <Text style={{ marginTop: 0 }}>PUBLIC SHAREHOLDER</Text>
    </View>
  );
};

export default MainPage;
