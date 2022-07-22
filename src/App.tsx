import { CharacterOverview } from "./pages/CharacterOverview/CharacterOverview";
import { EpisodeOverview } from "./pages/EpisodeOverview/EpisodeOverview";
import { Home } from "./pages/Home/Home";
import { Router } from "@reach/router";
import { CharacterDetails } from "./pages/CharacterDetails/CharacterDetails";
import { EpisodeDetails } from "./pages/EpisodeDetails/EpisodeDetails";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />

      <Router>
        <Home path="/" />
        <CharacterOverview path="characters" />
        <CharacterDetails path="characters/:characterId" />
        <EpisodeOverview path="episodes" />
        <EpisodeDetails path="episodes/:episodeId" />
      </Router>
    </>
  );
}

export default App;

