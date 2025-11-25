import MusicPlayer from "./MusicPlayer";
import TopRightPanel from "./TopRightPanel";

function TopPanel() {
  return (
    <div className="absolute top-0 left-0 w-full  flex justify-between p-4">
      <MusicPlayer></MusicPlayer>
      <TopRightPanel></TopRightPanel>
    </div>
  );
}

export default TopPanel;
