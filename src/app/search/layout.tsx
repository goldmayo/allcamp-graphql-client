import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AllCamping | 검색결과",
  description: "allcamping search page 올캠핑 검색결과 페이지",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default RootLayout;
