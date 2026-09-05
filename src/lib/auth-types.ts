export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "customer";
  status?: "active" | "disabled";
}
