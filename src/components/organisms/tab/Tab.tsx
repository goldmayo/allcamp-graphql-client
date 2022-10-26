import { FC, useState } from "react";
import { useDetailedSearchDispatch } from "../../../hooks/useDetailSearch/useDetailedSearch";
import { AdvancedSearchFormInterface, CategoryCheckBoxInterface } from "../../../types/searchFormType";
import Button from "../../atoms/button/Button";
import CategoryCheckBox from "../category_checkbox/CategoryCheckBox";
import FlexBox from "../../atoms/flexbox/FlexBox";

interface TabProps {
  params: AdvancedSearchFormInterface;
  className: string;
}
const Tab: FC<TabProps> = ({ params, className }) => {
  const dispatch = useDetailedSearchDispatch();
  const contents: CategoryCheckBoxInterface[] = Object.values(params);
  const [index, setIndex] = useState<keyof AdvancedSearchFormInterface>("region");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value, name } = e.target;
    if (checked) {
      dispatch({
        type: "SELECT",
        name: name,
        params: value,
      });
    } else {
      dispatch({
        type: "DELETE",
        name: name,
        params: value,
      });
    }
  };

  return (
    <FlexBox className={`${className} flex-row max-w-[1080px]`}>
      <FlexBox className="flex-col basis-3/12 ">
        {contents.map((el) => (
          <Button
            type="button"
            size="md"
            className={`${
              index === el.name ? "bg-monoscale-2 text-mono-white" : ""
            } font-bold border border-primary-bordergray hover:bg-monoscale-2 hover:text-mono-white active:bg-monoscale-1 active:text-mono-white`}
            key={el.id}
            onClick={() => setIndex(el.name as keyof AdvancedSearchFormInterface)}
          >
            {el.title}
          </Button>
        ))}
      </FlexBox>
      <FlexBox className="flex-row flex-wrap basis-9/12">
        {
          <CategoryCheckBox
            key={params[`${index}`].id}
            option={params[`${index}`].content}
            id={params[`${index}`].id}
            title={params[`${index}`].title}
            name={params[`${index}`].name}
            className={""}
            warningMsg={params[`${index}`].warningMsg}
            onChange={handleChange}
          />
        }
      </FlexBox>
    </FlexBox>
  );
};

export default Tab;
