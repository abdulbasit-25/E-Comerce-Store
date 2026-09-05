export interface SessionUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "admin" | "manager" | "customer";
  status?: "active" | "disabled";
}
