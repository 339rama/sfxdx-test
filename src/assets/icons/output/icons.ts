export type IconsId =
  | "disconnect"
  | "facebook"
  | "instagram"
  | "twiter"
  | "youtube";

export type IconsKey =
  | "Disconnect"
  | "Facebook"
  | "Instagram"
  | "Twiter"
  | "Youtube";

export enum Icons {
  Disconnect = "disconnect",
  Facebook = "facebook",
  Instagram = "instagram",
  Twiter = "twiter",
  Youtube = "youtube",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Disconnect]: "61697",
  [Icons.Facebook]: "61698",
  [Icons.Instagram]: "61699",
  [Icons.Twiter]: "61700",
  [Icons.Youtube]: "61701",
};
