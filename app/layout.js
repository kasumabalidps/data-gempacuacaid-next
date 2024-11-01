import "./globals.css";

export const metadata = {
  title: "Data Cuaca dan Gempa Bumi",
  description: "Data cuaca dan gempa bumi di Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
