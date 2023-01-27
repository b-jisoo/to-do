export interface IHeaderProps {
  status: "loading" | "authenticated" | "unauthenticated";
  session: Session | null | undefined;
}

interface Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires: string;
}
