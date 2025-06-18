import "./globals.css";

export const metadata = {
  title: "Rizki Nugroho Firdaus | Portfolio",
  description: "Portfolio of Rizki Nugroho Firdaus, a technology enthusiast and Telecommunication Engineering student.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}