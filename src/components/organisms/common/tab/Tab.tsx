import { FC, useState } from "react";
import Button from "@/components/atoms/button/Button";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import CategoryCheckBox from "@/components/organisms/common/category_checkbox/CategoryCheckBox";
import { AdvancedSearchFormInterface, CategoryCheckBoxInterface, CategoryName } from "@/types/searchFormType";

interface TabProps {
  params: AdvancedSearchFormInterface;
  className: string;
}
const Tab: FC<TabProps> = ({ params, className }) => {
  const contents: CategoryCheckBoxInterface[] = Object.values(params);
  const [index, setIndex] = useState<CategoryName>("region");

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
            onClick={() => setIndex(el.name as CategoryName)}
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
            // name={params[`${index}`].name}
            name={index}
            className={""}
            warningMsg={params[`${index}`].warningMsg}
          />
        }
      </FlexBox>
    </FlexBox>
  );
};

export default Tab;
