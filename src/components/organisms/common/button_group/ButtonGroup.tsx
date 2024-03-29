import { FC } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/atoms/button/Button";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import useStore from "store/store";

interface ButtonGroupProps {
  className: string;
}

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const router = useRouter();

  const { AdvancedSearchParams, resetSearchParams } = useStore((state) => state);

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    resetSearchParams();
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    const params = AdvancedSearchParams;

    const searchParams = {
      doNm: params.region.length !== 0 ? params.region.join(",") : null,
      themaEnvrnCl: params.theme.length !== 0 ? params.theme.join(",") : null,
      facltDivNm: params.operation.length !== 0 ? params.operation.join(",") : null,
      lctCl: params.location.length !== 0 ? params.location.join(",") : null,
      induty: params.campsite.length !== 0 ? params.campsite.join(",") : null,
      siteBottomCl1: params.floor.includes("잔디") ? "잔디" : null,
      siteBottomCl2: params.floor.includes("파쇄석") ? "파쇄석" : null,
      siteBottomCl3: params.floor.includes("테크") ? "테크" : null,
      siteBottomCl4: params.floor.includes("자갈") ? "자갈" : null,
      siteBottomCl5: params.floor.includes("맨흙") ? "맨흙" : null,
      sbrsCl: params.facility.length !== 0 ? params.facility.join(",") : null,
      trlerAcmpnyAt: params.etcinfo.includes("개인 트레일러 입장가능") ? "Y" : null,
      caravAcmpnyAt: params.etcinfo.includes("개인 캠핑카 입장가능") ? "Y" : null,
      animalCmgCl: params.etcinfo.includes("반려동물 동반가능") ? "가능" : null,
    };

    const query = encodeURIComponent(JSON.stringify(searchParams));
    router.push(encodeURI("/search?query=" + query));
  };

  return (
    <FlexBox className={`${props.className} flex-row font-bold`}>
      <Button
        type={"reset"}
        size={"md"}
        className={"rounded-lg bg-secondary-orange text-mono-white mr-4"}
        onClick={handleReset}
        aria-label="Reset"
      >
        초기화
      </Button>
      <Button
        type={"submit"}
        size={"md"}
        className={"rounded-lg bg-secondary-lightblue text-mono-white"}
        onClick={handleSearch}
        aria-label="Search"
      >
        검색
      </Button>
    </FlexBox>
  );
};

export default ButtonGroup;
