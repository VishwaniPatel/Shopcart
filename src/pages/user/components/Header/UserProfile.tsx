import { useAuth0 } from "@auth0/auth0-react";
import { Avatar } from "@mantine/core";

const UserProfile = () => {
  const { user } = useAuth0();

  return (
    <>
      {user && (
        <>
          <Avatar src={user.picture} alt="user" radius="xl"></Avatar>
        </>
      )}
    </>
  );
};

export default UserProfile;
