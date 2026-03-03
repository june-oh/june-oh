import { siteConfig as enConfig } from "./config";
import { siteConfig as koConfig } from "./config.ko";

export function getConfig(url: URL) {
  if (url.pathname.includes("/ko")) return koConfig;
  return enConfig;
}

export function getLang(url: URL): "ko" | "en" {
  return url.pathname.includes("/ko") ? "ko" : "en";
}

export function getAltLangUrl(url: URL): string {
  const base = "/june-oh";
  if (url.pathname.includes("/ko")) {
    return `${base}/`;
  }
  return `${base}/ko/`;
}
