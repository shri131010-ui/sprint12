import "./globals.css";
import Providers from "../providers";

export const metadata = {
  title: "Cine-Stream | Next.js Migration",
  description: "Movie streaming SPA upgraded to Next.js 15",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}