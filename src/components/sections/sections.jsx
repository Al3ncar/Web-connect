import { useState } from "react";
import Card from "../../components/card/card";
import ConfirmModal from "../confirm/confirm";
import Notification from "../notification/notification";

const Sections = ({ titlePage, dataArray }) => {
  const [getTitleCard, setTitleCard] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const onConfirm = (valid) => {
    setOpenConfirm(true);
    setTitleCard(valid);
  };

  return (
    <section className="sections">
      <h1>{titlePage || "Texto de section"}</h1>

      <Notification
        open={openNotification}
        message="Inscrito com sucesso!"
        duration={2000}
        onClose={() => setOpenNotification(false)}
      />

      <ConfirmModal
        open={openConfirm}
        title={getTitleCard}
        description="Tem certeza que deseja se inscrever nesse programa?!"
        onCancel={() => setOpenConfirm(false)}
        onConfirm={() => {
          setOpenNotification(true);
          setOpenConfirm(false);
        }}
      />

      <div className="sections__cards">
        {dataArray?.map((item) => {
          return (
            <Card
              srcImg={item.img}
              altImg={item.alt}
              title={item.titleCard}
              description={item.descriptionCard}
              descriptionSecond={item.descriptionCardSecond}
              btnText={item.btnTextCard}
              onAction={(data) => onConfirm(data)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Sections;
