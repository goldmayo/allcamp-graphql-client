import { FC } from "react";

interface CampDetailNavProps {
  children: React.ReactNode;
  navStyle: string;
}

const CampDetailNav: FC<CampDetailNavProps> = (props) => {
  return <nav className={`${props.navStyle}`}>{props.children}</nav>;
};

export default CampDetailNav;
