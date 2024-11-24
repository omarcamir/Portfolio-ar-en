import { useTranslations } from "next-intl";
import NavBar from "../components/NavBar";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div>
      <NavBar />
      <div>{t("title")}</div>
    </div>
  );
}
