import "./globals.scss";
import type { Metadata } from "next";
import LocalFont from "next/font/local";

export const metadata: Metadata = {
  title: "Discord",
};

const ABC_Ginto_Nord = LocalFont({
  src: [
    {
      path: "../../public/fonts/ABC_Ginto_Nord_ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/ABC_Ginto_Nord_ExtraBold_Italic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-ABC_Ginto_Nord",
});

const gg_sans = LocalFont({
  src: [
    {
      path: "../../public/fonts/gg_sans.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/gg_sans_Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/gg_sans_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/gg_sans_Medium_Italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/gg_sans_SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/gg_sans_SemiBold_Italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/gg_sans_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/gg_sans_Bold_Italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/gg_sans_ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/gg_sans_ExtraBold_Italic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-gg_sans",
});

const Noto_Sans = LocalFont({
  src: [
    {
      path: "../../public/fonts/Noto_Sans.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Noto_Sans_Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Noto_Sans_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Noto_Sans_Medium_Italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/Noto_Sans_SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Noto_Sans_SemiBold_Italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/Noto_Sans_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Noto_Sans_Bold_Italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Noto_Sans_ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Noto_Sans_ExtraBold_Italic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-Noto_Sans",
});

const Source_Code_Pro = LocalFont({
  src: [
    {
      path: "../../public/fonts/Source_Code_Pro.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Source_Code_Pro_SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-Source_Code_Pro",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${ABC_Ginto_Nord.variable} ${gg_sans.variable} ${Noto_Sans.variable} ${Source_Code_Pro.variable}`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;