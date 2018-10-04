import React from "react";

import MenuSelect from "./MenuSelect";

import "./menu.scss";

const Menu = ({ onStart, onChange, limit, attempts }) => (
  <div className="menu">
    <div className="menu__content">
      <div className="menu__row">
        <MenuSelect
          code="limit"
          text="Cartas"
          options={[
            { value: "3", label: "3" },
            { value: "5", label: "5" },
            { value: "10", label: "10" },
            { value: "20", label: "20" },
            { value: "30", label: "30" },
            { value: "40", label: "40" },
            { value: "50", label: "50" }
          ]}
          value={limit}
          onChange={onChange}
        />
        <MenuSelect
          code="attempts"
          text="Tentativas"
          options={[
            { value: "3", label: "3" },
            { value: "5", label: "5" },
            { value: "10", label: "10" },
            { value: "20", label: "20" },
            { value: "30", label: "30" }
          ]}
          value={attempts}
          onChange={onChange}
        />
      </div>
      <button className="menu__button" onClick={onStart}>
        Iniciar jogo
      </button>
    </div>
  </div>
);

export default Menu;
