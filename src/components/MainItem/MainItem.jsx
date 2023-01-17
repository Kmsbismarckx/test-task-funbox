import React, { useContext } from "react";
import appContext from "../../context";
import plural from "plural-ru";

const MainItem = ({ id }) => {
  const store = useContext(appContext);

  const { composition, quantity, present, weight } = store?.entities[id];
  return (
    <div className="main__item">
      <div className="item__header">
        <div className="item__corner" />
        <p className="header__name">Сказачное заморское яство</p>
      </div>
      <div className="item__description">
        <h1 className="description__name">Нямушка</h1>
        <p className="description__composition">с {composition}</p>
        <p className="description__quantity">
          {plural(quantity, "%d порция", "%d порции", "%d порций")}
        </p>
        <p className="description__present">
          {plural(present, "мышь", "%d мыши", "%d мышей")} в подарок
        </p>
        <img className="item__img" src={`/media/cat.png`} alt="" />
        <div className="item__circle">
          <span>{weight.toString().replace(".", ",")}</span>
          <div className="item__measure">кг</div>
        </div>
      </div>
      <div className="item__prompt">
        Чего сидишь? Порадуй котэ,{" "}
        <div className="item__link">
          <span>купи</span>.
        </div>
      </div>
    </div>
  );
};

export default MainItem;
