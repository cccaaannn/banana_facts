function addBananaToUi(){
    const s = document.createElement("span");
    s.id = "banana-span";
    
    const i = document.createElement("img");
    i.id = "banana";
    i.src = chrome.extension.getURL('static/images/banana.png')

    s.appendChild(i);
    document.body.appendChild(s);
    s.addEventListener("click", showBananaFacts); 
}

function showBananaFacts(){
    const rand = Math.floor(Math.random() * bananaFacts.length);
    alert(bananaFacts[rand] + "\n\nsource: thebananapolice.com");
}

// add banana if active
chrome.storage.sync.get({
    isBananaActive: true
}, function(items) {
    if(items.isBananaActive){
        addBananaToUi();
    }
});



bananaFacts = [
// https://thebananapolice.com/fun-facts/

"The scientific name for banana is musa sapientum, which means “fruit of the wise men.”",
"Bananas float in water, as do apples and watermelons.",
"Hawaii is the only place in the U.S. where bananas are grown commercially, although at one time they were also grown in southern California and Florida. The overwhelming majority of the bananas Americans eat come from countries in Latin America and South America, including Costa Rica, Ecuador, Colombia, Honduras, Panama, and Guatemala.",
"The type of banana you see in the supermarket is called a Cavendish banana. The preferred variety was originally the Gros Michel, which essentially became extinct by 1960, thanks to a fungus called Panama disease.",
"Some cultures (most notably Japan) use the fiber in the banana plant to make fabric and sometimes even paper.",
"The fastest marathon ever run by a competitor dressed as a fruit was 2 hours, 58 minutes, and 20 seconds—recorded at the Barcelona Marathon on March 6, 2011. The runner was Patrick Wightman from the United Kingdom, who dressed as a banana.",
"The Banana Club Museum, located on Highway 111 in Mecca, Calif. (just south of Palm Springs), houses the world’s largest collection devoted to any one fruit. It contains more than 17,000 banana items, most of which have been donated by members. (To join the club, visit www.bananaclub.com.)",

// AMAZING BUT TRUE THINGS YOU CAN DO WITH BANANA PEELS (AND BANANAS):
"Thanks to its oil, rubbing the inside of a banana peel on a mosquito bite (or other bug bite) or on poison ivy will help keep it from itching and getting inflamed.",
"If you rub the inside of a banana peel on a scrape or burn, it will help the pain go away, keep the swelling down, and keep the wound from getting infected.",
"If you rub the inside of a small piece of banana peel on a wart every night (or tape a piece of peel over the wart), the potassium in the peel can make the wart disappear in one to two weeks.",
"If you tape a banana peel over a splinter, the enzymes help the splinter work its way out of your skin (and also heal the wound).",
"To whiten teeth naturally, rub the inside of a banana peel on your teeth for about two minutes every night. If you gargle with salt water, this will heighten the effect. Expect results in about two weeks. It works because of the effect of the potassium, magnesium, and manganese in the banana peel.",
"Bananas make great conditioner that helps restore dry, damaged hair. Mash a banana and add a tablespoon of heavy cream and a tablespoon of honey to the mixture. Then apply it to dry hair, cover your hair with a shower cap, and then wrap your head in a warm towel. Leave it on for up to an hour and then rinse thoroughly with warm water before shampooing.",
"Rubbing a banana peel on your forehead can help cure a headache.",
"Bananas and banana peels make great fertilizer (you can compost them, bury them whole, or cut them in small pieces and mix them with garden soil) because of their phosphorous and potassium content. Roses especially like them.",
"Rubbing the inside of a banana peel on houseplant leaves makes the leaves shiny.",
"You can use the inside of a banana peel to clean and polish leather shoes.",
"Banana peels also make a good silver polish—just rub silver with the inside of a peel and then buff with a cloth.",

// BANANA STATISTICS:
"More than 100 billion bananas are eaten every year in the world, making them the fourth most popular agricultural product.",
"Americans eat an average of 27 pounds of bananas per person every year.",
"More than 96 percent of American households buy bananas at least once a month.",
"51 percent of bananas are eaten for breakfast at home.",
"The highest average per capita consumption of bananas in the world is in Ecuador, where residents eat an average of 218 pounds of bananas per person every year.",
"The Ugandan word matooke means both “food” and “banana.”",
"India produces more bananas than any other country on the planet, accounting for about 28 percent of the worldwide crop. (China is number two, with ten percent.)",
"A man in India once ate 81 bananas in a half hour.",
"More songs have been written about bananas than about any other fruit.",

// HOW BANANAS GROW AND WHAT BANANA PLANTS ARE LIKE:
"Bananas don’t actually grow on trees—they grow on plants that are officially classified as an herb (not surprisingly, the world’s largest herb). They’re in the same family as lilies, orchids, and palms.",
"Banana plants grow up to 25 feet high, and their leaves can grow to be 9 feet long and 2 feet wide. Their roots can be hundreds of years old.",
"Bananas are technically berries.",
"Banana plants grow not from seeds but from bulbs.",
"A cluster of bananas is called a hand, and a single banana is called a finger. Each banana hand has about 10 to 20 fingers.",
"About 75 percent of the weight of a banana is water.",
"A few varieties of wild bananas include bubblegum pink bananas with fuzzy skins, green-and-white striped bananas with pulp the color of orange sherbet, and bananas that taste like strawberries when they’re cooked.",

// HISTORICAL TIDBITS ABOUT BANANAS:
"Bananas first appeared in written history in the 6th century B.C.",
"Bananas have been depicted in ancient Egyptian hieroglyphs.",
"Bananas were probably the first cultivated fruit, and the first banana farms were located in southeast Asia.",
"Portuguese sailors introduced bananas to the Americas, bringing them from West Africa in the 16th century. Bananas first became popular with the masses at the 1876 Philadelphia Centennial Celebration, where they were sold wrapped in foil for 10 cents each.",
"David Evans Strickler invented the banana split in 1904 when he was a 23-year-old employee at the Tassel Pharmacy soda fountain in Latrobe, Pennsylvania.",

// WHAT EATING BANANAS CAN DO FOR YOU:
"Bananas are low in calories and have no fat, no sodium, and no cholesterol. They contain vitamin C, potassium, fiber, and vitamin B6.",
"Research shows that eating bananas may lower the risk of heart attacks and strokes, as well as decrease the risk of getting some cancers.",
"Bananas are the only fruit that contains the amino acid tryptophan plus vitamin B6. They help your body produce serotonin—a natural substance that alleviates depression.",
"About half of all people who are allergic to latex are often also allergic to bananas.",
"Bananas are naturally slightly radioactive (thanks to their potassium content)—but the level of radiation is not high enough to cause harm.",

// TIP-TOP BANANA HANDLING TIPS:
"Wrapping banana stems tightly in cling wrap will make them last three to five days longer.",
"Banana peels are actually edible if cooked.",
"If you peel a banana from the bottom up (holding on to the stem like a handle), you will avoid the stringy bits that cling to the fruit inside.",
"Bananas ripen best if they are picked when green.",
"To ripen bananas faster, put them in a sealed container—ideally a brown paper bag. Adding another fruit to the container (such as an apple or even a tomato) will further speed the ripening.",
"If you put a banana in the refrigerator, the peel will turn dark brown or black, but it won’t affect the fruit inside."

]
