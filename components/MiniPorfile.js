import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
const MiniPorfile = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-10 space-x-3">
      <img
        src={session?.user?.image}
        alt=""
        className="h-12 object-contain rounded-full "
      />
      <div>
        <p className="font-semibold ">{session?.user?.username}</p>
        <p className="text-sm text-gray-700">Frontend Enthusist! Pro Cooking</p>
      </div>

      <button onClick={signOut} className="font-semibold text-cyan-600">
        sign out
      </button>
    </div>
  );
};

export default MiniPorfile;
