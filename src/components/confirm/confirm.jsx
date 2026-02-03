import { IoMdClose } from "react-icons/io";

const ConfirmModal = ({
  open,
  title = "Confirmar ação",
  description = "Tem certeza que deseja continuar?",
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  return (
    <div className="confirm-overlay" onClick={onCancel}>
      <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="confirm-modal__header">
          <h3>{title}</h3>
          <button onClick={onCancel}>
            <IoMdClose />
          </button>
        </div>
        <p>{description}</p>

        <div className="confirm-modal__actions">
          <button className="btn cancel" onClick={onCancel}>
            Cancelar
          </button>

          <button className="btn confirm" onClick={onConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
