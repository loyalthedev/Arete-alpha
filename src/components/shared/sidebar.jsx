import { SIDE_LINKS } from "@/data/header.data";

function Sidebar({ links }) {
    return (
        <section className="rotate-[-90deg] w-20">
            <ul className="flex-row gap-1 hidden lg:flex">
            {links.map((item, index) => (
              <li
                key={item.title}
                className={`text-grey text-lg uppercase px-4 py-1 cursor-pointer`}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </section>
    )
}

export default Sidebar;