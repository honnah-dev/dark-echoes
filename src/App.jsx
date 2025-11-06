import { useState } from "react";
import { episodeList } from "./data";


export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

 /** Detailed information about the selected puppy */

function EpisodeDetails() {
  if (!selectedEpisode) {
    return (
      <section className="details">
        <h2>Episode Details</h2>
        <p>Select an episode to learn more</p>
      </section>
    );
  }

  return (
    <section className="details"> 
      <h2>Episode {selectedEpisode.id}</h2>
      <h3>{selectedEpisode.title}</h3>
      <p>{selectedEpisode.description}</p>
      <button>Watch Now!</button>
    </section>
  );

}

/** List of episodes that a user can select from */
function EpisodeList() {
  return (
    <section className="episodeList">
      <h2>Episode List</h2>
      <ul className="episodeList">
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>{episode.title}

          </li>
        ))}
      </ul>
    </section>
  );
}

return (
  <>
  <header>
    <h1>Dark Echos</h1>
  </header>
  <main>
    <EpisodeList />
    <EpisodeDetails />
  </main>
  </>
);






 }
