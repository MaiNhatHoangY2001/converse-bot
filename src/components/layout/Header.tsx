import {useState} from "react";
import ReactFlagsSelect from "react-flags-select";
import IMAGES from "../../constants/imgUrl";
import Button from "../common/Button";

import HeaderStyle from "./Header.module.scss";

import classNames from "classnames/bind";

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
        <div
          className={cx([
            "converseBot",
            "font-roboto font-bold text-[1.375rem]",
          ])}>
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
        <Button
          className={cx(["loginBtn", "bg-accent-color text-sm w-[10%]"])}
          text="LOGIN"
        />
        <Button
          className={cx(["registerBtn", "bg-primary-color text-sm w-[10%]"])}
          text="REGISTER"
        />
      </div>
    </div>
  );
}
