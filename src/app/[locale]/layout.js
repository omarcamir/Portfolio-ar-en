import localFont from "next/font/local";
import "../globals.css";
import NavBar from "../components/organisms/NavBar";
import Footer from "../components/organisms/Footer";

const raleway = localFont({
  src: "../fonts/Raleway-VariableFont_wght.ttf",
  variable: "--font-raleway", // Updated to match Raleway
  weight: "100 900", // Ensure this matches the font's actual weight range
});
const NotoSansArabic = localFont({
  src: "../fonts/NotoSansArabic-VariableFont_wdth,wght.ttf",
  variable: "--font-NotoSansArabic", // Updated to match Raleway
  weight: "100 900", // Ensure this matches the font's actual weight range
});


// Generate metadata dynamically

export async function generateMetadata({ locale }) {
  return {
    title: locale === "ar" ? "الصفحة الرئيسية" : "Home Page",
    description: locale === "ar" ? "مرحبا بك في برانت" : "Welcome to Brant",
  };
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${
          locale === "ar" ? NotoSansArabic.variable : raleway.variable
        } antialiased bg-overlay-bg-1 text-white-color min-h-screen flex flex-col`}
      >
        <NavBar locale={locale} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
