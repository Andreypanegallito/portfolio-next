import About from '@/components/About';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hability from '@/components/Hability';
import Initial from '@/components/Initial';
import Scholarity from '@/components/Scholarity';

export default function Home() {
  return (
    <div className="m-auto w-full" style={{ maxWidth: 1400 + 'px' }}>
      <Initial />
      <About />
      <Hability />
      <Scholarity />
      <Experience />
      <Footer />
    </div>
  );
}
