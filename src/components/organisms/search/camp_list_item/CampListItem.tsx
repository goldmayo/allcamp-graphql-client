import React, { FC } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ListItem from "@/components/atoms/list_item/ListItem";
import { CampInfoEdge, CampInfo } from "@/types/campType";
import CampCard from "@/components/organisms/common/camp_card/CampCard";

interface CampListItemInterface {
  content: CampInfoEdge;
  className: string;
}

const CampListItem: FC<CampListItemInterface> = (props) => {
  return (
    <ListItem key={`camp_list_item_${props.content?.node?.contentId}`} className={props.className}>
      <CampCard
        className="flex flex-row p-2.5 border justify-space items-center bg-mono-white border-primary-bordergray rounded-md "
        campsite={props.content?.node as CampInfo}
        image={<CampCard.ImageAnchor className="relative" width={300} height={210} />}
        info={
          <CampCard.Info className="flex flex-col ml-5 space-y-3">
            <CampCard.Name className="font-bold text-title1" link={true} />
            <CampCard.Region className="text-body2" />
            <CampCard.Adress
              className="flex flex-row items-center text-body3"
              icon={<FaMapMarkerAlt className="mx-1" size={"0.875rem"} />}
            />
            <CampCard.Tel
              className="flex flex-row items-center text-body3"
              icon={<FaPhoneAlt className="mx-1.5" size={"1rem"} />}
            />
            <CampCard.Amenity
              className="p-2 border rounded-sm border-primary-bordergray bg-primary-lightgray"
              gap="mr-4"
            />
          </CampCard.Info>
        }
      />
    </ListItem>
  );
};

export default CampListItem;
