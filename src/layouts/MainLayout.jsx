import { useContext, useEffect } from "react";
import { Routes, Route, useNavigate,Navigate} from "react-router-dom";
import { MainRouter } from "../routers";
import { UserContext } from '../context';
import { AuthenticationService } from "../services";
const Wrapper = ({ Component }) => <Component />;
const MainLayout = () => {
const navigate=useNavigate();
const {setCurrentUser}=useContext(UserContext)
useEffect(()=>{
  const isLogdedIn =AuthenticationService.isLoggedIn()
  if(!isLogdedIn){
    navigate(
      `/login?returnUrl=${encodeURIComponent(
        window.location.href.replace(window.location.origin, ''),
      )}`,
    );
  }else setCurrentUser(AuthenticationService.getCurrentUser())
},[navigate,setCurrentUser])

   return(
   <Routes>
    {MainRouter?.map((router, index) => (
      <Route
        key={index}
        path={router.path}
        element={<Wrapper Component={router.component} />}
      />
    
      ))}
      <Route path='/' element={<Navigate replace to='/albums/' />} />

  </Routes>);
};
export default MainLayout;
