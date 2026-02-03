import S from "../../styles/components/ui/badge.module.scss";
export const Badge = ({ title, id }) => (
  <div key={id} className={S.badge}>
    <p>{title}</p>
  </div>
);
