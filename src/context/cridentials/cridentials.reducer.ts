import { useRouter } from 'next/router';
import { Reducer, useEffect, useReducer } from 'react';
import { UserType } from '../../types/user';
import { getStorage } from '../../utils/local-storage';
import { loadState, saveState } from '../../utils/storage';
import { UserActions } from './credentials.action';
import { UserActionTypes } from './cridentials.type';

export interface Account {
  isLoggedIn: boolean;
  token: string;
}

const initialState: Account = {
  isLoggedIn: loadState('user')?.isLoggedIn ?? false,
  token: loadState('user')?.token ?? '',
};
const userReducer: Reducer<Account, UserActions> = (state: Account, action: UserActions) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      saveState('user', { ...state, token: `Token ${action.payload}`, isLoggedIn: true });
      return { ...state, token: action.payload, isLoggedIn: true };
    case UserActionTypes.LOGOUT:
      saveState('user', { ...initialState });
      return { ...initialState };
    default:
      return state;
  }
};

const useUserReducer = () => useReducer(userReducer, initialState);

export default useUserReducer;
