import React, { FC } from "react";
import { FaPhoneAlt, FaRegCalendarCheck } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { CampInfo } from "@/types/campType";
import CampCard from "../../common/camp_card/CampCard";

interface CampDetailInfoInterface {
  content: CampInfo;
}

const CampDetailInfo: FC<CampDetailInfoInterface> = (props) => {
  return (
    <section className="w-6/12">
      <CampCard
        className="flex-row justify-start p-4 mb-4 border rounded-md flexw-6/12 h-60 bg-mono-white border-primary-bordergray"
        campsite={props.content}
        image={<CampCard.Image className="relative w-5/12" />}
        info={
          <CampCard.Info className={"text-body1 font-medium flex flex-col p-4"}>
            <CampCard.Name className={"text-headline3 font-semibold mb-1"} />
            <CampCard.LineIntro className="mb-1" />
            <CampCard.Tel
              className="flex flex-row items-center mb-1"
              icon={<FaPhoneAlt className="mx-1.5" size={"1rem"} />}
            />
            <CampCard.Adress
              className="flex flex-row items-center mb-1"
              icon={<MdLocationOn className="mx-1" size={"1.2rem"} />}
            />
            <CampCard.Reservation
              className="flex flex-row items-center mb-1"
              icon={<FaRegCalendarCheck className="mx-1" size={"1.2rem"} />}
            />
            <CampCard.Homepage
              className="flex flex-row items-center mb-1"
              icon={<HiHome className="mx-1.5" size={"1rem"} />}
            />
          </CampCard.Info>
        }
      />
    </section>
  );
};

export default CampDetailInfo;
