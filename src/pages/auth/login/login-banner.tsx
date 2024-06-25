import { IMAGES } from "@utils/constants";

const LoginBanner = () => {
  return (
    <article className="flex flex-1 items-center justify-center max-lg:hidden">
      <img src={IMAGES.bannerLogin} alt="banner login" />
    </article>
  );
};

export default LoginBanner;
