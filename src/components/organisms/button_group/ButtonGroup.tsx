import { FC } from "react";
import { useDetailedSearchDispatch } from "../../../hooks/useDetailSearch/useDetailedSearch";
import Button from "../../atoms/button/Button";
import FlexBox from "../../atoms/flexbox/FlexBox";

interface ButtonGroupProps {
  className: string;
}

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const dispatch = useDetailedSearchDispatch();

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({
      type: "RESET",
      name: "",
      params: "",
    });
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <FlexBox className={`${props.className} flex-row font-bold`}>
      <Button
        type={"reset"}
        size={"md"}
        className={"rounded-lg bg-secondary-orange text-mono-white mr-4"}
        onClick={handleChange}
      >
        초기화
      </Button>
      <Button
        type={"reset"}
        size={"md"}
        className={"rounded-lg bg-secondary-lightblue text-mono-white"}
        onClick={handleSearch}
      >
        검색
      </Button>
    </FlexBox>
  );
};

export default ButtonGroup;
