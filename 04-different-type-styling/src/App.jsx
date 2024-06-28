import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import LearnDoubleAmpersand from './components/Learn&&.jsx';
import LearnSingleAmpersand from './components/Learn&.jsx';
import PrecedenceBoostAmpersand from './components/PrecedenceBoost&&.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        {/* <AuthInputs /> */}

        {/* <LearnSingleAmpersand /> */}

        {/* <LearnDoubleAmpersand /> */}

        <PrecedenceBoostAmpersand />
      </main>
    </>
  );
}
