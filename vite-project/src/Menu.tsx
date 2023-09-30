import "./App.scss";

const menuPlatters = [
	{
		name: "6pc Nuggets",
		price: 8.99,
		description: "",
	},
	{
		name: "2pc Tenders",
		price: 8.99,
		description: "",
	},
	{
		name: "3pc Tenders",
		price: 11.99,
		description: "",
	},
	{
		name: "3 Whole Wings",
		price: 8.99,
		description: "",
	},
	{
		name: "5 Whole Wings",
		price: 12.99,
		description: "",
	},
	{
		name: "2pc Dark (leg & thigh)",
		price: 8.99,
		description: "",
	},
	{
		name: "4pc Dark (legs & thighs)",
		price: 12.99,
		description: "",
	},
	{
		name: "Chicken & Waffle",
		price: 13.99,
		description:
			"Housemade Waffle w/ 2 Pieces of Chicken served with Butter and Maple Syrup",
	},
];

const menuSandos = [
	{
		name: "Foghorn",
		price: 10.99,
		description:
			"Nashville Hot Chicken on brioche w/ jalapeño slaw, pickles, and sauce sauce",
	},
	{
		name: "Fricken Chicken",
		price: 8.99,
		description: "Crispy Chicken on brioche w/ pickles and sauce sauce",
	},
	{
		name: "Foghorn Tacos (2)",
		price: 10.99,
		description:
			"Chopped Nashville Chicken on flour tortilla w/ jalapeño slaw and sauce sauce",
	},
];

const menuFlockBox = [
	{
		name: "Small Flock",
		price: 29.99,
		description: "1/2 Dark, 3 Wings, 2 Tenders, 4 Sides, 4 Rolls, 4 Sauces",
	},
	{
		name: "Large Flock",
		price: 39.99,
		description: "1/2 Dark, 5 Wings, 4 Tenders, 6 Sides, 6 Rolls, 6 Sauces",
	},
];

const menuALaCart = [
	{
		name: "Chicken piece",
		price: 2.99,
		description: "",
	},
	{
		name: "Brioche bun",
		price: 1.99,
		description: "",
	},
	{
		name: "Waffle",
		price: 7.99,
		description: "",
	},
	{
		name: "Cheese sauce",
		price: 1.29,
		description: "",
	},
	{
		name: "Dipping sauce",
		price: 0.99,
		description: "Sauce Sauce, Chubby's Sauce",
	},
];

const menuSides = [
	{
		name: "Coleslaw",
		price: 2.49,
		description: "",
	},
	{
		name: "Crispy Fries",
		price: 2.49,
		description: "",
	},
	{
		name: "Fried Okra",
		price: 2.99,
		description: "",
	},
	{
		name: "Mac & Cheese",
		price: 3.49,
		description: "",
	},
	{
		name: "Onion Rings",
		price: 4.99,
		description: "",
	},
	{
		name: "Friendly Fire Fries",
		price: 8.99,
		description:
			"Loaded with chopped Nashville Hot Chicken, nacho cheese, sauce sauce, and jalapeños",
	},
];

const submenuMilkshakes = [
	{ flavor: "Vanilla" },
	{ flavor: "Strawberry" },
	{ flavor: "Banana" },
	{ flavor: "Chocolate" },
	{ flavor: "Oreo" },
];

// const menuDessert = [
// 	{
// 		name: "Milkshakes",
// 		price: 6.49,
// 		flavors: [submenuMilkshakes],
// 	},
// 	{
// 		name: "Banana Pudding",
// 		price: 2.49,
// 	},
// ];

const menuKids = [
	{
		name: "4pc Nuggets",
		price: 5.99,
		description: "",
	},
	{
		name: "1pc Tender",
		price: 5.99,
		description: "",
	},
	{
		name: "Foghorn Taco (1)",
		price: 5.99,
		description: "",
	},
];

const Menu = () => {
	return (
		<div>
			{/* <h2>Menu</h2> */}
			<h3>Platters</h3>
			<ul>
				{menuPlatters.map((item) => (
					<li key={item.name}>
						<span>{item.name}</span>
						<div>${item.price}</div>
						{item.description ? <span>{item.description}</span> : <></>}
					</li>
				))}
			</ul>
			<h3>Sandos</h3>
			<ul>
				{menuSandos.map((item) => (
					<li key={item.name}>
						<span>{item.name}</span>
						<div>${item.price}</div>
						{item.description ? <span>{item.description}</span> : <></>}
					</li>
				))}
			</ul>
			<h3>Flock Box</h3>
			<ul>
				{menuFlockBox.map((item) => (
					<li key={item.name}>
						<span>{item.name}</span>
						<div>${item.price}</div>
						{item.description ? <span>{item.description}</span> : <></>}
					</li>
				))}
			</ul>
			<h3>A La Cart</h3>
			<ul>
				{menuALaCart.map((item) => (
					<li key={item.name}>
						<span>{item.name}</span>
						<div>${item.price}</div>
						{item.description ? <span>{item.description}</span> : <></>}
					</li>
				))}
			</ul>
			<h3>Sides</h3>
			<ul>
				{menuSides.map((item) => (
					<li key={item.name}>
						<span>{item.name}</span>
						<div>${item.price}</div>
						{item.description ? <span>{item.description}</span> : <></>}
					</li>
				))}
			</ul>
			{/* <ul>
				{menuDessert.map((item, index) => (
					<li key={item.name}>
						<span>{item.name}</span>
						<span>${item.price}</span>
						{item.flavors ? (
							<span>{(index ? ", " : "") + item.flavors}</span>
						) : (
							<></>
						)}
					</li>
				))}
			</ul> */}
			<h3>Desserts</h3>
			<ul>
				<li key={"Milkshakes"}>
					<span>Milkshakes</span>
					<div>$6.49</div>
					<span>
						{submenuMilkshakes.map((item, index) => (
							<span className="flavors">
								{(index ? ", " : "") + item.flavor}
							</span>
						))}
					</span>
				</li>
				<li key={"Banana Pudding"}>
					<span>Banana Pudding</span>
					<div>$6.49</div>
				</li>
			</ul>
			<h3>Kid's Meals</h3>
			<ul>
				{menuKids.map((item) => (
					<li key={item.name}>
						<span>{item.name}</span>
						<span>${item.price}</span>
						{item.description ? <span>{item.description}</span> : <></>}
					</li>
				))}
			</ul>
		</div>
	);
};
export default Menu;
