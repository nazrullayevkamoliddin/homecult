import { UserActionTypes } from './user.type';
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

// export const updateAccessToken = (access: string): UserActions => ({
//   type: UserActionTypes.UPDATE_ACCESS_TOKEN,
//   payload: access,
// });
