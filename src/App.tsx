import Hero from './components/Hero';
import TaskBoard from './components/TaskBoard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <TaskBoard />
      <Footer />
    </div>
  );
}

export default App;
