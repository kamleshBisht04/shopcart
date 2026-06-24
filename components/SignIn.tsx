import { SignInButton } from "@clerk/nextjs";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold bg-shop_btn_dark_green px-5 py-[5px] rounded-md text-white hover:bg-shop_medium_green font-sans hoverEffect">
        Login
      </button>
    </SignInButton>
  );
};

export default SignIn;
