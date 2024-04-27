//File that manages user authentication (not implemented due to time)
import { useFrappeAuth } from 'frappe-react-sdk'

export const MyAuthComponent = () => {
    const {
      currentUser,
      isValidating,
      isLoading,
      login,
      logout,
      error,
      updateCurrentUser,
      getUserCookie,
    } = useFrappeAuth();
  
    if (isLoading) return <div>loading...</div>;
  
    // render user
    return (
      <div>
        {currentUser}
        <button onClick={() => login('Administrator', 'frappe123')}>Login</button>
        <button onClick={logout}>Logout</button>
        <button onClick={updateCurrentUser}>Fetch current user</button>
      </div>
    );
  };