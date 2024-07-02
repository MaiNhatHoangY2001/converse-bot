import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("vi")}>Tiếng Việt</button>
    </div>
  );
}

export default HomePage;
