import { forwardRef, MutableRefObject, useEffect, useState } from "react";

interface CampDetailNavProps {
  children: React.ReactNode;
  navStyle: string;
}
type Ref = HTMLElement | null;

const CampDetailNav = forwardRef<Ref, CampDetailNavProps>((props, ref) => {
  const [positoinOffset, SetPositionOffset] = useState<number>(74);
  const calculateOffset = (target: MutableRefObject<Ref>) => {
    SetPositionOffset(target.current?.getBoundingClientRect().height as number);
  };

  useEffect(() => {
    if (ref === null) return;
    calculateOffset(ref as MutableRefObject<Ref>);
  });

  return <nav className={`sticky top-[${positoinOffset}px] ${props.navStyle}`}>{props.children}</nav>;
});

CampDetailNav.displayName = "CampDetailNav";

export default CampDetailNav;
