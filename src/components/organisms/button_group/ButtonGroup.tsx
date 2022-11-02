import { FC } from "react";
import Button from "../../atoms/button/Button";
import FlexBox from "../../atoms/flexbox/FlexBox";
import { useAdvancedSearchParams } from "../../../context/AdvancedSearchParamsContext";
interface ButtonGroupProps {
  className: string;
}

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const [selectedOptions, dispatch] = useAdvancedSearchParams((store) => store);
  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({
      type: "RESET",
      params: selectedOptions,
    });
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("hs", selectedOptions);
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
