import CollaborativeEditor from "./CollaborativeEditor";
import ChatSidebar from "./ChatSidebar";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-row bg-blue text-white">
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Live Collaborative Editor Demo</h1>
        <CollaborativeEditor />
      </div>
      <ChatSidebar />
    </div>
  );
}
