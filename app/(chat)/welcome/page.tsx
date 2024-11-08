import ChatSection from "../components/chatsection";
import Sidebar from "../components/sidebar";
import WelcomePage from "../components/welcomesection";


export default function Welcome() {
    const handleSendMessage = (message: string) => {
        console.log('Sending message:', message);
      };
    
      const handleNewCase = () => {
        console.log('Generating new case');
      };
    
  return (
    <div className="flex h-screen bg-[#1B1B1B]">
        <WelcomePage/>
    </div>
  );
}
