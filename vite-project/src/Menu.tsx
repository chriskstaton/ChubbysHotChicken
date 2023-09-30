import "./App.scss";
import MenuSection from "./MenuSection";

export type MenuSection =
	| "Platters"
	| "Sandos"
	| "Flock Box"
	| "Sides"
	| "A La Cart"
	| "Kids' Meals"
	| "Desserts";

export interface item {
	name: string;
	price: number;
	description?: string;
	category: MenuSection;
	flavors?: string[];
}

// const menuPlatters: item[] = [
// 	{
// 		name: "6pc Nuggets",
// 		price: 8.99,
// 		description: "",
// 		category: "Platters",
// 	},
// 	{
// 		name: "2pc Tenders",
// 		price: 8.99,
// 		description: "",
// 		category: "Platters",
// 	},
// 	{
// 		name: "3pc Tenders",
// 		price: 11.99,
// 		description: "",
// 		category: "Platters",
// 	},
// 	{
// 		name: "3 Whole Wings",
// 		price: 8.99,
// 		description: "",
// 		category: "Platters",
// 	},
// 	{
// 		name: "5 Whole Wings",
// 		price: 12.99,
// 		description: "",
// 		category: "Platters",
// 	},
// 	{
// 		name: "2pc Dark (leg & thigh)",
// 		price: 8.99,
// 		description: "",
// 		category: "Platters",
// 	},
// 	{
// 		name: "4pc Dark (legs & thighs)",
// 		price: 12.99,
// 		description: "",
// 		category: "Platters",
// 	},
// 	{
// 		name: "Chicken & Waffle",
// 		price: 13.99,
// 		description:
// 			"Housemade Waffle w/ 2 Pieces of Chicken served with Butter and Maple Syrup",
// 		category: "Platters",
// 	},
// ];

// const menuSandos: item[] = [
// 	{
// 		name: "Foghorn",
// 		price: 10.99,
// 		description:
// 			"Nashville Hot Chicken on brioche w/ jalapeño slaw, pickles, and sauce sauce",
// 		category: "Sandos",
// 	},
// 	{
// 		name: "Fricken Chicken",
// 		price: 8.99,
// 		description: "Crispy Chicken on brioche w/ pickles and sauce sauce",
// 		category: "Sandos",
// 	},
// 	{
// 		name: "Foghorn Tacos (2)",
// 		price: 10.99,
// 		description:
// 			"Chopped Nashville Chicken on flour tortilla w/ jalapeño slaw and sauce sauce",
// 		category: "Sandos",
// 	},
// ];

// const menuFlockBox: item[] = [
// 	{
// 		name: "Small Flock",
// 		price: 29.99,
// 		description: "1/2 Dark, 3 Wings, 2 Tenders, 4 Sides, 4 Rolls, 4 Sauces",
// 		category: "Flock Box",
// 	},
// 	{
// 		name: "Large Flock",
// 		price: 39.99,
// 		description: "1/2 Dark, 5 Wings, 4 Tenders, 6 Sides, 6 Rolls, 6 Sauces",
// 		category: "Flock Box",
// 	},
// ];

// const menuALaCart: item[] = [
// 	{
// 		name: "Chicken piece",
// 		price: 2.99,
// 		description: "",
// 		category: "A La Cart",
// 	},
// 	{
// 		name: "Brioche bun",
// 		price: 1.99,
// 		description: "",
// 		category: "A La Cart",
// 	},
// 	{
// 		name: "Waffle",
// 		price: 7.99,
// 		description: "",
// 		category: "A La Cart",
// 	},
// 	{
// 		name: "Cheese sauce",
// 		price: 1.29,
// 		description: "",
// 		category: "A La Cart",
// 	},
// 	{
// 		name: "Dipping sauce",
// 		price: 0.99,
// 		description: "Sauce Sauce, Chubby's Sauce",
// 		category: "A La Cart",
// 	},
// ];

// const menuSides: item[] = [
// 	{
// 		name: "Coleslaw",
// 		price: 2.49,
// 		description: "",
// 		category: "Sides",
// 	},
// 	{
// 		name: "Crispy Fries",
// 		price: 2.49,
// 		description: "",
// 		category: "Sides",
// 	},
// 	{
// 		name: "Fried Okra",
// 		price: 2.99,
// 		description: "",
// 		category: "Sides",
// 	},
// 	{
// 		name: "Mac & Cheese",
// 		price: 3.49,
// 		description: "",
// 		category: "Sides",
// 	},
// 	{
// 		name: "Onion Rings",
// 		price: 4.99,
// 		description: "",
// 		category: "Sides",
// 	},
// 	{
// 		name: "Friendly Fire Fries",
// 		price: 8.99,
// 		description:
// 			"Loaded with chopped Nashville Hot Chicken, nacho cheese, sauce sauce, and jalapeños",
// 		category: "Sides",
// 	},
// ];

// const flavorsMilkshakes = [
// 	{ flavor: "Vanilla" },
// 	{ flavor: "Strawberry" },
// 	{ flavor: "Banana" },
// 	{ flavor: "Chocolate" },
// 	{ flavor: "Oreo" },
// ];

const flavorsMilkshakes = [
	"Vanilla",
	"Strawberry",
	"Banana",
	"Chocolate",
	"Oreo",
];

// const menuDessert: item[] = [
// 	{
// 		name: "Milkshakes",
// 		price: 6.49,
// 		category: "Desserts",
// 		flavors: flavorsMilkshakes,
// 	},
// 	{
// 		name: "Banana Pudding",
// 		price: 2.49,
// 		category: "Desserts",
// 	},
// ];

// const menuKids: item[] = [
// {
// 	name: "4pc Nuggets",
// 	price: 5.99,
// 	description: "",
// 	category: "Kids' Meals",
// },
// {
// 	name: "1pc Tender",
// 	price: 5.99,
// 	description: "",
// 	category: "Kids' Meals",
// },
// {
// 	name: "Foghorn Taco (1)",
// 	price: 5.99,
// 	description: "",
// 	category: "Kids' Meals",
// },
// ];

const menuArray: item[] = [
	{
		name: "6pc Nuggets",
		price: 8.99,
		description: "",
		category: "Platters",
	},
	{
		name: "2pc Tenders",
		price: 8.99,
		description: "",
		category: "Platters",
	},
	{
		name: "3pc Tenders",
		price: 11.99,
		description: "",
		category: "Platters",
	},
	{
		name: "3 Whole Wings",
		price: 8.99,
		description: "",
		category: "Platters",
	},
	{
		name: "5 Whole Wings",
		price: 12.99,
		description: "",
		category: "Platters",
	},
	{
		name: "2pc Dark (leg & thigh)",
		price: 8.99,
		description: "",
		category: "Platters",
	},
	{
		name: "4pc Dark (legs & thighs)",
		price: 12.99,
		description: "",
		category: "Platters",
	},
	{
		name: "Chicken & Waffle",
		price: 13.99,
		description:
			"Housemade Waffle w/ 2 Pieces of Chicken served with Butter and Maple Syrup",
		category: "Platters",
	},
	{
		name: "Foghorn",
		price: 10.99,
		description:
			"Nashville Hot Chicken on brioche w/ jalapeño slaw, pickles, and sauce sauce",
		category: "Sandos",
	},
	{
		name: "Fricken Chicken",
		price: 8.99,
		description: "Crispy Chicken on brioche w/ pickles and sauce sauce",
		category: "Sandos",
	},
	{
		name: "Foghorn Tacos (2)",
		price: 10.99,
		description:
			"Chopped Nashville Chicken on flour tortilla w/ jalapeño slaw and sauce sauce",
		category: "Sandos",
	},
	{
		name: "Small Flock",
		price: 29.99,
		description: "1/2 Dark, 3 Wings, 2 Tenders, 4 Sides, 4 Rolls, 4 Sauces",
		category: "Flock Box",
	},
	{
		name: "Large Flock",
		price: 39.99,
		description: "1/2 Dark, 5 Wings, 4 Tenders, 6 Sides, 6 Rolls, 6 Sauces",
		category: "Flock Box",
	},
	{
		name: "Chicken piece",
		price: 2.99,
		description: "",
		category: "A La Cart",
	},
	{
		name: "Brioche bun",
		price: 1.99,
		description: "",
		category: "A La Cart",
	},
	{
		name: "Waffle",
		price: 7.99,
		description: "",
		category: "A La Cart",
	},
	{
		name: "Cheese sauce",
		price: 1.29,
		description: "",
		category: "A La Cart",
	},
	{
		name: "Dipping sauce",
		price: 0.99,
		description: "Sauce Sauce, Chubby's Sauce",
		category: "A La Cart",
	},
	{
		name: "Coleslaw",
		price: 2.49,
		description: "",
		category: "Sides",
	},
	{
		name: "Crispy Fries",
		price: 2.49,
		description: "",
		category: "Sides",
	},
	{
		name: "Fried Okra",
		price: 2.99,
		description: "",
		category: "Sides",
	},
	{
		name: "Mac & Cheese",
		price: 3.49,
		description: "",
		category: "Sides",
	},
	{
		name: "Onion Rings",
		price: 4.99,
		description: "",
		category: "Sides",
	},
	{
		name: "Friendly Fire Fries",
		price: 8.99,
		description:
			"Loaded with chopped Nashville Hot Chicken, nacho cheese, sauce sauce, and jalapeños",
		category: "Sides",
	},
	{
		name: "Milkshakes",
		price: 6.49,
		category: "Desserts",
		flavors: flavorsMilkshakes,
	},
	{
		name: "Banana Pudding",
		price: 2.49,
		category: "Desserts",
	},
	{
		name: "4pc Nuggets",
		price: 5.99,
		description: "",
		category: "Kids' Meals",
	},
	{
		name: "1pc Tender",
		price: 5.99,
		description: "",
		category: "Kids' Meals",
	},
	{
		name: "Foghorn Taco (1)",
		price: 5.99,
		description: "",
		category: "Kids' Meals",
	},
];

// const filterPlatter = menu.filter((item) => item.category === "Platters");

const Menu = () => {
	return (
		<div className="menu-wrapper">
			<MenuSection category={"Platters"} menuArray={menuArray} />
			<MenuSection category={"Sandos"} menuArray={menuArray} />
			<MenuSection category={"Flock Box"} menuArray={menuArray} />
			<MenuSection category={"Sides"} menuArray={menuArray} />
			<MenuSection category={"A La Cart"} menuArray={menuArray} />
			<MenuSection category={"Kids' Meals"} menuArray={menuArray} />
			<MenuSection
				category={"Desserts"}
				menuArray={menuArray}
				flavors={flavorsMilkshakes}
			/>

			{/* <h3>Desserts</h3>
			<ul>
				<li key={"Milkshakes"}>
					<span>Milkshakes</span>
					<div>$6.49</div>
					<span>
						{flavorsMilkshakes.map((item, index) => (
							<span className="flavors">{(index ? ", " : "") + item}</span>
						))}
					</span>
				</li>
				<li key={"Banana Pudding"}>
					<span>Banana Pudding</span>
					<div>$6.49</div>
				</li>
			</ul>
*/}
		</div>
	);
};
export default Menu;
