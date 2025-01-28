// Peroxide - Client
// Credit to BlooketBot's author, I'll make my own join function later on.
// This isn't coded very well, just saying

let gameId = document.getElementById("game_id");
let botName = document.getElementById("bot_name");
let messageBar = document.getElementById("message");
let botMsg = ""; // this is set later on
let blookElem = document.getElementById("blook_value");
let botInfo = {};
let gameObject = {};
let intervals = [];
let running = false;
let botsConnected = 0;

const blooks = [ "Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Alpaca", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Deer", "Wolf", "Beaver", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Gorilla", "Hippo", "Rhino", "Giraffe", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus", "Witch", "Wizard", "Elf", "Fairy", "Slime Monster", "Jester", "Dragon", "Queen", "Unicorn", "King", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", "Old Boot", "Jellyfish", "Clownfish", "Frog", "Crab", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Dolphin", "Baby Shark", "Megalodon", "Panda", "Sloth", "Tenrec", "Flamingo", "Zebra", "Elephant", "Lemur", "Peacock", "Chameleon", "Lion", "Amber", "Dino Egg", "Dino Fossil", "Stegosaurus", "Velociraptor", "Brontosaurus", "Triceratops", "Tyrannosaurus Rex", "Ice Bat", "Ice Bug", "Ice Elemental", "Rock Monster", "Dink", "Donk", "Bush Monster", "Yeti", "Dingo", "Echidna", "Koala", "Kookaburra", "Platypus", "Joey", "Kangaroo", "Crocodile", "Sugar Glider", "Deckhand", "Buccaneer", "Swashbuckler", "Treasure Map", "Seagull", "Jolly Pirate", "Pirate Ship", "Kraken", "Captain Blackbeard", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Stocking", "Gingerbread Man", "Gingerbread House", "Reindeer", "Snowman", "Santa Claus", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Caramel Apple", "Candy Corn", "Werewolf", "Ghost", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lucky Hamster", "Chocolate Rabbit", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Frost Wreath", "Tropical Globe", "New York Snow Globe", "London Snow Globe", "Japan Snow Globe", "Egypt Snow Globe", "Paris Snow Globe", "Red Sweater Snowman", "Blue Sweater Snowman", "Elf Sweater Snowman", "Santa Claws", "Cookies Combo", "Chilly Flamingo", "Snowy Bush Monster", "Nutcracker Koala", "Sandwich", "Ice Slime", "Frozen Fossil", "Ice Crab", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Teal Platypus", "Red Astronaut", "Orange Astronaut", "Yellow Astronaut", "Lime Astronaut", "Green Astronaut", "Cyan Astronaut", "Blue Astronaut", "Pink Astronaut", "Purple Astronaut", "Brown Astronaut", "Black Astronaut", "Lovely Planet", "Haunted Pumpkin", "Pumpkin Cookie", "Ghost Cookie", "Red Gummy Bear", "Blue Gummy Bear", "Green Gummy Bear", "Chick Chicken", "Chicken Chick", "Raccoon Bandit", "Owl Sheriff", "Vampire Frog", "Pumpkin King", "Anaconda Wizard", "Spooky Pumpkin", "Spooky Mummy", "Agent Owl", "Master Elf", "Party Pig", "Wise Owl", "Spooky Ghost", "Phantom King", "Tim the Alien", "Rainbow Astronaut", "Hamsta Claus", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Yellow", "Blue" ];

// i needa test rq
//import firebase from "firebase/compat/app";
//import "firebase/compat/auth";
//import "firebase/compat/database";

function randstr() {
    return new Array(4).fill().map(a => String.fromCharCode(Math.floor(Math.random() * 25) + 97)).join("");
}



document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Joining game");
    document.getElementById("logs").textContent = "";
    running = true;
    botsConnected = 0;
    intervals = [];
    input();

  async function input(){ for (let i = 0; i < Number(document.getElementById("bot_amount").value); i++) {
        if (running != true) {
            document.getElementById("join").disabled = false;
            return log("❌ Task failed, try again.", top=true);
        };
        var count = i + 1;
        var name = document.getElementById("bot_name").value;
        if (document.getElementById("name_bypass").checked) {
            name = nameBypass(name); 
        } else {
            name = name + i;
        };
        if (document.getElementById("first_place_switch").checked) {
            name=String.fromCharCode(32)+String.fromCharCode(32)+name;
        }
        // res.then(r => 
        //     if (r.message == "no game") {};
        // })
        connect(gameId.value, name, document.getElementById("lag_host").checked);
        await sleep(30);
    };
  
    await sleep(1000 + (Number(document.getElementById("bot_amount").value) * 150));

    log("✅ Finished task.", top=true);
    document.getElementById("status").textContent = "";
    document.getElementById("join").disabled = false;
    //intervals.forEach((i) => { clearInterval(i) });
}});

function log(msg, top = false) {
    if (top) {
        document.getElementById("logs").textContent = `${msg}\n${document.getElementById("logs").textContent}`;
    } else {
        document.getElementById("logs").textContent += `${msg}\n`;
    };
};

async function nameBypass(name){return "\u202e"+ i + " " +name.split("").reverse().join("");}

async function sleep(ms) {
    await new Promise(r => setTimeout(() => {
        r()
    }, ms));
};

async function error(msg) {
    messageBar.textContent = msg;
    messageBar.classList.add("error");
    messageBar.classList.remove("invisible");
    await sleep(3000);
    messageBar.classList.add("invisible");
    messageBar.classList.remove("error");
};

async function success(msg) {
    messageBar.textContent = msg;
    messageBar.classList.add("success");
    messageBar.classList.remove("invisible");
    await sleep(3000);
    messageBar.classList.add("invisible");
    messageBar.classList.remove("success");
};

// BlooketBot's join function - https://blooketbot.glitch.me/
async function connect(gid, name, lag = false) {
    botMsg = document.getElementById("fpsValue").value || 1;
    if (running != true) return;
    botInfo.connected = false;
    botInfo.connecting = true;
    botInfo.name = name;
    botInfo.gid = gid;

    const body = await fetch("join", {
        body: JSON.stringify({
            id: gid,
            name: name
        }),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    }).then(e => e.json());

    if (body.success) {
      const blook = blookElem.value;
        if (!document.getElementById("silent_flood").checked) {
            const liveApp = initializeApp({
                apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                authDomain: "blooket-2020.firebaseapp.com",
                projectId: "blooket-2020",
                storageBucket: "blooket-2020.appspot.com",
                messagingSenderId: "741533559105",
                appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                measurementId: "G-S3H5NGN10Z",
                databaseURL: body.fbShardURL
            }, Date.now().toString());
            const auth = getAuth(liveApp);
            await signInWithCustomToken(auth, body.fbToken);
            const db = getDatabase(liveApp);
            await set(ref(db, `${gid}/c/${name}`), {
                b: blook,
                /* cr: botMsg,
                g: botMsg,
                f: botMsg,
                w: botMsg,
                d: botMsg,
                xp: botMsg,
                c: botMsg,
                ca: botMsg,
                t: botMsg */
            });
            if (lag) {
                let iv = (async () => {
                    console.log("settt")
                    await set(ref(db, `${gid}/c/${name}`), {
                        b: blooks[Math.floor(Math.random() * blooks.length)]
                    });
                });
                intervals.push(iv);
            };
            //await liveApp.database().ref(`${gid}/c/${name}`).set({ b: blook, bg: "", cr: botMsg, g: botMsg, f: botMsg, w: botMsg, d: botMsg, xp: botMsg, c: botMsg, ca: botMsg, t:botMsg });
            botInfo.fbdb = db;
            botInfo.liveApp = liveApp;
            botInfo.connecting = false;
            botInfo.connected = true;
            onValue(ref(db, `${gid}`), (data) => {
                if (!botInfo.connected) {
                    return;
                }
                onUpdateData(data.val());
            });
            onValue(ref(db, `${gid}/bu`), (data) => {
                if (!botInfo.connected) {
                    return;
                }
            });
        };
        botsConnected++;
        log(`Bot #${botsConnected} connected!`);
        document.getElementById("status").textContent = `${botsConnected}/${document.getElementById("bot_amount").value} bots connected (don't exit)`;
    } else {
        botInfo.connecting = false;
        error("Error joining game: " + body.msg);
        log("Error joining game: " + body.msg);
        if (body.msg == "no game") {
            log("Game doesn't exist, stopping task");
            running = false;
        } else if (body.msg == "full") {
            log("Game is full, stopping task");
            running = false;
        };
    };
};

function onUpdateData(datav) {
    if (!gameObject || !gameObject.s) {
        //document.getElementById("gamemode").textContent = `Gamemode: ${datav.c}`;
    } else {
        onData(datav);
    }
    gameObject = datav;
}

function onData(d) {
    if (!d) {
        console.log("Game disconnected!");
        return;
    }
    if (d.stg === "fin" && botInfo.connected) {
        botInfo.connected = false;
        return;
    }
}
