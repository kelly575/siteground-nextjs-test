
export const metadata = {
  title: "SiteGround Next.js Test",
  description: "A basic Next.js deployment test application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
