import styles from './mobileHeader.module.scss';
function MobileHeader() {
  return (
    <div className={styles.mobileHeader}>
      <div className="mobileHeader d-flex flex">
        <img src="./img/menu.svg" alt="menu" />
        <div className={styles.logo}>
          <img className="logo" src="./img/logo.svg" alt="logo" />
        </div>
        <div className={styles.openMenu}>
          <div className="openMenu d-flex flex ">
            <div className={styles.menu}>
              <div className="menu d-flex flex-column">
                <h3>ВИДЕОКАРТЫ</h3>
                <h3>ПРОЦЕСОРЫ</h3>
                <h3>ГОТОВЫЕ РЕШЕНИЯ</h3>
                <h3>ДРУГОЕ</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MobileHeader;
