import React from "react";
import loading from "./loading.module.css";

export default function Loading() {
  return (
    <div className={loading.loading_container}>
      <div className={loading.top}>
        <img src="./assets/envelopetop.svg" alt="Закрывашка верхная" />
      </div>
      <div className={loading.bottom}>
        <img src="./assets/envelopedown.svg" alt="Закрывашка нижная" />
      </div>
    </div>
  );
}
