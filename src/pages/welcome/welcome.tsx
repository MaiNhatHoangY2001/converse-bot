import Header from "@components/layout/header/header.tsx";
import ButtonLink from "@components/ui/button/button-link";
import {ArrowForwardIos} from "@mui/icons-material";
import {IMAGES} from "@utils/constants.ts";
import classNames from "classnames/bind";

import styles from "@pages/welcome/welcome.module.scss";

const cx = classNames.bind(styles);

export default function Welcome() {
  return (
    <div
      className={cx([
        "container",
        "h-screen flex flex-col overflow-y-auto overflow-x-hidden",
      ])}>
      <Header />
      <ButtonLink
        className="absolute bottom-2 right-2 w-fit p-3 gap-1 bg-primary-color hover:bg-accent-color hover:text-white"
        to="/auth/first-time-login">
        Continue
        <ArrowForwardIos fontSize="small" />
      </ButtonLink>
      <div
        className={cx([
          "content",
          "w-full h-full flex flex-col items-center justify-evenly",
        ])}>
        <div
          className={cx([
            "content__top",
            "text-accent-color font-bold text-7xl text-center",
          ])}>
          Welcome to ConverseBot
        </div>
        <div
          className={cx([
            "content__center",
            "flex flex-col justify-center pl-4 pr-4",
          ])}>
          <img
            className={cx(["voice", ""])}
            src={IMAGES.voice}
            alt="voice-gif"
          />
          <img
            className={cx(["speak", "mt-[-45%] self-center"])}
            src={IMAGES.speakWithAI}
            alt="speak-with-AI"
            width={450}
            height={450}
          />
        </div>
        <div
          className={cx([
            "content__bottom",
            "flex justify-center items-center gap-6",
          ])}>
          <div className={cx(["masterTxt", "text-8xl"])}>Master</div>
          <div>
            <div className={cx(["englishTxt", "text-5xl"])}>English</div>
            <div className={cx(["theWorldTxt", "text-5xl"])}>the World</div>
          </div>
        </div>
      </div>
    </div>
  );
}
