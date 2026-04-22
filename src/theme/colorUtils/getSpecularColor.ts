import { TinyColor } from "@ctrl/tinycolor";

export function getSpecularColor(color: string) {
  const brightness = new TinyColor(color).getBrightness();
  const brightnessRatio = brightness / 255;
  const isDark = new TinyColor(color).isDark();

  if (isDark) {
    return new TinyColor(color)
      .brighten(20 + 10 * brightnessRatio)
      .toHexString();
  } else {
    return new TinyColor(color)
      .brighten(10 + 10 * brightnessRatio)
      .toHexString();
  }
}
