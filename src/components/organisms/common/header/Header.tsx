import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { HiOutlineBell, HiOutlineChevronLeft } from "react-icons/hi";
import Anchor from "@/components/atoms/anchor/Anchor";
import Button from "@/components/atoms/button/Button";
import Icon from "@/components/atoms/icon/Icon";

const Header: FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    if (router.asPath === "/home") {
      console.log(router.asPath);
    } else {
      console.log("none");
    }
  }, [router.isReady, router.asPath]);

  return (
    <header className="flex items-center justify-center bg-mono-white">
      <section className="flex flex-row items-center justify-between w-6/12 max-w-[1080px]">
        {router.asPath !== "/home" && (
          <Button type="button" size="custom" className="">
            <HiOutlineChevronLeft size={"2rem"} />
          </Button>
        )}
        <Anchor href={"/"} className={""}>
          <Icon path={"/header_logo.svg"} width={150} height={75} alt={"allcamping logo"} className={""} />
        </Anchor>
        <button type="button" className="invisible">
          <HiOutlineBell size={"2rem"} />
        </button>
      </section>
    </header>
  );
};

export default Header;
