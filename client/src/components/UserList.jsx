import React, { useState } from "react";
import LeftSidebar from "./UI/LeftSidebar"; 

export default function UserList({ currentUserId, onSelectUser, activeView, setActiveView, darkMode, onLogout, contacts = [] }) {
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const currentUser = { id: currentUserId, avatar: 'U' }; 


  // Only  the sidebar component, which handles navigation and contact dropdown
  return (
    <LeftSidebar
        activeView={activeView}
        setActiveView={setActiveView}
        onViewChange={setActiveView}
        onLogout={onLogout} 
        onCreateGroup={() => setShowContactDropdown(true)} 
        darkMode={darkMode}
        currentUser={currentUser}
        contacts={contacts} // Pass fetched users as quick contacts
        showContactDropdown={showContactDropdown}
        setShowContactDropdown={setShowContactDropdown}
        // onSelectContact handler passed down to the sidebar's contact
        onSelectContact={(contact) => {
            onSelectUser(contact);
            setActiveView("chats");
        }}
    />
  );
}