import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <figure className="flex items-center gap-1">
        <img
          src="https://converse-storage.s3.ap-southeast-1.amazonaws.com/logo-conversebot.png"
          alt="Forgot Password"
          className="w-14"
        />
        <figcaption className="text-2xl font-bold text-primary-color">
          ConverseBot
        </figcaption>
      </figure>
    </Link>
  );
};

export default Logo;
