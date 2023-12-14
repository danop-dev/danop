import { Inter, Montserrat, Poppins } from "next/font/google";

//fonts
export const poppins = Poppins({
  weight: "900",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const inter = Inter({
  weight: ["900", "600", "400"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export const montserrat = Montserrat({
  weight: ["900", "600", "400"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});
