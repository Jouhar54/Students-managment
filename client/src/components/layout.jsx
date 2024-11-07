import Sidebar from "./sideBar";


const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ marginLeft: '250px', padding: '1rem', width: '100%' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
