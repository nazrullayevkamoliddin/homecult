import { UserActionTypes } from './cridentials.type';
import { UserType } from '../../types/user';

interface Logout {
  type: UserActionTypes.LOGOUT;
}

interface Login {
  type: UserActionTypes.LOGIN;
  payload: string;
}

export type UserActions = Login | Logout;

export const loginAction = (token: string): UserActions => ({
  type: UserActionTypes.LOGIN,
  payload: token,
});

export const logout = (): UserActions => ({
  type: UserActionTypes.LOGOUT,
});
