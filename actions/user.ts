import { authState, UserAccount, userAccountState } from "@/recoil/user";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

export const useUserAction = () => {
  const [users, setUsers] = useRecoilState(userAccountState);
  const [auth, setAuth] = useRecoilState(authState);
  const router = useRouter();

  const login = (inputs: UserAccount) => {
    const { email, password } = inputs;
    const user = users.find(
      (p) => p.email === email && p.password === password
    );
    if (!user) return alert("아이디 또는 비밀번호가 일치하지 않습니다 ");

    localStorage.setItem("user", JSON.stringify(user));
    setAuth(user);
    router.push("http://localhost:3000/");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuth(null);
    router.push("/auth/login");
  };

  const singUp = (inputs: UserAccount) => {
    setUsers([...users, inputs]);
    router.push("/auth/login");
  };
  /**
   * 이메일 중복 확인하는 함수
   */
  const EmailCheck = (email: string) => {
    return !!users.find((e) => e.email === email);
  };

  return {
    login,
    logout,
    singUp,
    EmailCheck,
  };
};

export default useUserAction;
