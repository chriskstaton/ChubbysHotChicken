// import App from "./App.tsx";
import "./index.scss";
import { item } from "./Menu";

const MenuSection = ({
	menuArray,
	category,
	flavors,
}: {
	menuArray: item[];
	category: string;
	flavors?: string[];
}) => {
	const categoryItems = menuArray.filter((item) => item.category === category);
	return (
		<>
			<h3>{category}</h3>
			<ul>
				{categoryItems.map((item) => (
					<li key={item.name}>
						<span>{item.name}</span>
						{item.flavors ? (
							<ul className="milkshake-list">
								{flavors?.map((item) => (
									<li className="milkshake-flavors">{item}</li>
								))}
							</ul>
						) : (
							<></>
						)}
						<div>${item.price}</div>
						{item.description ? <span>{item.description}</span> : <></>}
					</li>
				))}
			</ul>
		</>
	);
};

export default MenuSection;
