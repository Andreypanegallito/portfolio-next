import About from '@/components/About';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hability from '@/components/Hability';
import Initial from '@/components/Initial';
import Scholarity from '@/components/Scholarity';
import Sidebar from '@/components/SideBar';

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="m-auto w-full container">
        <Initial />
        <About />
        <Hability />
        <Scholarity />
        <Experience />
        <Footer />
      </div>
    </>
  );
}
