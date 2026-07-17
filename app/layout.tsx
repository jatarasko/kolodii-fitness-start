import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { MetaPixel } from "./meta-pixel";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: "Обери свій формат | Kolodii Fitness",
    description: "Матеріали, короткі курси та персональний онлайн-супровід Тараса Колодія.",
    icons: { icon: "/brand/kolodii-fitness.png", shortcut: "/brand/kolodii-fitness.png" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="uk"><body>{children}<MetaPixel /><noscript><img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=3580634968754068&ev=PageView&noscript=1" alt="" /></noscript></body></html>;
}
