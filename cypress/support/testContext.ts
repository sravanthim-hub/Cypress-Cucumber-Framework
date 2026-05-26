import LoginPage from "../pages/LoginPage";
import MyAccountPage from "../pages/MyAccountPage";
import RegistrationPage from "../pages/RegistrationPage";

export function getContext() {
  return {
    pages: {
      login: LoginPage,
      myAccount: MyAccountPage,
      registration: RegistrationPage

    }
  };
}