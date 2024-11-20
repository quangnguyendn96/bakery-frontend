import {fetchWithAuth} from "./client-side/app";
import {IUser} from "../types/UserType";

export const getUsers = async (): Promise<IUser[]> => {
  return fetchWithAuth<IUser[]>("/account/get-user");
};
