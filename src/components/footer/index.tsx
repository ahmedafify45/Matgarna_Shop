import Link from "next/link";
import { Routes } from "@/constants/enums";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export default async function Footer() {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);

  const links = [
    {
      id: crypto.randomUUID(),
      title: translations.navbar.product,
      href: Routes.PRODUCT,
    },
    {
      id: crypto.randomUUID(),
      title: translations.navbar.about,
      href: Routes.ABOUT,
    },
    {
      id: crypto.randomUUID(),
      title: translations.navbar.contact,
      href: Routes.CONTACT,
    },
  ];

  return (
    <footer className="bg-gray-200 rounded-lg shadow-sm mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h3 className="font-semibold text-2xl">🏪 {translations.logo}</h3>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {links.map((link) => (
              <li key={link.id} className="me-4 md:me-6">
                <Link
                  href={`/${locale}/${link.href}`}
                  className="hover:text-primary text-gray-500 transition-all duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {translations.copyRight}
        </span>
      </div>
    </footer>
  );
}
