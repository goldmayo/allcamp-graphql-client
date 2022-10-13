import FlexBox from "../../atoms/flexbox/FlexBox";
import Icon from "../../atoms/icon/Icon";
import Span from "../../atoms/span/Span";
import { FaGithub } from "react-icons/fa";
import Anchor from "../../atoms/anchor/Anchor";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <FlexBox className={"bg-primary-navy flex-col justify-center items-center p-4"}>
      <Icon path={"/footer_logo.svg"} width={200} height={100} alt={"allcamping logo"} className={""} />
      <FlexBox className={"flex-row"}>
        <Span className="text-body2 text-mono-white">ⓒ 2022. SeungJai Hyun All Rights Reserved.</Span>
        <Anchor href={"/"} className={"ml-2"}>
          <FaGithub color={"#fff"} />
        </Anchor>
      </FlexBox>
    </FlexBox>
  );
};

export default Footer;
