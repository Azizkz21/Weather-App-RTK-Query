import Layout from "./layout/Layout";
import Search from "./components/Search/Search";
import WeatherMain from "./components/Weather/WeatherMain";

function App() {
  return (
    <>
      <Layout>
        <Search />
        <WeatherMain />
      </Layout>
    </>
  );
}

export default App;
