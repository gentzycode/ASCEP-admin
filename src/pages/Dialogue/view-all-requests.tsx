import { DialogueRequests } from "@/components/Dialogue";
import { useNavigationContext } from "@/contexts/NavigationContext";
import { useEffect } from "react";

export default function ViewAllRequestsPage() {
  const { setBreadcrumbs, activeLink } = useNavigationContext();

  useEffect(() => {
    setBreadcrumbs([
      {
        label: "main",
        link: "/main",
      },
      {
        label: "dialogue",
        link: "/dialogue",
      },
      {
        label: "view all",
        link: "/dialogue/view-all",
      },
    ]);
  }, [activeLink]);
  return (
    <div className="page-wrapper">
      <DialogueRequests />
    </div>
  );
}
