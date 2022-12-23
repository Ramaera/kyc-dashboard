async function getAuthSession() {
  if(localStorage.getItem("accessToken")){
    return true
  }else{
    return false
  }
  }
  
  const ProtectedSSRoute = ({children}) => {
    return <>{children}</>

  };
  
  export async function getServerSideProps(ctx) {
    const authSession =await  getAuthSession();
    if (!authSession) {
      return  {
        redirect: {
          destination: "/login",
          permanent: false,
        }}
    }
    return {
      props: {
        authenticated: true,
      },
    };
  }
  export default ProtectedSSRoute;