import './App.css';

function App() {
  return (
    <div className="App">
      {/* Dialogflow Messenger integration */}
      <df-messenger
        project-id="darwinbox-412012"
        agent-id="043b82b9-8396-44cf-8ceb-24638011ca13"
        language-code="en"
        max-query-length="-1"
        allow-feedback="all">
        <df-messenger-chat-bubble  chat-title="GAVS HR-Assistant">
          
        </df-messenger-chat-bubble>
      </df-messenger>
    </div>
  );
}

export default App;
