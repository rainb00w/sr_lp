import Header from './layout/Header';
import About from './layout/About';
import Business from './layout/Business';
import Blog from './layout/Blog';
import Team from './layout/Team';
import Form from './layout/Form';
import Footer from './layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Business />
        <Blog />
        <Team />
        <Form />
      </main>

      <Footer />
    </div>
  );
}

export default App;
