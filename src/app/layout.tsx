import { Metadata } from "next";
import Footer from "@/components/organisms/common/footer/Footer";
import Header from "@/components/organisms/common/header/Header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "AllCamping | 홈",
  description: "allcamping main page 올캠핑 메인 페이지",
  applicationName: "AllCamping 올캠핑",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kor">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
