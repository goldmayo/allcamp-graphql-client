import { FC } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Icon from "../../atoms/icon/Icon";

const Header: FC = () => {
  return (
    <FlexBox className="items-center justify-center bg-mono-white">
      <Icon path={"/header_logo.svg"} width={150} height={75} alt={"allcamping logo"} className={""} />
    </FlexBox>
  );
};

export default Header;
