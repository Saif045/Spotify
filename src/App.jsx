import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import {  Sidebar, MusicPlayer, ScrollToTop } from "./components";
import {
  ArtistDetails,
  Discover,
  Search,
  SongDetails,
  WorldWide,
} from "./pages";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex h-screen">
      <ScrollToTop />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/WorldWide" element={<WorldWide />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/songs/:songid" element={<SongDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      {activeSong?.title && (
        <div className="w-screen absolute z-[100] h-16 sm:h-20 bottom-12 sm:bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#022008] backdrop-blur-lg rounded-t-3xl z-100">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
