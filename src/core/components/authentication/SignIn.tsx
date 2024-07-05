import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mantine/core";
function SignIn() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button type="button" onClick={() => loginWithRedirect()}>
      SignIn
    </Button>
  );
}

export default SignIn;
