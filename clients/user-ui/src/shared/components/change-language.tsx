'use client'
import * as React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "@/shared/components/ui/drawer";
import { Button } from "@/shared/components/ui/button";
import { useRouter, usePathname } from "@/features/navigation";

interface Language {
  label: string;
  value: string;
}

interface GroupedLanguages {
  [letter: string]: Language[];
}

const languages = [
  { label: "English", value: "en"},
  { label: "Spanish", value: "es"},
  { label: "Mandarin Chinese", value: "zh"},
  { label: "Hindi", value: "hi"},
  { label: "Arabic", value: "ar"},
  { label: "Portuguese", value: "pt"},
  { label: "Bengali", value: "bn"},
  { label: "Russian", value: "ru"},
  { label: "Japanese", value: "ja"},
  { label: "Punjabi", value: "pa"},
  { label: "German", value: "de"},
  { label: "Javanese", value: "jv"},
  { label: "Wu Chinese", value: "wuu"},
  { label: "Marathi", value: "mr"},
  { label: "Telugu", value: "te"},
  { label: "Vietnamese", value: "vi"},
  { label: "Korean",  value: "ko"},
  { label: "French", value: "fr"},
  { label: "Tamil", value: "ta"},
  { label: "Urdu", value: "ur"},
  { label: "Italian", value: "it"},
  { label: "Turkish", value: "tr"},
  { label: "Persian", value: "fa"},
  { label: "Gujarati", value: "gu"},
  { label: "Polish", value: "pl"},
  { label: "Ukrainian", value: "uk"},
  { label: "Kannada", value: "kn"},
  { label: "Malayalam", value: "ml"},
  { label: "Sundanese", value: "su"},
  { label: "Burmese", value: "my"},
  { label: "Hausa", value: "ha"},
  { label: "Yoruba", value: "yo"},
  { label: "Armenian", value: "am"},
].sort((a, b) => a.label.localeCompare(b.label));


const groupedLanguages: GroupedLanguages = languages.reduce((acc, lang) => {
  const firstLetter = lang.label[0];
  return {
    ...acc,
    [firstLetter]: [...(acc[firstLetter] || []), lang]
  };
}, {});


interface ChangeLanguageProps {
  children: React.ReactNode;
}

const ChangeLanguage = ({ children } : ChangeLanguageProps) => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>

      <DrawerContent>

        <DrawerHeader>
          <DrawerTitle>Select a language</DrawerTitle>
        </DrawerHeader>

        <DrawerFooter className={"w-full"}>
          <div className="grid grid-cols-2 h-auto md:grid-cols-3 lg:grid-cols-5 auto-rows-min grid-auto-flow-column">
          {Object.entries(groupedLanguages).map(([letter, langs]) => (
            <div key={letter}>

              <div className="font-medium text-lg">{letter}</div>

              <div className={"flex flex-col justify-start"}>
                {langs.map(lang => (
                  <Button
                    key={lang.value}
                    className="text-left min-w-32"
                    onClick={() => router.push(pathName, {locale: lang.value})}
                    variant={'link'}
                  >
                    {lang.label}
                  </Button>
                ))}
              </div>

            </div>
          ))}
          </div>

        </DrawerFooter>

      </DrawerContent>
    </Drawer>
  );
};
export default ChangeLanguage;
