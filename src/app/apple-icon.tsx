import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Descarga solo los glifos "CC" de Hanken Grotesk 800 desde Google Fonts (en el build).
async function loadFont() {
  "use cache";
  cacheLife("max");
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@800&text=CC",
  ).then((res) => res.text());
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error("No se encontró la fuente Hanken Grotesk");
  return fetch(url).then((res) => res.arrayBuffer());
}

// Ícono de inicio en iOS: mismo monograma que el favicon (iOS ya redondea las esquinas).
export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1b1815",
          color: "#4ade80",
          fontFamily: "Hanken Grotesk",
          fontSize: 86,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        CC
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Hanken Grotesk", data: await loadFont(), weight: 800, style: "normal" }],
    },
  );
}
