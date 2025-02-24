"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/logo.webp";

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Рабочий стол",
    href: "#",
    items: [
      { title: "Продажи", href: "#" },
      { title: "Создать продажу", href: "#" },
      { title: "Чеки", href: "/receipts" },
      { title: "Пречеки", href: "#" },
      { title: "Отмены", href: "#" },
      { title: "Внесения / инкассации", href: "/collections" },
      { title: "Кассовые смены", href: "#" },
      { title: "Предзаказы", href: "#" },
      { title: "Открытые заказы", href: "#" },
    ],
  },
  { title: "Оформление заказа", href: "/checkout" },
  { title: "Номенклатура", href: "#" },
  { title: "Каталог услуг", href: "/service-list" },
  { title: "Профиль", href: "#" },
  { title: "Управление аккаунтами", href: "/user-managment" },
  {
    title: "Справочники",
    href: "#",
    items: [
      { title: "Категории", href: "#" },
      { title: "Типы оплат", href: "#" },
      { title: "Прайс-листы", href: "#" },
      { title: "Единицы измерения", href: "/measurement-units-page" },
      { title: "Роли", href: "/role" },
      { title: "Города", href: "/cities" },
      { title: "Должности", href: "/position" },
      { title: "Склады", href: "/wirehouse" },
      { title: "Статьи расходов", href: "/expense" },
      
    ],
  },
  { title: "Акции", href: "/promotion" },
  { title: "Клиенты", href: "/clients-list" },
  { title: "Клиенты ЮЛ", href: "/legal-entity-page" },
  { title: "Отчеты", href: "/reports" },
  { title: "Опросы", href: "/survey" },
  { title: "Список точек", href: "/points" },
];

export function LeftDashboard() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const formattedDate = now.toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
      });
      setCurrentTime(`${formattedTime} • ${formattedDate}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Toggle expandable menu items
  const toggleExpand = (title: string) => {
    setExpanded(expanded === title ? null : title);
  };

  return (
    <nav className="w-64 bg-gray-100 h-screen shadow-lg p-4">
      {/* Logo & Time */}
      <div className="flex flex-col items-center">
        <Image src={Logo} alt="Хозяюшка" className="pb-5 pt-5" />
        <h2 className="text-lg font-semibold mb-4 text-center">{currentTime}</h2>
      </div>

      {/* Navigation Items */}
      {navItems.map((item, index) => (
        <div key={index} className="mb-2">
          {/* Parent Item */}
          {item.items ? (
            <button
              onClick={() => toggleExpand(item.title)}
              className="flex justify-between w-full text-left text-sm font-medium text-gray-900 hover:text-blue-700 p-2 rounded-md hover:bg-gray-200"
            >
              {item.title}
              <span>{expanded === item.title ? "▲" : "▼"}</span>
            </button>
          ) : (
            <Link
              href={item.href}
              className="block text-sm font-medium text-gray-900 hover:text-blue-700 p-2 rounded-md hover:bg-gray-200"
            >
              {item.title}
            </Link>
          )}

          {/* Submenu with Smooth Opening */}
          <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
              expanded === item.title ? "max-h-80" : "max-h-0"
            }`}
          >
            {item.items && (
              <ul className="mt-1 space-y-1 pl-4">
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={subItem.href}
                      className="block text-sm text-gray-600 hover:text-blue-700 p-1 rounded-md hover:bg-gray-200"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </nav>
  );
}
