import React from 'react';
import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';
function Header({ onCart, onClick, PersonalAreaClickOn }) {
  const [onClickGpu, onClickGpuSet] = React.useState(false);
  const [onClickCpu, onClickCpuSet] = React.useState(false);
  const [onClickReady, onClickReadySet] = React.useState(false);
  const [onClickOther, onClickOtherSet] = React.useState(false);

  const allIsCloseCart = () => {
    allIsClose();
    onCart();
  };
  const allIsClosePersonalArea = () => {
    allIsClose();
    PersonalAreaClickOn();
  };
  const allIsClose = () => {
    onClickGpuSet(false);
    onClickCpuSet(false);
    onClickReadySet(false);
    onClickOtherSet(false);
  };
  const onGpu = () => {
    onClickGpuSet(!onClickGpu);
    onClickCpuSet(false);
    onClickReadySet(false);
    onClickOtherSet(false);
    onClick();
  };
  const onCpu = () => {
    onClickCpuSet(!onClickCpu);
    onClickGpuSet(false);
    onClickReadySet(false);
    onClickOtherSet(false);
    onClick();
  };
  const onReady = () => {
    onClickReadySet(!onClickReady);
    onClickCpuSet(false);
    onClickGpuSet(false);
    onClickOtherSet(false);
    onClick();
  };
  const onOther = () => {
    onClickOtherSet(!onClickOther);
    onClickReadySet(false);
    onClickCpuSet(false);
    onClickGpuSet(false);
    onClick();
  };
  return (
    <div className={styles.header}>
      <header>
        <div className={styles.headerButton}>
          <div className="headerButton d-flex align-center">
            <NavLink to="/">
              <img src="../img/logo.svg" alt="logo" />
            </NavLink>

            <div className={styles.managerButton}>
              <div className="managerButton d-flex align-center">
                <div className="d-flex flex-column">
                  <button onClick={onGpu}>ВИДЕОКАРТЫ</button>
                  <div className={styles.gpu}>
                    <div className="gpu">
                      {onClickGpu && (
                        <div className={styles.gpuButtoms}>
                          <div className="gpuButtoms">
                            <NavLink to="/videocards/nvidia">
                              <h1 onClick={allIsClose}>NVIDIA</h1>
                            </NavLink>
                            <NavLink to="/videocards/amd">
                              <h1 onClick={allIsClose}>AMD</h1>
                            </NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="f-flex flex-column">
                  <button onClick={onCpu}>ПРОЦЕСОРЫ</button>
                  <div className={styles.cpu}>
                    <div className="cpu">
                      {onClickCpu && (
                        <div className={styles.cpuButtoms}>
                          <div className="cpuButtoms">
                            <NavLink to="/cpu/intel">
                              <h1 onClick={allIsClose}>INTEL</h1>
                            </NavLink>
                            <NavLink to="/cpu/amd">
                              <h1 onClick={allIsClose}>AMD</h1>
                            </NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <NavLink to="/ready">
                    <button onClick={onReady}>ГОТОВЫЕ РЕШЕНИЯ</button>
                  </NavLink>

                  {/* <div className={styles.ready}>
                    <div className="ready">
                      {onClickReady && (
                        <div className={styles.readyButtoms}>
                          <div className="readyButtoms">
                            <h1>РЕШЕНИЯ НА INTEL</h1>
                            <h1>РЕШЕНИЯ НА AMD</h1>
                          </div>
                        </div>
                      )}
                    </div>
                  </div> */}
                </div>
                <div className="d-flex flex-column">
                  <button onClick={onOther}>ДРУГОЕ</button>
                  <div className={styles.other}>
                    <div className="other">
                      {onClickOther && (
                        <div className={styles.otherButtoms}>
                          <div className="otherButtoms">
                            <NavLink to="/ddr">
                              <h1 onClick={allIsClose}>ОПЕРАТИВНАЯ ПАМЯТЬ </h1>
                            </NavLink>
                            <NavLink to="/hdd">
                              <h1 onClick={allIsClose}>ЖЕСТКИЙ ДИСК </h1>
                            </NavLink>
                            <NavLink to="/ssd">
                              <h1 onClick={allIsClose}>SSD НАКОПИТЕЛИ </h1>
                            </NavLink>
                            <NavLink to="/motherboards">
                              <h1 onClick={allIsClose}>МАТЕРИНСКИЕ ПЛАТЫ</h1>
                            </NavLink>
                            <NavLink to="/case">
                              <h1 onClick={allIsClose}>КОРПУСЫ</h1>
                            </NavLink>
                            <NavLink to="/psu">
                              <h1 onClick={allIsClose}>БЛОК ПИТАНИЯ</h1>
                            </NavLink>
                            <NavLink to="/coolers">
                              <h1 onClick={allIsClose}>КУЛЕРЫ</h1>
                            </NavLink>
                            <NavLink to="/monitors">
                              <h1 onClick={allIsClose}>МОНИТОРЫ</h1>
                            </NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.centralButton}>
          <div className="centralButton d-flex align-center">
            <img src="../img/SearchBlock.svg" alt="search" />

            <img onClick={allIsClosePersonalArea} src="../img/PersonalArea.svg" alt="cabinet" />

            <img onClick={allIsCloseCart} src="../img/cartLogo.svg" alt="cart" />
          </div>
        </div>
        <div className={styles.mapCords}>
          <div className="mapCords d-flex ">
            <button className="text">ГДЕ НАС НАЙТИ?</button>
            <button>
              <img src="../img/mapLogo.svg" alt="map" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
