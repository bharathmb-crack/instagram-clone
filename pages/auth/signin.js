import { getProviders, callbackUrl, signIn } from "next-auth/react";
import { useEffect } from "react";
import Header from "../../components/Header";

export default function SignIn({ providers }) {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      {providers &&
        Object.values(providers).map((provider) => (
          <div
            className="flex flex-col items-center justify-center gap-10 min-h-screen -mt-40"
            key={provider.name}
          >
            <img
              className="w-80 object-contain"
              src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
              alt=""
            />

            <button
              className="bg-blue-500 rounded-md text-white p-2"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
