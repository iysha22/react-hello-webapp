import { useContacts } from "../context/ContactContext";

const ModalConfirm = () => {
  const { showModal, setShowModal, confirmDelete } = useContacts();

  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-box">
        <p>¿Estás seguro de eliminar este contacto?</p>
        <div className="buttons">
          <button onClick={confirmDelete}>Sí</button>
          <button onClick={() => setShowModal(false)}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
