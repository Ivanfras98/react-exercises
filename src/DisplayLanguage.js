import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {
  const strings = {
    en: { selected_Lang: "You selected English" },
    it: { selected_Lang: "Hai selezionato Italiano" },
  };
  const language = useContext(LanguageContext);
  console.log(language)
  return (
    <div>
      <h1> {strings[language].selected_Lang}</h1>;
    </div>
  );
}
