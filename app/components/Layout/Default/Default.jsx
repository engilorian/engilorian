import Client from "@/style/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Client>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Client>
    </div>
  );
}
