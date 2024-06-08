import WelcomeStyle from "./Welcome.module.scss";

import classNames from "classnames/bind";
import IMAGES from "../../constants/imgUrl.ts";
import Header from "@components/layout/Header.tsx";

const cx = classNames.bind(WelcomeStyle);

export default function Welcome() {
  return (
    <div
      className={cx([
        "container",
        "h-screen flex flex-col overflow-y-auto overflow-x-hidden",
      ])}>
      <Header />
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
