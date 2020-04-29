module.exports={
	categories: [
		{id: 1, name: "Pale Lagers and Pilsners"},
		{id: 2, name: "Brown Ales"},
		{id: 3, name: "Pale Ales"},
		{id: 4, name: "Porters"},
		{id: 5, name: "Stouts"}
	],

	beers: [
		{
		 id: 1,
		 name: "American Lager",
		 temp: "-1.11-4.44°C",
		 ABV: "3.2-4.0%",
		 IBU: 10,
		 pairs: "American cuisine, spicy food",
		 description: "light in flavor, color and alcohol content",
		 image:"/img/american-lager.jpg",
		 category_id: 1

		},
		{
		 id: 2,
		 name: "German Helles",
		 temp: "4.44-7.22°C",
		 ABV: "4.8-5.6%",
		 IBU: 22,
		 pairs: "German cuisine, pork, brie",
		 description: "maltier than a traditional pilsner and features a bright gold color",
		  image:"/img/german-helles.jpg",
		 category_id: 1
		},
		{
		 id: 3,
		 name: "Czech or Bohemian Pilsner",
		 temp: "4.44-7.22°C",
		 ABV: "4.1-5.1%",
		 IBU: 38,
		 pairs: "Lagunitas PILS, Dogfish Head Piercing Pils",
		 description: "straw-colored beer with a noticeably bitter hop flavor. These beers can sometimes have a floral aroma",
		 image:"/img/czech-or-bohemian-pilsner.jpg",
		 category_id: 1
		},
		{
		 id: 4,
		 name: "German Pilsner",
		 temp: "4.44-7.22°C",
		 ABV: "4.5-5.3%",
		 IBU: 33,
		 pairs: "German cuisine, poultry, fish, spicy cheese",
		 description: "pale gold in color with a medium hop flavor and a slight note of maltiness",
		 image:"/img/german-pilsner.jpg",
		 category_id: 1
		},
		{
		 id: 5,
		 name: "American Brown Ale",
		 temp: "7.22-10°C",
		 ABV: "4.2-6.3%",
		 IBU: 35,
		 pairs: "American cuisine, heavy foods like beef stew, red meat",
		 description: "dark beer without the bitterness of porters and stouts. This style boasts a dark caramel color and a medium to full-bodied profile",
		  image:"/img/american-brown-ale.jpg",
		 category_id: 2
		},
		{
		 id: 6,
		 name: "English Brown Ale",
		 temp: "4.44-7.22°C",
		 ABV: "4.0-5.5%",
		 IBU: 20,
		 pairs: "American cuisine, heavy foods, red meat, poultry, gouda cheese",
		 description: "features a nutty malt flavor with a caramel aroma",
		  image:"/img/english-brown-ale.jpg",
		 category_id: 2
		},
		{
		 id: 7,
		 name: "American Imperial Porter",
		 temp: "7.22-10°C",
		 ABV: "7.0-12.0%",
		 IBU: 43,
		 pairs: "American cuisine, barbecue, meat, and asiago cheese",
		 description: "dark in color, but lacking in burnt malt taste. They also boast a malty sweetness",
		  image:"/img/american-imperial-porter.jpg",
		 category_id: 4
		},
		{
		 id: 8,
		 name: "English Brown Porter",
		 temp: "10-12.77°C",
		 ABV: "4.5-6.0%",
		 IBU: 25,
		 pairs: "American and English cuisines, meat, chocolate, and fontina cheese",
		 description: "similar to the American style, but usually with a lower alcohol content and less malt sweetness",
		  image:"/img/english-brown-porter.jpg",
		 category_id: 4
		},
		{
		 id: 9,
		 name: "Robust Porter",
		 temp: "7.22-10°C",
		 ABV: "5.1-6.6%",
		 IBU: 33,
		 pairs: "American and English cuisines, heavy foods like stew, and colby cheese",
		 description: "stronger and more bitter than a brown porter with a subtle caramel flavor",
		  image:"/img/robust-porter.jpg",
		 category_id: 4
		},
		{
		 id: 10,
		 name: "American Stout",
		 temp: "7.22-10°C",
		 ABV: "5.7-8.9%",
		 IBU: 48,
		 pairs: "Heavy foods, meat, oysters, chocolate, and brie cheese",
		 description: "feature malt flavors working to create strong chocolate and coffee notes, but without overpowering hop bitterness",
		  image:"/img/american-stout.jpg",
		 category_id: 5
		},
		{
		 id: 11,
		 name: "Oatmeal Stout",
		 temp: "10-12.77°C",
		 ABV: "3.8-6.0%",
		 IBU: 30,
		 pairs: "Meat, shellfish, chocolate, camembert cheese",
		 description: "feature oatmeal in their malt blend. This adds smoothness and sweetness to the beer",
		  image:"/img/oatmeal-stout.jpg",
		 category_id: 5
		},
		{
		 id: 12,
		 name: "Irish Dry Stout",
		 temp: "7.22-10°C",
		 ABV: "3.8-5.0%",
		 IBU: 35,
		 pairs: "Heavy food like beef and stew, barbecue, burgers",
		 description: "dark beers; black in color with a bitterness that comes from roasted barley",
		  image:"/img/irish-dry-stout.jpg",
		 category_id: 5
		},
		{
		 id: 13,
		 name: "Milk Stout",
		 temp: "10-12.77°C",
		 ABV: "4.0-7.0%",
		 IBU: 20,
		 pairs: "Mexican cuisine, beef, chocolate, ice cream, and cheddar or goat cheese",
		 description: "Lactose sugar adds a sweet caramel or chocolate flavor to milk stouts",
		  image:"/img/milk-stout.jpg",
		 category_id: 5
		},
		{
		 id: 14,
		 name: "American Amber Ale",
		 temp: "7.22-10°C",
		 ABV: "4.4-6.1%",
		 IBU: 35,
		 pairs: "American cuisine, meat, fish, bleu cheese",
		 description: "American amber ale is a malty, medium-bodied beer with a caramel flavor and amber color.",
		  image:"/img/american-amber-ale.jpg",
		 category_id: 3
		},
		{
		 id: 15,
		 name: "American Pale Ale",
		 temp: "7.22-10°C",
		 ABV: "4.4-5.4%",
		 IBU: 40,
		 pairs: "Fish and seafood, poultry, cheddar cheese",
		 description: "American pale ale is a medium-bodied beer with a noticable hop flavor and a light copper color.",
		  image:"/img/american-pale-ale.jpg",
		 category_id: 3
		},
		{
		 id: 16,
		 name: "Blonde Ale",
		 temp: "1.66-4.44°C",
		 ABV: "4.1-5.1%",
		 IBU: 20,
		 pairs: "Italian cuisine, spicy food, fish, pepper jack cheese",
		 description: "Blonde ales balance the flavors of malt and hops nicely, and they often have a fruity aroma.",
		  image:"/img/blonde-ale.jpg",
		 category_id: 3

		}
    ]
}