import { FaCheck } from "react-icons/fa";

const Notification = ({
  open,
  message = "Inscrito com sucesso!",
  duration = 3000,
  onClose,
}) => {
  if (!open) return null;

  return (
    <div className="notification">
      <div className="notification__content">
        <span className="notification__content__icon">
          <FaCheck />
        </span>

        <p>{message}</p>
      </div>

      <div
        className="notification__progress"
        style={{ animationDuration: `${duration}ms` }}
        onAnimationEnd={onClose}
      />
    </div>
  );
};

export default Notification; 
