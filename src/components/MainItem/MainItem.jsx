import React, { useContext, useState } from "react";
import appContext from "../../context";
import plural from "plural-ru";
import "./MainItem.scss";

const MainItem = ({ id }) => {
  const { store, publicUrl } = useContext(appContext);
  const { composition, quantity, present, weight, description, isAvailable } =
    store?.entities[id];
  const [isActive, setIsActive] = useState(false);
  const [toggleText, setToggleText] = useState(false);

  const onActive = () => {
    if (isAvailable) {
      setIsActive(!isActive);
    }
    if (isActive) {
      setToggleText(false);
    }
  };
  const onHover = () => setToggleText(isActive);
  const onOut = () => setToggleText(false);

  return (
    <div
      className={`main__item-container ${
        isActive ? "main__item-container_active" : ""
      } ${!isAvailable ? "main__item-container_not-available" : ""} ${
        toggleText ? "main__item-container_hover" : ""
      }`}
    >
      <div
        className={`main__item `}
        onClick={onActive}
        onTouchStart={onActive}
        onMouseEnter={onHover}
        onMouseLeave={onOut}
      >
        <div className="item__header">
          <div
            className="item__corner"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          <p className="header__name">
            <span>
              {toggleText ? "Котэ не одобряет?" : "Сказачное заморское яство"}
            </span>
          </p>
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
          <img
            className="item__img"
            src={`${publicUrl}/media/cat.png`}
            alt=""
          />
          <div className="item__circle">
            <span>{weight.toString().replace(".", ",")}</span>
            <div className="item__measure">кг</div>
          </div>
        </div>
      </div>
      {isActive ? (
        <div
          className="item__prompt"
          onClick={(event) => event.stopPropagation()}
        >
          {description}
        </div>
      ) : (
        <div
          className="item__prompt"
          onClick={(event) => event.stopPropagation()}
        >
          {isAvailable ? (
            <>
              Чего сидишь? Порадуй котэ,{" "}
              <div className="item__link">
                <span onClick={onActive}>купи</span>.
              </div>
            </>
          ) : (
            <>Печалька, с {composition} закончился!</>
          )}
        </div>
      )}
    </div>
  );
};

export default MainItem;
