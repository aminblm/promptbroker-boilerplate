import Buttons from "./buttons";

export default function DashboardLayout({
  children,
  currentTab, // will be a page or nested layout
}: {
  children: React.ReactNode;
  currentTab: string | null;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Buttons currentTab={currentTab}>{children}</Buttons>
      {children}
    </section>
  );
}
