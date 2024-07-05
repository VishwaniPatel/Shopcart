import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export const useRoles = () => {
  const { user, isAuthenticated } = useAuth0();
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    if (isAuthenticated && user) {
      setRoles(user.role || []);
    }
  }, [isAuthenticated, user]);

  return roles;
};
