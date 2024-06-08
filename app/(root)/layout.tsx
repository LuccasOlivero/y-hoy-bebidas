export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-custom">{children}</div>;
}
