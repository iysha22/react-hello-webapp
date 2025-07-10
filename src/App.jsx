import { ContactProvider } from "./context/ContactContext";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ModalConfirm from "./components/ModalConfirm";
import "./index/index.css";

function App() {
  return (
    <ContactProvider>
      <div className="app">
        <h1>Agenda de Contactos</h1>
        <AddContact />
        <ContactList />
        <ModalConfirm />
      </div>
    </ContactProvider>
  );
}

export default App;
