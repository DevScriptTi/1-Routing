import NavBarDash from "@/components/Navbars/NavBarDash";
import SideBar from "@/components/SideBar/SideBar";

export default function Layout({ children, panel }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarDash />
      <div className="flex-1">
        <div className="flex h-screen">
          <SideBar className="w-1/5 bg-gray-200" />
          <main className="flex-1 p-5">{children}</main>
          <aside className="w-1/5 bg-gray-100 p-5">{panel}</aside>
        </div>
      </div>
      <footer className="bg-gray-800 text-white text-center flex items-center justify-center h-16">
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
}
