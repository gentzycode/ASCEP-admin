import {
  Header,
  MobileNavigation,
  SideNavigation,
} from "@/components/layout-components";
import { Toaster } from "@/components/ui/toaster";
import NavigationContextrovider from "@/contexts/NavigationContext";
import { useAuthContext } from "@/providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

export default function MainLayout() {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) return <Navigate to="/auth/login" />;
  return (
    <NavigationContextrovider>
      <div className="h-screen ">
        <MobileNavigation />
        <div className="w-full md:flex">
          <SideNavigation />
          <div className="flex-1 w-full max-w-[1440px] md:flex-auto md:h-screen md:overflow-y-scroll ">
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
      <Toaster />
    </NavigationContextrovider>
  );
}
