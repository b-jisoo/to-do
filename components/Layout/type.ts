import { UserAccount } from "@/recoil/user";

export interface IHeaderProps {
  auth: UserAccount | null;
  onLogout: () => void;
}
