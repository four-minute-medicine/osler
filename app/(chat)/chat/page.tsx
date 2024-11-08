'use client'
import ChatSection from "../components/chatsection";
import Sidebar from "../components/sidebar";


export default function Chat() {
    const handleSendMessage = (message: string) => {
        console.log('Sending message:', message);
      };
    
      const handleNewCase = () => {
        console.log('Generating new case');
      };
    
  return (
    <div className="flex h-screen bg-[#090909]">
        <Sidebar/>
        <ChatSection 
        onSendMessage={handleSendMessage}
        onNewCase={handleNewCase}
      />
    </div>
  );
}
