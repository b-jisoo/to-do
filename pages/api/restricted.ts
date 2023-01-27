import { GetServerSidePropsContext } from "next";
import { getToken } from "next-auth/jwt";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export const AuthValidator = async (context: GetServerSidePropsContext) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const token = await getToken(context).then((token) => {
    return Promise.resolve(token);
  });
  if (session) {
    context.res.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};

export default AuthValidator;
