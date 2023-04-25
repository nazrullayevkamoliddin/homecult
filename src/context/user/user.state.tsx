import React from 'react';
import { UserActions } from './user.action';
import useUserReducer, { Account } from './user.reducer';

interface UserContext extends Account {
  dispatch: React.Dispatch<UserActions>;
}

const UserCtx = React.createContext<UserContext>({} as UserContext);

const UserProvider: React.FC = ({ children }) => {
  const [userState, dispatch] = useUserReducer();
  const stateValues = { dispatch, ...userState };

  return <UserCtx.Provider value={stateValues}>{children}</UserCtx.Provider>;
};

const useCollectUser = () => {
  const context = React.useContext(UserCtx);

  if (context === undefined) {
    throw new Error('useCollectUser must be used within a UserProvider');
  }

  return context;
};

export { UserProvider, useCollectUser };
