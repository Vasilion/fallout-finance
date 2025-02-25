import TabNavigation from "./TabNavigation";

const Layout = ({ children }) => {
  return (
    <div className="pipboy-theme">
      <header className="pipboy-header">
        <h1 className="text-2xl font-bold">Fallout Finance Pip-Boy</h1>
      </header>
      <TabNavigation />
      <div className="pipboy-divider"></div>
      <main className="pipboy-main">{children}</main>
    </div>
  );
};

export default Layout;
