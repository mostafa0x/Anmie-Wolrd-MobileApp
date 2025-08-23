export interface UserSliceType {
  userToken: string | null;
  userData: userDataType | null;
}

export interface userDataType {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
}
