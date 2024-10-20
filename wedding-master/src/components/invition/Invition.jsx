import { useState, useEffect } from "react";
import style from "./invition.module.css";

export default function Invition() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  const [isTextSwitching, setIsTextSwitching] = useState(true); // новое состояние

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && isTextSwitching) {
      const textTimer = setTimeout(() => {
        setCurrentText((prev) => (prev === 0 ? 1 : 0));
        setIsTextSwitching(false); // остановка переключения после первого выполнения
      }, 3000);

      return () => clearTimeout(textTimer);
    }
  }, [isLoading, currentText, isTextSwitching]);

  return (
    <div className={isLoading ? style.container_active : style.container}>
      <div className={style.inner_informations}>
        <div className={style.day_of_wedding}>
          <p>26.10.24</p>
        </div>
        <div className={style.heart_with_name}>
          <div className={style.d}>
            <img src="./assets/d.svg" alt="" />
          </div>
          <div className={style.split}>
            <img src="./assets/&.svg" alt="" />
          </div>
          <div className={style.g}>
            <img src="./assets/g.svg" alt="" />
          </div>
        </div>
        <div className={style.wedding_text}>
          <h1>Wedding day</h1>
        </div>

        <div className={style.sheets}>
          <div className={style.sheet_one}>
            <img src="./assets/flowers1.png" alt="цветочка" />
          </div>
          <div className={style.sheet_two}>
            <img src="./assets/flowers2.png" alt="цветочка" />
          </div>
          <div className={style.sheet_third}>
            <img src="./assets/flowers3.png" alt="цветочка" />
          </div>
          <div className={style.sheet_four}>
            <img src="./assets/flowers4.png" alt="цветочка" />
          </div>
        </div>

        <div className={style.text_container}>
          {currentText === 0 ? (
            <>
              <p className={style.regular_text}>
                В этот день мы хотим оказаться в окружении самых близких для нас
                людей!
              </p>
              <br />
              <br />
              <p className={style.bold_text}>
                Приглашаем ВАС разделить с нами этот особенный день - ДЕНЬ НАШЕЙ
                СВАДЬБЫ
              </p>
            </>
          ) : (
            <>
              <p className={style.regular_text}>
                Ждем вас 26.10.24 в ресторане “Такой ресторан”
              </p>
              <br />
              <br />
              <p className={style.bold_text}>Сбор гостей в 17:00</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
