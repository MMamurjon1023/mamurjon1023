import React, { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { IoIosListBox, IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import { useTranslation } from "react-i18next";

const Navbar = ({ number }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("uz");
  const favorite = useStore((state) => state.favorite);
  const [darkMode, setDarkMode] = useState(() => {
    const saqlangan = localStorage.getItem("darkMode");
    return saqlangan ? saqlangan : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  function changeLanguage() {
    if (language === "uz") {
      i18n.changeLanguage("ru");
      setLanguage("ru");
    } else {
      i18n.changeLanguage("uz");
      setLanguage("uz");
    }
  }
  return (
    <div>
      <div className=" ">
        <div className="flex px-32 bg-slate-100 dark:bg-dark dark:text-white">
          <div className="flex items-center">
            <CiLocationOn />
            <p className="underline pl">Ташкент</p>
            <p className="pl-5 font-semibold">Пункт выдачи</p>
          </div>

          <div className="  pl-[450px]">
            <a
              className="pr-2 text-purple-500 font-semibold border-r-2"
              href=""
            >
              Стать продавцом
            </a>
            <a className="pl-2 text-purple-500 font-semibold" href="">
              Открыть пункт выдачи
            </a>
            <a className="pl-4" href="">
              Вапрос-ответ
            </a>
            <a className="pl-4" href="">
              Мои заказы
            </a>
            <button className="pl-4" onClick={changeLanguage}>
              {language == "uz" ? "O'zbekcha" : "Русский"}
            </button>
          </div>
        </div>

        <div className="px-32 pt-5 flex items-center dark:bg-dark dark:text-white">
          <Link to={"/"}>
            <img
              className="w-60 "
              src="https://uzum.com/images/services/market-horizontal-logo.png"
              alt=""
            />
          </Link>
          <button className="ml-10 flex items-center gap-2 bg-[#ceccff] text-[#7f4dff] rounded-md p-2">
            <IoIosListBox className="size-5" />
            Каталог
          </button>

          <div className="ml-2 h-[42px] border-2 rounded-md  flex justify-between items-center w-[520px]">
            <p className="ml-5 text-gray-500 "> Искать товары и категории</p>
            <div className=" w-20 h-[42px] rounded-md flex items-center justify-center bg-[#edeff2]  ">
              <IoIosSearch className="size-5 " />
            </div>
          </div>

          <div className="flex gap-4 pl-10 ">
            <Link
              className="flex items-center gap-2 text-lg hover:bg-gray-100"
              to={"/auth"}
            >
              <VscAccount className="size-5" />
              Войти
            </Link>
            <Link
              className="flex items-center gap-2 text-l hover:bg-gray-100 relative"
              to={"/favorite"}
            >
              <IoMdHeartEmpty className="size-6" />
              Избранное
              <span className="absolute -right-2 -top-1 text-sm text-uzum">
                {favorite.length == 0 ? "" : favorite.length}
              </span>
            </Link>
            <button className="flex items-center gap-2 text-lg hover:bg-gray-100 ">
              <MdOutlineShoppingBag className="size-5 " />
              Корзина
            </button>
            <button
              className="flex items-center gap-2 text-lg hover:bg-gray-100"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <>
                  <BsSunFill className="size-5" />
                  Light
                </>
              ) : (
                <>
                  <BsMoonFill className="size-5 " />
                  Dark
                </>
              )}
            </button>
          </div>
        </div>

        <div className="px-32 pt-5 flex items-center gap-[14px] dark:bg-dark dark:text-white">
          <a className="flex gap-1" href="">
            <img
              className="w-[24px]"
              src="https://static.uzum.uz/fast_categories/every1.png"
              alt=""
            />
            <p>{t("profit every day")}</p>
          </a>
          <div className=" flex  gap-[14px] text-gray-500">
            <a href="">{t("electronics")}</a>
            <a href="">{t("Household appliances")}</a>
            <a href="">{t("Clothes")}</a>
            <a href="">{t("Shoes")}</a>
            <a href="">{t("Accessories")}</a>
            <a href="">{t("Beauty and care")}</a>
            <a href="">{t("Health")}</a>
            <a href="">{t("Household goods")}</a>
            <a href="">{t("Construction and renovation")}</a>
            <button className="flex items-center gap-1">
              <a href="">{t("More")}</a>
              <FaChevronDown className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
