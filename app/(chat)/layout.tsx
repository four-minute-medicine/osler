export default function ChatLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            {/* <Sidebar/> */}
          {children}
        </body>
      </html>
    );
  }