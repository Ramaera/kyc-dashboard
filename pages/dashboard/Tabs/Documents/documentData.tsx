import documentsConfig from '@/config/documentsConfig';

export const rows = [
  {
    config: documentsConfig.avatar,
    status: -1
  },
  {
    config: documentsConfig.aadhar,
    status: -1
  },
  {
    config: documentsConfig.pancard,
    status: -1
  },
  {
    config: documentsConfig.passbook,
    status: -1
  },
  {
    config: documentsConfig.voterId,
    status: -1,
    isOptional: true
  },
  {
    config: documentsConfig.driving_license,
    status: -1,
    isOptional: true
  }
];

const RemoveError = () => {
  return <div>RemoveError</div>;
};

export default RemoveError;
