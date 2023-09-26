import { ReactQueryProvider } from "./react_query/ReactQueryProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
