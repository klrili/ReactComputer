import React from 'react';
import Header from '../header';
import styles from './itemPage.module.scss';
import Card from '../card';
import Login from '../login';
import Registration from '../register';
import MobileHeader from '../mobileHeader';
import Cart from '../cart';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { items } from '../../actions/item';

const ItemPage = (props) => {
  const dispatch = useDispatch();
  const AllItem = useSelector((state) => state.item.items);

  const [onClickCart, onClickCartSet] = React.useState(false);
  const [onClickPersonalArea, onClickPersonalAreaSet] = React.useState(false);
  const [onClickRegister, onClickRegisterSet] = React.useState(false);
  const [GpuFilter, SetGpuFilter] = React.useState(false);
  const [Gpu30SeriesFilter, SetGpu30SeriesFilter] = React.useState(false);
  const [Gpu20SeriesFilter, SetGpu20SeriesFilter] = React.useState(false);
  const [Gpu16SeriesFilter, SetGpu16SeriesFilter] = React.useState(false);
  const [Gpu10SeriesFilter, SetGpu10SeriesFilter] = React.useState(false);
  const [GpuGTSeriesFilter, SetGpuGTSeriesFilter] = React.useState(false);
  const propsString = String(props.itemTypes);
  console.log(String(props.itemTypes)[0]);
  useEffect(() => {
    dispatch(items());
  }, []);

  const onGpuFilter = () => {
    SetGpuFilter(!GpuFilter);
  };
  const onGpu30SeriesFilter = () => {
    SetGpu30SeriesFilter(!Gpu30SeriesFilter);
  };
  const onGpu20SeriesFilter = () => {
    SetGpu20SeriesFilter(!Gpu20SeriesFilter);
  };
  const onGpu16SeriesFilter = () => {
    SetGpu16SeriesFilter(!Gpu16SeriesFilter);
  };
  const onGpu10SeriesFilter = () => {
    SetGpu10SeriesFilter(!Gpu10SeriesFilter);
  };
  const onGpuGTSeriesFilter = () => {
    SetGpuGTSeriesFilter(!GpuGTSeriesFilter);
  };

  return (
    <div>
      {onClickPersonalArea && (
        <Login
          PersonalAreaClickOf={() => onClickPersonalAreaSet(!onClickPersonalArea)}
          register={() => {
            onClickRegisterSet(!onClickRegister);
            onClickPersonalAreaSet(!onClickPersonalArea);
          }}
        />
      )}
      {onClickRegister && (
        <Registration
          PersonalAreaClickOf={() => onClickRegisterSet(!onClickRegister)}
          register={() => {
            onClickRegisterSet(!onClickRegister);
            onClickPersonalAreaSet(!onClickPersonalArea);
          }}
        />
      )}

      <Header
        onCart={() => onClickCartSet(!onClickCart)}
        onClick={() => onClickCartSet(false)}
        PersonalAreaClickOn={() => {
          onClickPersonalAreaSet(!onClickPersonalArea);
          onClickCartSet(false);
        }}
      />
      <MobileHeader />
      {onClickCart && <Cart />}

      <div className={styles.section}>
        <h1>ВИДЕОКАРТЫ</h1>
        <div className={styles.use_}>
          <div className={styles.filter}>
            <div>
              <h2>Фильтровать по:</h2>
            </div>
          </div>
          <div className={styles.sort}>
            <div>
              <h2>Сортировать по:</h2>
              <img src="../img/sort.svg" alt="sort" />
            </div>
          </div>
        </div>
        <div className={styles.filters}>
          {props.itemTypes == 1 || props.itemTypes == 2 ? (
            <div className="d-flex flex-column">
              <p onClick={onGpuFilter}>GPU</p>
              {GpuFilter && (
                <div>
                  <h3 onClick={onGpu30SeriesFilter}>GeForce RTX 30 Cерии </h3>
                  {Gpu30SeriesFilter && (
                    <div>
                      <h3>GeForce RTX 3090</h3>
                      <h3>GeForce RTX 3080 Ti</h3>
                      <h3>GeForce RTX 3080</h3>
                      <h3>GeForce RTX 3070 Ti</h3>
                      <h3>GeForce RTX 3070</h3>
                      <h3>GeForce RTX 3060 Ti</h3>
                      <h3>GeForce RTX 3060</h3>
                    </div>
                  )}
                  <h3 onClick={onGpu20SeriesFilter}>GeForce RTX 20 Cерии </h3>
                  {Gpu20SeriesFilter && (
                    <div>
                      <h3>GeForce RTX 2080 Ti</h3>
                      <h3>GeForce RTX 2080 S</h3>
                      <h3>GeForce RTX 2080 </h3>
                      <h3>GeForce RTX 2070 S</h3>
                      <h3>GeForce RTX 2070 Ti</h3>
                      <h3>GeForce RTX 2060 S</h3>
                      <h3>GeForce RTX 2060</h3>
                    </div>
                  )}
                  <h3 onClick={onGpu16SeriesFilter}>GeForce RTX 16 Cерии </h3>
                  {Gpu16SeriesFilter && (
                    <div>
                      <h3>GeForce GTX 1660 Ti</h3>
                      <h3>GeForce GTX 1660 S</h3>
                      <h3>GeForce GTX 1650 S</h3>
                      <h3>GeForce GTX 1650</h3>
                    </div>
                  )}
                  <h3 onClick={onGpu10SeriesFilter}>GeForce RTX 10 Cерии </h3>
                  {Gpu10SeriesFilter && (
                    <div>
                      <h3>GeForce GTX 1080 Ti</h3>
                      <h3>GeForce GTX 1080</h3>
                      <h3>GeForce GTX 1070 Ti</h3>
                      <h3>GeForce GTX 1070</h3>
                      <h3>GeForce GTX 1060</h3>
                      <h3>GeForce GTX 1050 Ti</h3>
                      <h3>GeForce GTX 1050</h3>
                    </div>
                  )}
                  <h3 onClick={onGpuGTSeriesFilter}>GeForce GT Cерии </h3>
                  {GpuGTSeriesFilter && (
                    <div>
                      <h3>GeForce GT 1030</h3>
                    </div>
                  )}
                </div>
              )}
              <p>Объем памяти</p>
              <p>Тип памяти</p>
              <p>Занимает слотов</p>
              <p>Интерфейс подключения</p>
              <p>Разъемы подключения</p>
              <p>Подключаемых мониторов</p>
              <p>Охлаждение</p>
              <p>Количество вентиляторов</p>
              <p>Длина</p>
              <p>Дополнительное питание</p>
            </div>
          ) : props.itemTypes == 3 || props.itemTypes == 4 ? (
            <div className="d-flex flex-column">
              <p>Socket (Разъем)</p>
              <p>Серия</p>
              <p>Тактовая частота</p>
              <p>Кол-во ядер</p>
              <p>Техпроцесс</p>
            </div>
          ) : props.itemTypes == 5 ? (
            <div className="d-flex flex-column">
              <p>GPU</p>
              <p>CPU</p>
              <p>Охлаждение</p>
            </div>
          ) : props.itemTypes == 6 ? (
            <div className="d-flex flex-column">
              <p>Производители</p>
              <p>Объем памяти</p>
              <p>Тип</p>
              <p>Тактовая частота</p>
              <p>Ранг / канальность памяти</p>
            </div>
          ) : props.itemTypes == 7 ? (
            <div className="d-flex flex-column">
              <p>Производители</p>
              <p>Исполнение</p>
              <p>Объем накопителя</p>
              <p>Форм-фактор</p>
              <p>Подключение</p>
              <p>Объем буфера обмена</p>
              <p>Частота вращения шпинделя</p>
            </div>
          ) : props.itemTypes == 8 ? (
            <div className="d-flex flex-column">
              <p>Производители</p>
              <p>Тип</p>
              <p>Исполнение</p>
              <p>Разъем подключения</p>
              <p>Интерфейс M.2</p>
              <p>Тип памяти</p>
            </div>
          ) : props.itemTypes == 9 ? (
            <div className="d-flex flex-column">
              <p>Производители</p>
              <p>По направлению</p>
              <p>Форм-фактор</p>
              <p>Разъем (Socket)</p>
              <p>Чипсеты Intel</p>
              <p>Чипсеты AMD</p>
              <p>Тип и слоты ОЗУ</p>
              <p>Максимальный объем ОЗУ</p>
              <p>Макс. частота ОЗУ</p>
              <p>Разъемы (на плате)</p>
            </div>
          ) : props.itemTypes == 10 ? (
            <div className="d-flex flex-column">
              <p>Производители</p>
              <p>Цвет корпуса</p>
              <p>Форм-фактор</p>
              <p>Установка корпуса</p>
              <p>Мест под вентиляторы</p>
              <p>Форм-фактор БП</p>
              <p>Расположение БП</p>
              <p>Материал корпуса</p>
            </div>
          ) : props.itemTypes == 11 ? (
            <div className="d-flex flex-column">
              <p>Производители</p>
              <p>Мощность</p>
              <p>Форм-фактор</p>
              <p>Функции и возможности</p>
              <p>Сертификат 80PLUS</p>
              <p>Питание видеокарты</p>
              <p>Версия ATX</p>
              <p>Система кабелей</p>
              <p>Коннекторов SATA</p>
              <p>Коннекторов Molex (IDE)</p>
              <p>Система охлаждения</p>
            </div>
          ) : props.itemTypes == 12 ? (
            <div className="d-flex flex-column">
              <p>Производители</p>
              <p>Назначение</p>
              <p>Тип</p>
              <p>Диаметр вентилятора</p>
              <p>Максимальный TDP</p>
            </div>
          ) : props.itemTypes == 13 ? (
            <div className="d-flex flex-column">
              <p>Производители</p>
              <p>Тип</p>
              <p>Диагональ</p>
              <p>Соотношение сторон</p>
              <p>Разрешение дисплея</p>
              <p>Тип матрицы</p>
              <p>Покрытие экрана</p>
              <p>Время отклика</p>
              <p>Частота смены кадров</p>
              <p>Глубина цвета</p>
              <p>Подключение</p>
            </div>
          ) : null}
          {/* props.itemTypes == 1 ? (
 ) : */}
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className="d-flex  ">
          <div className="cards d-flex flex-wrap justify-center">
            {AllItem.map((obj) =>
              obj.itemType == props.itemTypes ? (
                <Card id={obj._id} imageUrl={obj.imageUrl} cardName={obj.cardName} />
              ) : null,
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
