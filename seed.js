const { db } = require("./server/db/index.js");
const Product = require("./server/db/models/Product");
const User = require("./server/db/models/User");

const green = "#C4E4D4";
const red = "#E4D7C4";
const blue = "#C4DFE4";
const yellow = "#FAF3CA";

const products = [
  {
    name: "Bulbasaur",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "/pokemon/Bulbasaur.png",
    price: 1,
    color: green,
  },
  {
    name: "Ivysaur",
    description:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "/pokemon/Ivysaur.png",
    price: 2,
    color: green,
  },
  {
    name: "Venusaur ",
    description:
      "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "/pokemon/Venusaur.png",
    price: 3,
    color: green,
  },
  {
    name: "Charmander",
    description:
      "The power of Charmander's flame attacks can be gauged by the size of the flame on its tail.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "/pokemon/Charmander.png",
    price: 1,
    color: red,
  },
  {
    name: "Charmeleon",
    description:
      "Charmeleon, like its other evolutionary forms, can naturally breathe fire. Its powers, though, are much greater than Charmander's, but not as great as Charizard's",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "/pokemon/Charmeleon.png",
    price: 2,
    color: red,
  },
  {
    name: "Charizard",
    description:
      "The fire on Charizard's tail will change to a bluish-white color if it is furious.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "/pokemon/Charizard.png",
    price: 3,
    color: red,
  },
  {
    name: "Squirtle",
    description:
      "Squirtle is a small, light-blue Pokémon with an appearance similar to a turtle.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "/pokemon/Squirtle.png",
    price: 1,
    color: blue,
  },
  {
    name: "Wartortle",
    description:
      "Wartortle is a small, bipedal, turtle-like Pokémon with a similar appearance to that of its pre-evolved form, Squirtle.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "/pokemon/Wartortle.png",
    price: 2,
    color: blue,
  },
  {
    name: "Blastoise",
    description:
      "Blastoise, like Wartortle and Squirtle, can naturally shoot water, though not from its mouth, but from its large cannons.",
    category: "pokemon",
    generation: "I",
    inventory: 100,
    imageUrl: "/pokemon/Blastoise.png",
    price: 3,
    color: blue,
  },
  {
    name: "Chikorita",
    description:
      "Chikorita are docile and friendly, spending a lot of time in the sun to soak up the sun's rays.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl: "/pokemon/Chikorita.png",
    price: 1,
    color: green,
  },
  {
    name: "Bayleef",
    description:
      "Around its neck are several small leaves that Bayleef can shoot at opponents.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl: "/pokemon/Bayleef.png",
    price: 2,
    color: green,
  },
  {
    name: "Meganium",
    description:
      "Meganium is a tall, heavy Pokémon with a light green body, a pink, white, and yellow flower around its very long neck, and yellow eyes.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl: "/pokemon/Meganium.png",
    price: 3,
    color: green,
  },
  {
    name: "Cyndaquil",
    description:
      "They are covered with a flame-resistant fur that is dark blue in color on its back to its head and light yellow on its underside.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl: "/pokemon/Cyndaquil.png",
    price: 1,
    color: red,
  },
  {
    name: "Quilava",
    description:
      "Quilava is a more slender version of its pre-evolution, while also resembling a weasel.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl: "/pokemon/Quilava.png",
    price: 2,
    color: red,
  },
  {
    name: "Typhlosion",
    description:
      "Typhlosion looks like a wolverine with a mane of spiky flames around its neck.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl: "/pokemon/Typhlosion.png",
    price: 3,
    color: red,
  },
  {
    name: "Totodile",
    description:
      "Totodile is a small Pokémon that appears as a bipedal crocodile. While most of a Totodile's body is blue, they have a yellow, V-shaped marking across their chest, red eyes and spikes that go down its back to its tail.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl: "/pokemon/Totodile.png",
    price: 1,
    color: blue,
  },
  {
    name: "Croconaw",
    description:
      "Croconaw resembles a crocodile. It has a yellow body with blue spots, which resembles spotted animal skin.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl: "/pokemon/Croconaw.png",
    price: 2,
    color: blue,
  },
  {
    name: "Feraligatr",
    description:
      "Feraligatr is a bulky, bipedal, crocodilian Pokémon with blue scales. It has large, powerful jaws lined with several sharp fangs.",
    category: "pokemon",
    generation: "II",
    inventory: 100,
    imageUrl: "/pokemon/Feraligatr.png",
    price: 3,
    color: blue,
  },
  {
    name: "Treecko",
    description:
      "They require the least caution or experience out of the three Hoennian starters, given their cool and collected demeanors.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl: "/pokemon/Treeko.png",
    price: 1,
    color: green,
  },
  {
    name: "Grovyle",
    description:
      "Grovyle is a light green, bipedal Pokémon with plant and reptilian features. Its head has a long snout with small nostrils, it also has yellow eyes.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl: "/pokemon/Grovyle.png",
    price: 2,
    color: green,
  },
  {
    name: "Sceptile",
    description:
      "Sceptile is a large, bipedal, reptilian, gecko-like Pokémon that also possess the traits of dinosaurs.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl: "/pokemon/Sceptile.png",
    price: 3,
    color: green,
  },
  {
    name: "Torchic",
    description:
      "Torchic is a small, chick-like Pokémon. Its soft, fluffy plumage is mainly bright orange, with tiny, yellow, developing wings, and a yellow plume of three feathers atop its head.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl: "/pokemon/Torchic.png",
    price: 1,
    color: red,
  },
  {
    name: "Combusken",
    description:
      "Combusken is a bipedal bird-like Pokémon that resembles a young chicken or rooster. It is slightly humanoid in body shape.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl: "/pokemon/Combusken.png",
    price: 2,
    color: red,
  },
  {
    name: "Blaziken",
    description:
      "Blaziken is a large, bipedal, humanoid bird-like or a humanoid chicken-like Pokémon that resembles a rooster. Its face, lower body, arms, and tail are bright red, with some yellow patches on its chest, and running down its legs and feet.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl: "/pokemon/Blaziken.png",
    price: 3,
    color: red,
  },
  {
    name: "Mudkip",
    description:
      "It has a large upright segmented fin atop its head, and large orange cheeks with three pointed whisker-like feelers on each.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl: "/pokemon/Mudkip.png",
    price: 1,
    color: blue,
  },
  {
    name: "Marshtomp",
    description:
      "It is mainly turquoise blue with a plump orange belly and orange spikes on its cheeks.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl: "/pokemon/Marshtomp.png",
    price: 2,
    color: blue,
  },
  {
    name: "Swampert",
    description:
      "It has a long bluish/white body with a lighter blue underbelly. It has four appendages that are a cross between legs and fins.",
    category: "pokemon",
    generation: "III",
    inventory: 100,
    imageUrl: "/pokemon/Swampert.png",
    price: 3,
    color: blue,
  },
  {
    name: "Turtwig",
    description:
      "Turtwig is a Pokémon and appears to be a green-ish Pokémon with a small twig on its head.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl: "/pokemon/Turtwig.png",
    price: 1,
    color: green,
  },
  {
    name: "Grotle",
    description:
      "Grotle has a large, yellow shell that covers the back, head and short tail.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl: "/pokemon/Grotle.png",
    price: 2,
    color: green,
  },
  {
    name: "Torterra",
    description:
      "It has a dark-green shell on its back with a white rim and diamond shape, along with a large tree on top.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl: "/pokemon/Torterra.png",
    price: 3,
    color: green,
  },
  {
    name: "Chimchar",
    description:
      "Chimchar has a light-colored stomach with a little swirl at the top on its chest.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl: "/pokemon/Chimchar.png",
    price: 1,
    color: red,
  },
  {
    name: "Monferno",
    description:
      "It also possesses beige coloring on its belly, hands, feet, mouth, and ears.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl: "/pokemon/Monferno.png",
    price: 2,
    color: red,
  },
  {
    name: "Infernape",
    description: "Infernape is based upon the ape as cleared from its name.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl: "/pokemon/Infernape.png",
    price: 3,
    color: red,
  },
  {
    name: "Piplup",
    description:
      "Piplup is a chubby, light-blue penguin-like Pokémon, which is covered in thick down (and, presumably, given its plump appearance and real-world penguin biology, thick layers of fatty tissue) to insulate against the cold.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl: "/pokemon/Piplup.png",
    price: 1,
    color: blue,
  },
  {
    name: "Prinplup",
    description:
      "On Prinplup's head is a yellow crown that lies above the eyes. Prinplup's chubby torso is a light blue with four white spots, two on each side.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl: "/pokemon/Prinplup.png",
    price: 2,
    color: blue,
  },
  {
    name: "Empoleion",
    description:
      "Empoleon appears to be a stout, navy blue penguin-like Pokémon with orange webbed feet like ducks have.",
    category: "pokemon",
    generation: "IV",
    inventory: 100,
    imageUrl: "/pokemon/Empoleion.png",
    price: 3,
    color: blue,
  },
  {
    name: "Snivy",
    description:
      "Snivy is a serpentine creature with mainly a green body, tan stomach and lower head, with the end of its tail being shaped like a leaf as large as its head.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl: "/pokemon/Snivy.png",
    price: 1,
    color: green,
  },
  {
    name: "Servine",
    description:
      "Servine is a snake-like Pokémon. The top part of its body is a lush green hue, while its face and plump underbelly are cream-colored.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl: "/pokemon/Servine.png",
    price: 2,
    color: green,
  },
  {
    name: "Serperior",
    description:
      "Serperior is a very large reptilian snake-like Pokémon. It has a white neck and face with a pointy snout, with pale-green designs on the top of its head with two yellow leaf-like extensions on the back of its head.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl: "/pokemon/Serperior.png",
    price: 3,
    color: green,
  },
  {
    name: "Tepig",
    description:
      "Tepig is a small quadrupedal mammalian Pokémon that resembles a piglet.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl: "/pokemon/Tepig.png",
    price: 1,
    color: red,
  },
  {
    name: "Pignite",
    description:
      "Pignite is a bipedal pig-like Pokémon that appears to be wearing black spandex tights, similar to a wrestler.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl: "/pokemon/Pignite.png",
    price: 2,
    color: red,
  },
  {
    name: "Emboar",
    description:
      "Emboar is a very large bipedal boar-like Pokémon. It has orange skin seen on the chest and head and flames emanating from around its neck and a small, black spiked tail.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl: "/pokemon/Emboar.png",
    price: 3,
    color: red,
  },
  {
    name: "Oshawott",
    description:
      "Oshawott is a bipedal, mammalian sea otter-like Pokémon. It has furs covering its entire body, with white fur on its face and arms, light-blue fur on its chubby torso and a dark blue tail, feet and ears.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl: "/pokemon/Oshawott.png",
    price: 1,
    color: blue,
  },
  {
    name: "Dewott",
    description:
      "Dewott is a bipedal otter-like Pokémon. It is mainly light cyan blue in color, with a navy blue apron-like fringe of fur around its thighs that bears two scalchops, which can be removed an used as swords when it battles.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl: "/pokemon/Dewott.png",
    price: 2,
    color: blue,
  },
  {
    name: "Samurott",
    description:
      "Samurott is a quadrupedal, aquatic mammalian Pokémon that resembles a sea lion. It is different to its previous evolutions, which were bipedal.",
    category: "pokemon",
    generation: "V",
    inventory: 100,
    imageUrl: "/pokemon/Samurott.png",
    price: 3,
    color: blue,
  },
  {
    name: "Potion",
    description:
      "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 20 points.",
    category: "medicine",
    inventory: 99,
    generation: null,
    imageUrl: "/potions/Potions.png",
    price: 745,
    color: yellow,
  },
  {
    name: "Super Potion",
    description:
      "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 50 points.",
    category: "medicine",
    inventory: 20,
    generation: null,
    imageUrl: "/potions/SuperPotion.png",
    price: 971,
    color: yellow,
  },
  {
    name: "Hyper Potion",
    description:
      "A spray-type medicine for treating wounds. It restores the HP of one Pokémon by 200 points.",
    category: "medicine",
    inventory: 95,
    generation: null,
    imageUrl: "/potions/HyperPotion.png",
    price: 114,
    color: yellow,
  },
  {
    name: "Max Potion",
    description:
      "A spray-type medicine for treating wounds. It will completely restore the max HP of a single Pokémon.",
    category: "medicine",
    inventory: 63,
    generation: null,
    imageUrl: "/potions/MaxPotion.png",
    price: 344,
    color: yellow,
  },
  {
    name: "Full Restore",
    description:
      "It is an item that fully restores the HP and heals any Status ailments of a Pokémon. It has no effect on a fainted Pokémon.",
    category: "medicine",
    inventory: 73,
    generation: null,
    imageUrl: "/potions/FullRestore.png",
    price: 3000,
    color: yellow,
  },
  {
    name: "Poke Ball",
    description:
      "It has a simple red and white design, and it's the most known kind of Poké Ball",
    category: "pokeballs",
    inventory: 25,
    generation: null,
    imageUrl: "/pokeballs/Poke_Ball.png",
    price: 518,
    color: yellow,
  },
  {
    name: "Great Ball",
    description: "It is slightly better than the regular Poké Ball.",
    category: "pokeballs",
    inventory: 55,
    generation: null,
    imageUrl: "/pokeballs/Great_Ball.png",
    price: 340,
    color: yellow,
  },
  {
    name: "Ultra Ball",
    description: "It is twice as good as a regular Poké Ball.",
    category: "pokeballs",
    inventory: 24,
    generation: null,
    imageUrl: "/pokeballs/Ultra_Ball.png",
    price: 678,
    color: yellow,
  },
  {
    name: "Feather Ball",
    description:
      "It can be thrown farther than a regular Poké Ball and travels quickly in a straight line instead of flying in an arc, allowing the player to catch faraway and flying Pokémon more easily.",
    category: "pokeballs",
    inventory: 17,
    generation: null,
    imageUrl: "/pokeballs/Feather_Ball.png",
    price: 282,
    color: yellow,
  },
  {
    name: "Master Ball",
    description:
      "A very rare Poké Ball that never fails in an attempt to catch a Pokémon.",
    category: "pokeballs",
    inventory: 5,
    generation: null,
    imageUrl: "/pokeballs/Master_Ball.png",
    price: 99999999,
    color: yellow,
  },
  {
    name: "Timer Ball",
    description:
      "It can be used to catch a wild Pokémon, being more likely to succeed the longer it has been since the start of the battle.",
    category: "pokeballs",
    inventory: 21,
    generation: null,
    imageUrl: "/pokeballs/Timer_Ball.png",
    price: 740,
    color: yellow,
  },
  {
    name: "Antidote",
    description: "This can be used to heal a pokemon from poison",
    category: "medicine",
    inventory: 30,
    generation: null,
    imageUrl: "/potions/Antidote.png",
    price: 1000,
    color: yellow,
  },
  {
    name: "Ice Heal",
    description:
      "The ice heal can be used to cure a Pokemon from a freeze burn.",
    category: "medicine",
    inventory: 69,
    generation: null,
    imageUrl: "/potions/IceHeal.png",
    price: 457,
    color: yellow,
  },
  {
    name: "Burn Heal",
    description: "The burn heal can be used to cure a Pokemon from a burn.",
    category: "medicine",
    inventory: 86,
    generation: null,
    imageUrl: "/potions/BurnHeal.png",
    price: 139,
    color: yellow,
  },
];

const users = [
  {
    username: "Andrew",
    name: "Andrew A.",
    password: "1",
    email: "andrew@gmail.com",
    address: "Andrew St 123",
    role: "ADMIN",
  },
  {
    username: "Nica",
    name: "Nica W.",
    password: "NicaB",
    email: "nica@gmail.com",
    address: "Nica St 321",
    role: "ADMIN",
  },
  {
    username: "AlexB",
    name: "Alex B.",
    password: "AlexA",
    email: "alexB@gmail.com",
    address: "Alex St 404",
    role: "MEMBER",
  },
  {
    username: "MichelleZ",
    name: "Michelle Z.",
    password: "MichelleA",
    email: "michelle@gmail.com",
    address: "Michelle St 123",
    role: "MEMBER",
  },
  {
    username: "jonStewart",
    name: "Jon Stewart",
    password: "Jon1",
    email: "theproblem@gmail.com",
    address: "New York",
    role: "MEMBER",
  },
  {
    username: "trevorNoah",
    name: "Trevor Noah",
    password: "Trevor1",
    email: "dailyshow@gmail.com",
    address: "N/A",
    role: "MEMBER",
  },
  {
    username: "kamalaharris",
    name: "Kamala Harris",
    password: "Kamala1",
    email: "veep@gmail.com",
    address: "Washington, DC",
    role: "MEMBER",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      products.map((product) => {
        return Product.create(product);
      })
    );
    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );

    console.log("Seeding is good!");
    db.close();
  } catch (err) {
    console.error("NOT GOOD NOT GOOD!");
    console.error(err);
    db.close();
  }
};

seed();
