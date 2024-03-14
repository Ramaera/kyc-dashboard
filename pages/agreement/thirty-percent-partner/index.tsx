import Footer from '@/components/Footer';
import SidebarLayout from '@/layouts/SidebarLayout';
import ProtectedSSRoute from 'pages/libs/ProtectedRoute';
import AgreementView from '../components/AgreementView';
import { useAppSelector } from '@/hooks';
import { useQuery } from '@apollo/client';
import { CHECK_AGREEMENT_DATA_STATUS } from '@/apollo/queries/auth';

function Agreement() {
  const user = useAppSelector((state) => state.user?.data);

  const { loading, data, error } = useQuery(CHECK_AGREEMENT_DATA_STATUS, {
    variables: {
      pwid: user?.pw_id
    }
  });

  const checkStatusComplete = data?.checkAgreementDataStatus?.isCompleted;

  return (
    <ProtectedSSRoute>
      <AgreementView />
      <Footer />
    </ProtectedSSRoute>
  );
}

Agreement.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Agreement;
