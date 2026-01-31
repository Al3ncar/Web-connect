import React from "react";
import Card from "../../components/card/card";

const Sections = ({ titlePage, dataArray }) => {
  const onConfirm = (valid) => {
    console.log(valid);
  };

  return (
    <section className="sections">
      <h1>{titlePage || "Texto de section"}</h1>

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
