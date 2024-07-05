export type Role = "admin" | "shopkeeper" | "user";

export interface User {
  uid: string;
  email: string;
  role: Role;
}
