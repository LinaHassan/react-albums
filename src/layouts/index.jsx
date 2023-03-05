import { useLocation, useMatch } from "react-router-dom";
import { UserProvider } from "../context";
import { LoginRouter } from "../routers";
import LoginLayout from "./LoginLayout";
import MainLayout from "./MainLayout";
import { Suspense } from "react";
const isLoginRoute = () => {
  return !!LoginRouter.find((route) => useMatch(route.path));
};

function Layouts() {
  const location = useLocation();
  const isLoginPage = isLoginRoute(location.pathname);
  return (
    <>
      {isLoginPage ? (
        <LoginLayout />
      ) : (
        <Suspense fallback={<div>Loading</div>}>
          <UserProvider>
            <MainLayout />
          </UserProvider>
        </Suspense>
      )}
    </>
  );
}

export default Layouts;
