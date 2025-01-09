import NavBarDash from "@/components/Navbars/NavBarDash";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarDash />
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-800 text-white text-center flex items-center justify-center h-16">
        <p>&copy; 2023 My App</p>
      </footer>
    </div>
  );
}
