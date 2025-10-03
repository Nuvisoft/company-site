import React from "react";
import {
  Select,
  MenuItem,
  OutlinedInput,
  type SelectChangeEvent,
} from "@mui/material";
import { useTranslation } from "react-i18next";

type Lang = { code: string; label: string };
const LANGS: Lang[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

const normalizeToSupported = (lng?: string) => {
  if (!lng) return "en";
  const supported = LANGS.map((l) => l.code);
  if (supported.includes(lng)) return lng;
  const base = lng.split("-")[0];
  const match = supported.find((c) => c === base);
  return match ?? "en";
};

interface Props {
  dense?: boolean; // adjust padding for headers
  uppercase?: boolean; // if you want the displayed value to be EN / ES
}

export function LanguageSelect({ dense = true, uppercase = false }: Props) {
  const { i18n: i18next } = useTranslation();
  const [value, setValue] = React.useState(() =>
    normalizeToSupported(i18next.language)
  );

  React.useEffect(() => {
    setValue(normalizeToSupported(i18next.language));
  }, [i18next.language]);

  const handleChange = async (e: SelectChangeEvent<string>) => {
    const lng = e.target.value;
    setValue(lng);
    await i18next.changeLanguage(lng);
  };

  const current = LANGS.find((l) => l.code === value);

  return (
    <Select
      aria-label="Language"
      value={value}
      onChange={handleChange}
      input={<OutlinedInput />}
      renderValue={() =>
        uppercase ? current?.code.toUpperCase() ?? "" : current?.label ?? ""
      }
      displayEmpty
      sx={{
        minWidth: 72,
        typography: dense ? "body2" : "body1",
        fontFamily: "Nunito",
        fontWeight: 600,
        textTransform: uppercase ? "uppercase" : "none",
        letterSpacing: uppercase ? 0.5 : 0,
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
        "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
        ".MuiSelect-select": () => ({
          py: dense ? 0.25 : 0.5,
          px: 0,
        }),
      }}
      MenuProps={{
        MenuListProps: { dense: true },
        PaperProps: { sx: { mt: 1, minWidth: 180 } },
      }}
    >
      {LANGS.map((lang) => (
        <MenuItem key={lang.code} value={lang.code}>
          {lang.label}
        </MenuItem>
      ))}
    </Select>
  );
}
