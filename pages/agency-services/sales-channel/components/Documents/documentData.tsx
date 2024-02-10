import documentsConfig from '@/config/salesDocumentsConfig';

export const rows = [
  {
    config: documentsConfig.fssai_license,
    status: -1
  },
  {
    config: documentsConfig.gst_certificate,
    status: -1
  },
  {
    config: documentsConfig.pancard,
    status: -1
  },

  {
    config: documentsConfig.cancelled_cheque,
    status: -1
  }
];

const RemoveError = () => {
  return <div>RemoveError</div>;
};

export default RemoveError;
