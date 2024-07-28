import localFont from "next/font/local";

export const centraFonts = localFont({
  src: [
    {
      path: "../../public/centra-font/CentraNo2-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/centra-font/CentraNo2-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/centra-font/CentraNo2-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-centra",
});
