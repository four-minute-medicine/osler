export default function ChatLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="flex h-screen">
        {children}
      </main>
    );
  }