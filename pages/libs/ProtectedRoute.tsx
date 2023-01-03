
  
  const ProtectedSSRoute = ({children}) => {
    return <>{children}</>

  };
  
  // export async function getServerSideProps() {
  //   const authSession =await  getAuthSession();
  //   if (!authSession) {
  //     return  {
  //       redirect: {
  //         destination: "/login",
  //         // permanent: false,
  //       }}
  //   }
  //   return {
  //     props: {
  //       authenticated: true,
  //     },
  //   };
  // }
  export default ProtectedSSRoute;