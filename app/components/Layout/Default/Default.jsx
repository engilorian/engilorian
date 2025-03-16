import Client from "@/style/client";
import Navbar from "@/components/Navbar";


export default function DefaultLayout({ children }) {
  return (
    <div>
      <Client>
        <Navbar />
        <main>{children}</main>
      </Client>
    </div>
  );
}
