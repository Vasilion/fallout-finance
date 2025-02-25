import Link from "next/link";
import { useRouter } from "next/router";

const TabNavigation = () => {
  const router = useRouter();
  const tabs = [
    { name: "Profile", href: "/profile" },
    { name: "Assets", href: "/assets" },
    { name: "Suggestions", href: "/suggestions" },
  ];

  return (
    <nav className="pipboy-nav">
      <ul>
        {tabs.map((tab) => (
          <li key={tab.href}>
            <Link href={tab.href} legacyBehavior>
              <a className={router.pathname === tab.href ? "active" : ""}>
                {tab.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabNavigation;
