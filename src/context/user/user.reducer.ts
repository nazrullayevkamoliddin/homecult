import { useRouter } from 'next/router';
import { Reducer, useReducer } from 'react';
import { UserType } from '../../types/user';
import { loadState, saveState } from '../../utils/storage';
import { UserActions } from './user.action';
import { UserActionTypes } from './user.type';

export interface Account {
  isLoggedIn: boolean;
  token: string;
}

const initialState: Account = {
  isLoggedIn: loadState('user')?.isLoggedIn ?? false,
  token: loadState('user')?.token ?? '',
};
const userReducer: Reducer<Account, UserActions> = (state: Account, action: UserActions) => {
  const router = useRouter();
  switch (action.type) {
    case UserActionTypes.LOGIN:
      saveState('user', { ...state, token: `Token ${action.payload}`, isLoggedIn: true });
      return { ...state, token: action.payload, isLoggedIn: true };
    case UserActionTypes.LOGOUT:
      saveState('user', {});
      router.push(router.pathname);
      return {
        isLoggedIn: false,
        token: '',
      };
    default:
      return state;
  }
};

const useUserReducer = () => useReducer(userReducer, initialState);

export default useUserReducer;
