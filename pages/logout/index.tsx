import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { logout } from '@/state/slice/userSlice';

function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '90vh',
        alignItems: 'center'
      }}
    >
      <h2>Logging Out</h2>
      <img src="" />
    </div>
  );
}
export default Logout;
