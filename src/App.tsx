import './App.css';
import RadioStreamer from './components/conversation-items/RadioStreamer';
import ClearStorageButton from './components/utils/ClearStorageButton';
import TalkUI from './TalkUI';

function App() {

  return (
    <>
      <div className="App">
        <h1>react-talk-ui </h1>
        <div>A react/typescript talkative user interface</div>
        <div>🌈 Create your talkflow 🗣️</div>
        <h2>Q&A Chatbot - talk with an AI in the backend</h2>
        <ClearStorageButton />
        <TalkUI />
        <h2>ConversationStreamer - Static talkflows with form components</h2>
        {/* <ConversationBox jsonUrl='/conversation-options.json' chatHeight='200px' chatWidth='90vw'/> */}
        <br />
        <h2>Form components</h2>
        <h3>WordStreamer</h3>
        {/* <WordStreamer words='❓⭐ How do you do your choices ⭐❓' loopStyle='cycle'/> */}
        <h3>RadioStreamer</h3>
        <div style={{height:'200px'}}>
          <RadioStreamer options={[
            {"label":"I do always follow my heart","conversationUrl":""},
            {"label":"Nah... beter listen your brain","conversationUrl":""},
            {"label":"Heart on my personal life, brain on professional side","conversationUrl":""},
            {"label":"Better not talk about that","conversationUrl":""}]}
            submitButtonLabel= "choose"/>
        </div>
      </div>
    </>
  );
}

export default App;
