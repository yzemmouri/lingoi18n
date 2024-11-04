export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      Sidebar
      {children}
    </main>
  );
}
