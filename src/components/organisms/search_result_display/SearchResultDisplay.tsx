import { FC } from "react";
import { CampInfoConnection, CampInfoEdge, Maybe } from "../../../types/campType";
import FlexBox from "../../atoms/flexbox/FlexBox";
import CampListItem from "../camp_list_item/CampListItem";

interface SearchResultDisplayProps {
  edges: CampInfoEdge[];
}

const SearchResultDisplay: FC<SearchResultDisplayProps> = (props) => {
  return (
    <FlexBox className="">
      <ul>
        {props.edges?.map((node: Maybe<CampInfoEdge>) => (
          <CampListItem key={`camp_item_${node?.cursor}`} content={node as CampInfoEdge} />
        ))}
      </ul>
    </FlexBox>
  );
};

export default SearchResultDisplay;
