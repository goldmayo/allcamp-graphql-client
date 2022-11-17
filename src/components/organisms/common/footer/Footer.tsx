import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Icon from "@/components/atoms/icon/Icon";
import Span from "@/components/atoms/span/Span";
import Anchor from "@/components/atoms/anchor/Anchor";

const Footer: FC = () => {
  return (
    <footer className={"flex bg-primary-navy flex-col justify-center items-center p-4"}>
      <Icon path={"/footer_logo.svg"} width={200} height={100} alt={"allcamping logo"} className={""} />
      <FlexBox className={"flex-row"}>
        <Span className="text-body2 text-mono-white">ⓒ 2022. SeungJai Hyun All Rights Reserved.</Span>
        <Anchor href={"/"} className={"ml-2"}>
          <FaGithub color={"#fff"} />
        </Anchor>
      </FlexBox>
    </footer>
  );
};

export default Footer;
