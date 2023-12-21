import { Navigate } from "react-router-dom";
import {
  ForgotPasswordPage,
  LoginPage,
  OTPPage,
  SignupPage,
  TwoFALogin,
} from "./Auth";
import { MainPage } from "./Main";
import { SettingsPage } from "./Settings";
import {
  DebatesHomePage,
  DebatesInfoPage,
  InitiativesHomePage,
  ProposalsHomePage,
  SDGsHomePage,
  PublishDebatePage,
  StartProposalPage,
} from "./Democracy";
import { ActivityPage, DataView, MapView } from "./Response";
import DebateProvider from "@/contexts/DebateContext";
import { ContactUs, LandingPage } from "./Landing";
import ProposalProvider from "@/contexts/ProposalContext";
import { ViewPostPage } from "./Posts";
import { UserDetailsPage, UsersPage } from "./Users";

export const landingPages: RouterType[] = [
  {
    path: "",
    element: <LandingPage />,
    title: "home",
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    title: "home",
  },
];

const routes: RouterType[] = [
  {
    path: "/main",
    element: <MainPage />,
    title: "main",
  },
  {
    path: "/democracy",
    element: <Navigate to="/democracy/debates" />,
    title: "democracy",
  },
  {
    path: "/democracy/debates",
    element: (
      <DebateProvider>
        <DebatesHomePage />
      </DebateProvider>
    ),
    title: "democracy-debates",
  },
  {
    path: "/democracy/debates/:debateId",
    element: <DebatesInfoPage />,
    title: "democracy-debate-info",
  },
  {
    path: "/democracy/debates/publish-debate",
    element: <PublishDebatePage />,
    title: "democracy-debate-start",
  },
  {
    path: "/democracy/proposals",
    element: (
      <ProposalProvider>
        <ProposalsHomePage />
      </ProposalProvider>
    ),
    title: "democracy-proposals",
  },
  {
    path: "/democracy/proposals/start-proposal",
    element: <StartProposalPage />,
    title: "democracy-proposals-start",
  },
  {
    path: "/democracy/initiatives",
    element: <InitiativesHomePage />,
    title: "democracy-initiatives",
  },
  {
    path: "/democracy/sdg",
    element: <SDGsHomePage />,
    title: "democracy-SDGs",
  },
  {
    path: "/response",
    element: <Navigate to="/response/map-view" />,
    title: "response",
  },

  {
    path: "/settings",
    element: <SettingsPage />,
    title: "ssettings",
  },

  {
    path: "/posts/:debateId",
    element: <ViewPostPage />,
    title: "democracy-debate-info",
  },
  {
    path: "/users",
    element: <UsersPage />,
    title: "users",
  },
  {
    path: "/users/:userId",
    element: <UserDetailsPage />,
    title: "users-details",
  },
];

export const responseRoutes: RouterType[] = [
  {
    path: "/response/map-view",
    element: <MapView />,
    title: "Map View",
  },
  {
    path: "/response/data-view",
    element: <DataView />,
    title: "Data View",
  },
  {
    path: "/response/activity",
    element: <ActivityPage />,
    title: "Activity",
  },
  // {
  //   path: `/response/1`,
  //   element: <ViewResponsePage />,
  //   title: "View Response",
  // },
];

export const unauthenticatedRoutes: RouterType[] = [
  {
    path: "signup",
    element: <SignupPage />,
    title: "signup",
  },
  {
    path: "2fa-login",
    element: <TwoFALogin />,
    title: "2fa-login",
  },
  {
    path: "login",
    element: <LoginPage />,
    title: "login",
  },
  {
    path: "otp",
    element: <OTPPage />,
    title: "otp",
  },
  {
    path: "forgot-password",
    element: <ForgotPasswordPage />,
    title: "forgot-password",
  },
];

export default routes;