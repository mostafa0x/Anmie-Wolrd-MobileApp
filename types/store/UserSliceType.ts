export interface UserSliceType {
  userToken: string | null;
  userData: userDataType | null;
}

export interface userDataType {
  fullName: string;
  email: string;
}
