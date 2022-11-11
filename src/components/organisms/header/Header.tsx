import { FC } from "react";
import Anchor from "../../atoms/anchor/Anchor";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Icon from "../../atoms/icon/Icon";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-center bg-mono-white">
      <Anchor href={"/"} className={""}>
        <Icon path={"/header_logo.svg"} width={150} height={75} alt={"allcamping logo"} className={""} />
      </Anchor>
    </header>
  );
};

export default Header;
