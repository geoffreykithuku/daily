const DashboardLayout = ({ children }: {
    children: React.ReactNode;
}) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="top-0 absolute left-0 h-full border-r w-[200px]">
        daily
      </aside>
      <div className="ml-[200px]">
        <header className="h-[60px] border-b border-black/10">Daily</header>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
