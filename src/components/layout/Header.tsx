import {useState} from "react";
import ReactFlagsSelect from "react-flags-select";

import HeaderStyle from "./Header.module.scss";

import classNames from "classnames/bind";
import IMAGES from "../../constants/imgUrl.ts";
import LinkBtn from "@components/common/LinkBtn.tsx";

const cx = classNames.bind(HeaderStyle);

export default function Header() {
  const [selectedCode, setSelectedCode] = useState("VN");

  return (
    <div
      className={cx([
        "container",
        "w-full h-[4.25rem] grid grid-cols-10 items-center bg-accent-color text-[white]",
      ])}>
      <div className="col-span-2 flex justify-center items-center">
        <img src={IMAGES.logo} alt="logo" width={54} height={50} />
        <div className={cx(["converseBot", "font-bold text-[1.375rem]"])}>
          ConverseBot
        </div>
      </div>
      <div
        className={cx([
          "wrapperToolbar",
          "col-span-8 flex justify-end gap-4 mr-[6%]",
        ])}>
        <ReactFlagsSelect
          className="border-r-[1px] border-solid border-[white] pr-4"
          countries={["VN", "US"]}
          // customLabels={{ VN: 'Vietnam', US: 'English' }}
          showSelectedLabel={false}
          showOptionLabel={false}
          fullWidth={false}
          selectButtonClassName="border-none"
          selectedSize={20}
          selected={selectedCode}
          onSelect={code => setSelectedCode(code)}
        />
        <LinkBtn
          className={cx([
            "loginBtn",
            "bg-accent-color text-sm w-[10%] hover:bg-accent-color4",
          ])}
          to="/auth/login">
          LOGIN
        </LinkBtn>
        <LinkBtn
          className={cx([
            "registerBtn",
            "bg-primary-color text-sm w-[10%] hover:bg-accent-color4",
          ])}
          to="/auth/register">
          REGISTER
        </LinkBtn>
      </div>
    </div>
  );
}
