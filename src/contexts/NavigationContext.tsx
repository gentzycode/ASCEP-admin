import { ReactNode, createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface NavigationContextrops {
  topBarComponents: ReactNode | null;
  SetTopBarComponents: React.Dispatch<React.SetStateAction<ReactNode | null>>;
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSidebar: () => void;
  openMobileNav: boolean;
  setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileNav: () => void;
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  activeModule: string;
  setActiveModule: React.Dispatch<React.SetStateAction<string>>;
  location: LocationParams;
  breadcrumbs: Breadcrumb[];
  setBreadcrumbs: React.Dispatch<React.SetStateAction<Breadcrumb[]>>;
}
const NavigationContext = createContext({} as NavigationContextrops);
interface NavigationContextroviderProps {
  children: ReactNode;
}

2;

export interface LocationParams {
  pathname: string;
  state: string;
  search: string;
  hash: string;
  key: string;
}

const NavigationContextrovider = ({
  children,
}: NavigationContextroviderProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);
  const [openMobileNav, setOpenMobileNav] = useState<boolean>(false);
  const [activeModule, setActiveModule] = useState<string>("");
  const toggleSidebar = () => setOpenSidebar(!openSidebar);
  const toggleMobileNav = () => setOpenMobileNav(!openMobileNav);
  const [activeLink, setActiveLink] = useState<string>("");
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);
  const [topBarComponents, SetTopBarComponents] = useState<ReactNode | null>(
    null
  );

  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname.split("/").slice(0, 3).join("/"));
    setActiveModule(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <NavigationContext.Provider
      value={{
        openSidebar,
        setOpenSidebar,
        toggleSidebar,
        openMobileNav,
        setOpenMobileNav,
        toggleMobileNav,
        activeLink,
        setActiveLink,
        activeModule,
        setActiveModule,
        location,
        breadcrumbs,
        setBreadcrumbs,
        topBarComponents,
        SetTopBarComponents,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);

export default NavigationContextrovider;
