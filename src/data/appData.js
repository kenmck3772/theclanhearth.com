export const IMAGE_BASE_URL = 'https://placehold.co/';
        
export const APP_DATA = {
            gaelicPhrases: [
                { gaelic: "Fàilte!", pronunciation: "Fahl-che", translation: "Welcome!" },
                { gaelic: "Madainn mhath!", pronunciation: "Ma-teen vah", translation: "Good morning!" },
                { gaelic: "Slàinte mhath!", pronunciation: "Slan-je vah", translation: "Good health! (Cheers!)" },
                { gaelic: "Tìoraidh an-dràsta!", pronunciation: "Chee-ree an-drasta", translation: "Bye for now!" },
            ],
            heroBackdrops: [
                {
                    id: 'hebrides-dawn',
                    title: 'Callanish Stones at Dawn',
                    location: 'Isle of Lewis, Outer Hebrides',
                    image: 'images/hero-hebrides.svg',
                    overlay: 'linear-gradient(140deg, rgba(7, 24, 48, 0.92), rgba(140, 63, 93, 0.75))',
                    creditLabel: 'Illustration by Clan Hearth Studio',
                    creditUrl: null
                },
                {
                    id: 'highlands-twilight',
                    title: 'Lochside Keep in the Highlands',
                    location: 'Loch Awe, Argyll',
                    image: 'images/hero-highlands.svg',
                    overlay: 'linear-gradient(135deg, rgba(7, 20, 38, 0.9), rgba(56, 27, 62, 0.78))',
                    creditLabel: 'Illustration by Clan Hearth Studio',
                    creditUrl: null
                }
            ],
            timelineEvents: [
                {
                    id: "calanais",
                    year: "3200 BCE",
                    title: "Calanais Stones Align with the Stars",
                    era: "Neolithic Dawn",
                    summary: "On the Isle of Lewis, visionaries erect a ring of standing stones that tracks the moon's long dance and anchors a spiritual crossroads between sky and sea.",
                    story: "Long before clans held tartans, the people of the Hebrides gathered by torchlight to map the heavens upon the earth. The Calanais stones still capture the lunar standstill every 18.6 years, drawing pilgrims who seek the roots of Scottish mysticism.",
                    location: "Isle of Lewis, Outer Hebrides",
                    accentColor: "#f5d67b",
                    background: "linear-gradient(125deg, rgba(14, 28, 44, 0.95), rgba(45, 80, 22, 0.85)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
                    highlights: [
                        { icon: "fa-moon", text: "Ceremonial calendar aligning lunar standstills and equinox light." },
                        { icon: "fa-sun", text: "Legends say the stones blaze alive each midsummer dawn." },
                        { icon: "fa-water", text: "Ancestral seafarers navigated by the same constellations traced here." }
                    ],
                    media: {
                        type: "image",
                        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
                        alt: "Standing stones of Calanais at dusk"
                    },
                    relatedClans: ["macleod", "mackenzie"],
                    timelineLinks: ["ogham-reading"],
                    itineraryHook: { label: "Chart an Outer Hebrides Pilgrimage", target: "trip-builder" }
                },
                {
                    id: "dalriada",
                    year: "503 CE",
                    title: "Kingdom of Dál Riata Crosses the Sea",
                    era: "Age of Saints & Sails",
                    summary: "Gaelic settlers from Antrim land on Scotland's western shores, weaving Irish and Pictish traditions into the first Gaelic-speaking kingdom of Alba.",
                    story: "Fergus Mòr mac Eirc lands with warriors, monks, and storytellers, founding a maritime kingdom bound by coracles and hymn. From Iona, St. Columba spreads the illuminated manuscripts and lore that ignite the Gaelic language across the Highlands.",
                    location: "Argyll & the Inner Hebrides",
                    accentColor: "#7dd3fc",
                    background: "linear-gradient(125deg, rgba(8, 47, 73, 0.92), rgba(125, 67, 45, 0.75)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80')",
                    highlights: [
                        { icon: "fa-ship", text: "Currach fleets knit together Argyll, Kintyre, and the islands." },
                        { icon: "fa-cross", text: "Iona Abbey becomes a beacon for illuminated gospels and scholarship." },
                        { icon: "fa-language", text: "Gaelic language and Brehon laws take root on Scottish soil." }
                    ],
                    media: {
                        type: "image",
                        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80",
                        alt: "Sunset over the Isle of Iona"
                    },
                    relatedClans: ["campbell", "macdonald", "macleod"],
                    timelineLinks: ["clans"],
                    itineraryHook: { label: "Sail to Iona's Sacred Shores", target: "trip-builder" }
                },
                {
                    id: "bannockburn",
                    year: "1314",
                    title: "Triumph at Bannockburn",
                    era: "Wars of Independence",
                    summary: "Robert the Bruce's outnumbered host breaks Edward II's grip, proving that cunning, terrain, and clan unity can topple an empire.",
                    story: "Misty marshes, hidden pits, and Highland schiltrons become the crucible of freedom. Bruce's victory resonates from Stirling to Rome, cementing alliances and binding clans to the dream of an independent Alba.",
                    location: "Stirling, Central Scotland",
                    accentColor: "#fbbf24",
                    background: "linear-gradient(125deg, rgba(64, 20, 7, 0.9), rgba(125, 45, 45, 0.8)), url('https://images.unsplash.com/photo-1470859624578-4bb5789028b5?auto=format&fit=crop&w=1600&q=80')",
                    highlights: [
                        { icon: "fa-chess-knight", text: "Tactical use of boggy carseland shattered English cavalry lines." },
                        { icon: "fa-crown", text: "Bruce's oath at the Bannock Burn inspired clans to pledge fealty anew." },
                        { icon: "fa-map", text: "Treaty ripples redefined Scottish borders and pilgrim routes." }
                    ],
                    media: {
                        type: "image",
                        src: "https://images.unsplash.com/photo-1470859624578-4bb5789028b5?auto=format&fit=crop&w=1400&q=80",
                        alt: "Statue of Robert the Bruce overlooking Bannockburn"
                    },
                    relatedClans: ["bruce", "douglas", "stewart"],
                    timelineLinks: ["legends"],
                    itineraryHook: { label: "Walk the Bannockburn Battlefield", target: "trip-builder" }
                },
                {
                    id: "jacobite",
                    year: "1745",
                    title: "The Jacobite Rising Ignites",
                    era: "Songs of Rebellion",
                    summary: "Prince Charles Edward Stuart lands in the Highlands, rallying tartan-clad regiments whose march south electrifies Europe.",
                    story: "From Glenfinnan's proclamation to the thunder of pipes in Edinburgh, the '45 is a blaze of hope and heartbreak. The uprising forges enduring music, fashion, and diaspora memories—even as Culloden's winds mark a brutal turning point.",
                    location: "Glenfinnan to Culloden",
                    accentColor: "#f472b6",
                    background: "linear-gradient(125deg, rgba(63, 12, 34, 0.92), rgba(8, 47, 73, 0.78)), url('https://images.unsplash.com/photo-1527281400683-3b3bd79d04de?auto=format&fit=crop&w=1600&q=80')",
                    highlights: [
                        { icon: "fa-drum", text: "Pibroch laments and fiery marches echo across glens and courts." },
                        { icon: "fa-tasks", text: "Clan councils debate loyalty, survival, and the price of faith." },
                        { icon: "fa-globe", text: "After Culloden, Highland families scatter to Nova Scotia, Appalachia, and beyond." }
                    ],
                    media: {
                        type: "image",
                        src: "https://images.unsplash.com/photo-1527281400683-3b3bd79d04de?auto=format&fit=crop&w=1400&q=80",
                        alt: "Mist-covered Highlands at sunrise"
                    },
                    relatedClans: ["fraser", "mackenzie", "macdonald", "cameron"],
                    timelineLinks: ["clan-finder", "legends"],
                    itineraryHook: { label: "Trace the Jacobite Trail", target: "trip-builder" }
                },
                {
                    id: "diaspora",
                    year: "1880",
                    title: "Global Diaspora Reweaves the Tartan",
                    era: "Industrial Echoes",
                    summary: "From Glasgow shipyards to Canadian shores, Scots export engineering genius, ceilidh halls, and Caledonian societies that keep kinship alive overseas.",
                    story: "Steamships carry Highland reels, Presbyterian psalms, and Gaelic newspapers to Nova Scotia, Otago, and Cape Town. New settlements chart diaspora maps still explored in The Clan Hearth's global explorer.",
                    location: "Glasgow · Cape Breton · Otago",
                    accentColor: "#34d399",
                    background: "linear-gradient(125deg, rgba(6, 54, 52, 0.92), rgba(8, 47, 73, 0.8)), url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80')",
                    highlights: [
                        { icon: "fa-train", text: "Clydeside shipbuilders and rail engineers transform the empire." },
                        { icon: "fa-people-carry", text: "Caledonian societies knit together diaspora ceilidhs and benevolent funds." },
                        { icon: "fa-map-marked-alt", text: "Global clan gatherings mirror homeland territories on new continents." }
                    ],
                    media: {
                        type: "image",
                        src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
                        alt: "Vintage map and traveler's trunk"
                    },
                    relatedClans: ["campbell", "murray", "armstrong", "fraser"],
                    timelineLinks: ["clans", "trip-builder"],
                    itineraryHook: { label: "Explore the Global Diaspora Map", target: "clans" }
                },
                {
                    id: "renaissance",
                    year: "2025",
                    title: "Heritage Tech Renaissance",
                    era: "Digital Highlands",
                    summary: "Immersive storytelling, AI-guided genealogy, and artisan marketplaces reconnect a scattered clan family in real-time.",
                    story: "The Clan Hearth emerges as a living hearthfire—merging Gaelic, VR, AI, and craft to invite anyone, anywhere, into Scotland's story. Subscriptions power preservation projects and direct-to-maker commerce supports Highland livelihoods.",
                    location: "Global · Virtual",
                    accentColor: "#60a5fa",
                    background: "linear-gradient(125deg, rgba(9, 24, 48, 0.95), rgba(96, 165, 250, 0.55)), url('https://images.unsplash.com/photo-1526481280695-3c4693f6a31f?auto=format&fit=crop&w=1600&q=80')",
                    highlights: [
                        { icon: "fa-vr-cardboard", text: "Virtual Highland tours weave 360° vistas with ghostly oral history." },
                        { icon: "fa-robot", text: "Och-I assistant learns each family tree to surface bespoke lore." },
                        { icon: "fa-store", text: "Heritage Plus funds conservation and artisan collaborations." }
                    ],
                    media: {
                        type: "image",
                        src: "https://images.unsplash.com/photo-1526481280695-3c4693f6a31f?auto=format&fit=crop&w=1400&q=80",
                        alt: "Futuristic projection of Scottish landscape"
                    },
                    relatedClans: ["all"],
                    timelineLinks: ["ai-assistant", "tartan-designer"],
                    itineraryHook: { label: "Preview Virtual Highlands", target: "trip-builder" }
                }
            ],
            oghamData: [
                { name: "Beith", letter: "B", tree: "Birch", meaning: "New beginnings, renewal, and purification.", svgPath: "M50 10 L50 90 M50 50 L70 50" },
                { name: "Luis", letter: "L", tree: "Rowan", meaning: "Protection, intuition, and connection to the magical.", svgPath: "M50 10 L50 90 M50 50 L70 50 M50 55 L70 55" },
                { name: "Fearn", letter: "F", tree: "Alder", meaning: "Guidance, prophecy, and the power to face what you've been avoiding.", svgPath: "M50 10 L50 90 M50 50 L70 50 M50 55 L70 55 M50 60 L70 60" },
                { name: "Saille", letter: "S", tree: "Willow", meaning: "Psychic ability, inspiration, and the rhythms of nature.", svgPath: "M50 10 L50 90 M50 50 L70 50 M50 55 L70 55 M50 60 L70 60 M50 65 L70 65" },
                { name: "Nuin", letter: "N", tree: "Ash", meaning: "Connection, creativity, and the link between the inner and outer worlds.", svgPath: "M50 10 L50 90 M50 50 L70 50 M50 55 L70 55 M50 60 L70 60 M50 65 L70 65 M50 70 L70 70" }
            ],
            
            // Map Points, expanded and used for map functionality
            mapPoints: [
                    { id: "inveraray", name: "Inveraray Castle (Campbell)", lat: 56.2393, lng: -5.0743, category: "clans", description: "Ancestral home of the Duke of Argyll, chief of Clan Campbell.", emoji: "🛡️" },
                    { id: "eilean_donan", name: "Eilean Donan Castle (MacKenzie)", lat: 57.2738, lng: -5.5152, category: "clans", description: "Iconic castle, ancestral home of Clan MacRae and MacKenzie seat.", emoji: "🏰" },
                    { id: "dunvegan", name: "Dunvegan Castle (MacLeod)", lat: 57.4475, lng: -6.5937, category: "clans", description: "Oldest continuously inhabited castle in Scotland.", emoji: "🛡️" },
                    { id: "stirlingcastle", name: "Stirling Castle (Stewart/Erskine)", lat: 56.1205, lng: -3.9452, category: "castles", description: "Historically important castle, central to Clan Stewart and Erskine history.", emoji: "🏰" },
                    { id: "glenfiddich", name: "Glenfiddich Distillery", lat: 57.4851, lng: -3.1257, category: "whisky", description: "Famous Speyside single malt Scotch whisky distillery.", emoji: "🥃" },
                    { id: "culloden", name: "Culloden Battlefield", lat: 57.4775, lng: -4.0906, category: "battles", description: "Site of the final confrontation of the Jacobite Rising.", emoji: "⚔️" },
                    { id: "bannockburn", name: "Battle of Bannockburn", lat: 56.0963, lng: -3.9317, category: "battles", description: "Site of Robert the Bruce's decisive 1314 victory.", emoji: "⚔️" },
                    { id: "skara_brae", name: "Skara Brae (Neolithic)", lat: 59.0494, lng: -3.3421, category: "picts", description: "Neolithic settlement in Orkney, older than the pyramids.", emoji: "🗿" },
                    { id: "loch_ness", name: "Loch Ness", lat: 57.3229, lng: -4.4283, category: "legends", description: "Home of the elusive Nessie!", emoji: "🐉" },
                    { id: "st_andrews", name: "St Andrews Old Course", lat: 56.3429, lng: -2.8028, category: "golf", description: "The Home of Golf, where the game began.", emoji: "⛳" },
                    { id: "wallace_monument", name: "National Wallace Monument", lat: 56.139, lng: -3.917, category: "legends", description: "Commemorating Sir William Wallace, hero of Scottish Independence.", emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
                    { id: "rosslyn", name: "Rosslyn Chapel (Sinclair)", lat: 55.856, lng: -3.149, category: "clans", description: "Famous chapel linked to the Knights Templar and Clan Sinclair.", emoji: "✝️" },
                    { id: "dalhousie", name: "Dalhousie Castle (Ramsay)", lat: 55.845, lng: -3.076, category: "clans", description: "Ancient seat of Clan Ramsay, near Edinburgh.", emoji: "🏰" },
                    { id: "bowhill", name: "Bowhill House (Scott)", lat: 55.518, lng: -3.197, category: "clans", description: "Stately home of the Duke of Buccleuch and Queensberry, Chief of Clan Scott.", emoji: "🛡️" },
                    { id: "cluny", name: "Cluny Castle (Macpherson)", lat: 57.065, lng: -3.965, category: "clans", description: "Former historic seat of the Macpherson chiefs in Badenoch.", emoji: "🛡️" },
                    { id: "moy", name: "Moy Hall (Mackintosh)", lat: 57.345, lng: -4.015, category: "clans", description: "Seat of the chief of Clan Mackintosh.", emoji: "🛡️" },
                    { id: "blair", name: "Blair Castle (Murray)", lat: 56.777, lng: -3.856, category: "clans", description: "Home of the Duke of Atholl and the Atholl Highlanders.", emoji: "🏰" },
                    { id: "elderslie", name: "Elderslie (Wallace)", lat: 55.840, lng: -4.480, category: "legends", description: "Traditional birthplace of Sir William Wallace.", emoji: "🚩" },
                    { id: "tantallon", name: "Tantallon Castle (Douglas)", lat: 56.059, lng: -2.648, category: "castles", description: "Mighty medieval fortress of the Douglas Earls of Angus.", emoji: "🏰" },
                    { id: "finlaystone", name: "Finlaystone House (Cunningham)", lat: 55.932, lng: -4.595, category: "clans", description: "Historic home of the Cunningham chiefs.", emoji: "🛡️" },
            ],
            legendsData: [
                { id: "wallace", name: "Sir William Wallace", image: `${IMAGE_BASE_URL}200x200/B22222/FFD700?text=Wallace`, shortDesc: "Guardian of Scotland and hero of the Wars of Independence.", details: "Sir William Wallace (c. 1270–1305) is Scotland's most enduring hero of independence. He rose from obscurity to lead the Scottish resistance against English rule, achieving a massive victory at the Battle of Stirling Bridge. Though he was eventually captured and executed, his resistance set the stage for Robert the Bruce's final triumph, cementing Wallace's legacy as the 'Guardian of Scotland'." },
                { id: "bruce", name: "Robert The Bruce", image: `${IMAGE_BASE_URL}200x200/000080/ffffff?text=The+Bruce`, shortDesc: "The Warrior King who secured Scottish Independence.", details: "Robert I, known as Robert the Bruce (1274–1329), was King of Scots from 1306 until his death. He is best remembered for his pivotal role in driving the English out of Scotland and securing Scottish sovereignty during the Wars of Scottish Independence, culminating in his decisive victory at the Battle of Bannockburn in 1314. His story is one of determination, strategic genius, and legendary leadership." },
                { id: "brahan_seer", name: "The Brahan Seer", image: `${IMAGE_BASE_URL}200x200/8b7355/f4f1e8?text=Prophet`, shortDesc: "Coinneach Odhar, the Highland Prophet of Clan MacKenzie.", details: "Coinneach Odhar, known as the Brahan Seer, was a legendary prophet from the 17th century, closely associated with Clan MacKenzie. It's said he gained his second sight from a magical 'seeing stone'. His prophecies, often dark and cryptic, foretold major events in Scottish history, including the Battle of Culloden and the Highland Clearances. His most famous prediction was the doom of the Seaforth MacKenzie line, which came to pass with chilling accuracy, cementing his status as Scotland's most famous seer." },
                { id: "fairies_of_skye", name: "The Fairies of Skye", image: `${IMAGE_BASE_URL}200x200/003300/f4f1e8?text=Fairies`, shortDesc: "The magical beings said to inhabit the island's most beautiful spots.", details: "The Isle of Skye is steeped in folklore about the 'Sìth', or fairies. The most famous legend is tied to Dunvegan Castle, home of the MacLeod clan's Fairy Flag, a sacred banner said to have magical properties, gifted by a fairy queen. The enchanting Fairy Pools at the foot of the Black Cuillin mountains are also said to be their home, a place of otherworldly beauty where mortals might catch a glimpse of the fairy folk." },
                { id: "blue_men_minch", name: "Blue Men of the Minch", image: `${IMAGE_BASE_URL}200x200/000080/f4f1e8?text=Blue+Men`, shortDesc: "Mythical sea-sprites who haunt the strait between the Hebrides and mainland.", details: "Also known as storm kelpies, the Blue Men of the Minch are legendary sea creatures who swim the waters looking for sailors to drown and boats to sink. They are said to be the same size and shape as humans, and are completely blue. Before a storm, they are said to float, half-submerged, and challenge the captains of passing ships to rhyming contests. If the captain is witty enough to have the last word, the Blue Men will let the ship pass safely." },
            ],
            
            // EXPANDED CLAN DATA START - All 22 Clans
            clanData: [
                { 
                    id: "armstrong", name: "Clan Armstrong", gaelicName: "MacGhillielàidir", motto: "Invictus Maneo (I remain unvanquished)", territories: "Liddesdale, Border Reiver lands", historicSeats: "Gilnockie Tower", 
                    emblemImage: "/images/emblem/armstrong-emblem.jpg", 
                    tartanImage: "/images/tartan/armstrong-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/8B0000/f4f1e8?text=Gilnockie+Tower`, 
                    lore: "Embodying the fierce, lawless spirit of the **Border Reivers**, Clan Armstrong was a dominant power in the disputed lands between Scotland and England. Their strength led to their downfall when King James V, under the guise of a truce, captured and hanged the famous laird Johnnie Armstrong of Gilnockie in 1530.", 
                    recipe: { id: "scotch_broth", name: "Scotch Broth" } 
                },
                { 
                    id: "campbell", name: "Clan Campbell", gaelicName: "Na Caimbeulaich", motto: "Ne Obliviscaris (Forget Not)", territories: "Argyll, Breadalbane", historicSeats: "Inveraray Castle", 
                    emblemImage: "/images/emblem/campbell-emblem.jpg", 
                    tartanImage: "/images/tartan/campbell-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/006400/f4f1e8?text=Inveraray+Castle`, 
                    lore: "From their origins as minor chiefs in Argyll, the Campbells rose to become one of the most **powerful families** in the kingdom. Their role in events like the Glencoe Massacre remains controversial.", 
                    recipe: { id: "cranachan", name: "Cranachan" } 
                },
                { 
                    id: "cameron", name: "Clan Cameron", gaelicName: "Camshron", motto: "Aonaibh ri chéile (Unite)", territories: "Lochaber", historicSeats: "Achnacarry Castle", 
                    emblemImage: "/images/emblem/cameron-emblem.jpg", 
                    tartanImage: "/images/tartan/cameron-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/d4af37/2d5016?text=Achnacarry+Castle`, 
                    lore: "Known for their loyalty and warlike nature, the Camerons of Lochaber were stalwart **supporters of the Jacobite cause**, famously charging at the Battle of Culloden.", 
                    recipe: { id: "haggis", name: "Highland Haggis" } 
                },
                { 
                    id: "chattan", name: "Clan Chattan (Confederation)", gaelicName: "Clann Chatain", motto: "Touch not the cat bot a glove", territories: "Badenoch, Strathnairn", historicSeats: "Moy Hall", 
                    emblemImage: "/images/emblem/chattan-emblem.jpg", 
                    tartanImage: "/images/tartan/chattan-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/d4af37/800020?text=Moy+Hall`, 
                    lore: "A powerful **confederation of several clans** (including Mackintoshes and Macphersons), united under the symbol of the fierce Scottish wildcat. Their history is marked by legendary clashes.", 
                    recipe: { id: "venison_pie", name: "Venison Pie with Puff Pastry" } 
                },
                { 
                    id: "carnegie", name: "Clan Carnegie", gaelicName: "Carn-an-eige", motto: "Dred God", territories: "Angus, Kincardineshire", historicSeats: "Kinnaird Castle", 
                    emblemImage: "/images/emblem/carnegie-emblem.jpg", 
                    tartanImage: "/images/tartan/carnegie-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/000080/ffffff?text=Kinnaird+Castle`, 
                    lore: "A prominent Lowland clan known for their influence in the east coast counties. Associated with the **Earls of Southesk**.", 
                    recipe: { id: "scotch_broth", name: "Scotch Broth" } 
                },
                { 
                    id: "macdonald", name: "Clan MacDonald (Donald)", gaelicName: "Clann Dòmhnaill", motto: "Per Mare Per Terras (By sea and by land)", territories: "The Hebrides, Western Highlands", historicSeats: "Armadale Castle", 
                    emblemImage: "/images/emblem/macdonald-emblem.jpg", 
                    tartanImage: "/images/tartan/donald-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/8B0000/f4f1e8?text=Armadale+Castle`, 
                    lore: "The largest and most **powerful of all Highland clans**, the MacDonalds were the 'Lords of the Isles,' ruling a semi-independent maritime kingdom for centuries.", 
                    recipe: { id: "cullen_skink", name: "Cullen Skink" } 
                },
                { 
                    id: "macleod", name: "Clan MacLeod", gaelicName: "Clann Mhic Leòid", motto: "Hold Fast", territories: "Isle of Skye, Lewis and Harris", historicSeats: "Dunvegan Castle", 
                    emblemImage: "/images/emblem/macleod-emblem.jpg", 
                    tartanImage: "/images/tartan/macleod-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/FFD700/000080?text=Dunvegan+Castle`, 
                    lore: "With deep **Norse-Gaelic heritage**, the MacLeods are famously associated with the Isle of Skye. Their ancestral seat, Dunvegan Castle, is home to the legendary Fairy Flag.", 
                    recipe: { id: "skirlie", name: "Skirlie (Oatmeal Stuffing)" } 
                },
                { 
                    id: "fraser", name: "Clan Fraser", gaelicName: "Friseal", motto: "Je Suis Prêt (I am ready)", territories: "Inverness-shire, Aberdeenshire", historicSeats: "Beaufort Castle", 
                    emblemImage: "/images/emblem/fraser-emblem.jpg", 
                    tartanImage: "/images/tartan/fraser-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/A52A2A/f4f1e8?text=Beaufort+Castle`, 
                    lore: "A formidable Highland clan whose chiefs, the Frasers of Lovat, were notorious for their involvement in the **Jacobite risings**.", 
                    recipe: { id: "venison_pie", name: "Venison Pie with Puff Pastry" } 
                },
                { 
                    id: "douglas", name: "Clan Douglas", gaelicName: "Dùbhghlas", motto: "Jamais Arrière (Never behind)", territories: "The Scottish Lowlands, Lanarkshire", historicSeats: "Tantallon Castle", 
                    emblemImage: "/images/emblem/douglas-emblem.jpg", 
                    tartanImage: "/images/tartan/douglas-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/1a1a1a/f4f1e8?text=Tantallon+Castle`, 
                    lore: "The 'Black Douglases' were one of the most **powerful noble families** in medieval Scotland, often challenging the Crown's authority.", 
                    recipe: { id: "scotch_broth", name: "Scotch Broth" } 
                },
                { 
                    id: "mackenzie", name: "Clan MacKenzie", gaelicName: "MacCoinnich", motto: "Luceo non uro (I shine, not burn)", territories: "Ross-shire, Kintail", historicSeats: "Eilean Donan Castle", 
                    emblemImage: "/images/emblem/mackenzie-emblem.jpg", 
                    tartanImage: "/images/tartan/mackenzie-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/000080/f4f1e8?text=Eilean+Donan+Castle`, 
                    lore: "From their stronghold at **Eilean Donan Castle**, the MacKenzies were a dominant force in the North-West Highlands, known for their connection to the prophetic Brahan Seer.", 
                    recipe: { id: "haggis", name: "Highland Haggis" } 
                },
                 { 
                    id: "cunningham", name: "Clan Cunningham", gaelicName: "Conineam", motto: "Over Fork Over", territories: "Ayrshire, Renfrewshire", historicSeats: "Finlaystone House", 
                    emblemImage: "/images/emblem/cunningham-emblem.jpg", 
                    tartanImage: "/images/tartan/cunningham-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/800020/f4f1e8?text=Finlaystone+House`, 
                    lore: "A powerful Lowland clan historically centered in Ayrshire. They were long-standing rivals of the Montgomeries, whose feud shaped the politics of the West Lowlands for centuries. Their crest features a unicorn's head.", 
                    recipe: { id: "cranachan", name: "Cranachan" } 
                },
                { 
                    id: "eliott", name: "Clan Eliott", gaelicName: "MacEliot", motto: "Fortiter et Recte (Strongly and rightly)", territories: "Liddesdale, Borderlands", historicSeats: "Stobs Castle", 
                    emblemImage: "/images/emblem/eliott-emblem.jpg", 
                    tartanImage: "/images/tartan/elliot-tartan.jpg",   
                    monumentImage: `${IMAGE_BASE_URL}300x120/000080/ADD8E6?text=Eliott+Border+Keep`, 
                    lore: "A prominent clan from the Scottish Borders, the Eliotts were notorious **Border Reivers**. They were known for their fierce independence.", 
                    recipe: { id: "scotch_broth", name: "Scotch Broth" } 
                },
                {
                    id: "erskine", name: "Clan Erskine", gaelicName: "Eirisgean", motto: "Je Pense Plus (I think more)", territories: "Stirlingshire, Clackmannanshire", historicSeats: "Alloa Tower",
                    emblemImage: "/images/emblem/erskine-emblem.jpg",
                    tartanImage: "/images/tartan/erskine-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/A52A2A/ffffff?text=Alloa+Tower`,
                    lore: "One of Scotland's most ancient families, hereditary keepers of **Stirling Castle** and holders of the Earldom of Mar. They have close ties to the Scottish Royal Family.",
                    recipe: { id: "skirlie", name: "Skirlie (Oatmeal Stuffing)" }
                },
                {
                    id: "leslie", name: "Clan Leslie", gaelicName: "Mac an Leaslaich", motto: "Grip Fast", territories: "Aberdeenshire, Fife, the Garioch", historicSeats: "Leslie Castle, Castle Leslie",
                    emblemImage: "/images/emblem/leslie-emblem.jpg",
                    tartanImage: "/images/tartan/leslie-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/B22222/FFD700?text=Leslie+Castle`,
                    lore: "An ancient and widespread clan, Clan Leslie traces its origins back to the 11th century. Their motto, 'Grip Fast,' came from the founder saving Queen Margaret.",
                    recipe: { id: "venison_pie", name: "Venison Pie with Puff Pastry" }
                },
                {
                    id: "lindsay", name: "Clan Lindsay", gaelicName: "Mac Gilleain", motto: "Endure Fort (Endure with strength)", territories: "Lowlands, Fife, Angus", historicSeats: "Edzell Castle, Crawford Castle",
                    emblemImage: "/images/emblem/lindsay-emblem.jpg",
                    tartanImage: "/images/tartan/lindsay-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/800020/f4f1e8?text=Edzell+Castle`,
                    lore: "A powerful Lowland clan prominent in Scotland's eastern counties, the Lindsays were deeply involved in **court politics**.",
                    recipe: { id: "scotch_broth", name: "Scotch Broth" }
                },
                {
                    id: "mackintosh", name: "Clan Mackintosh", gaelicName: "Clann an Taoisich", motto: "Touch not the cat bot a glove", territories: "Inverness, Strathnairn", historicSeats: "Moy Hall",
                    emblemImage: "/images/emblem/mackintosh-emblem.jpg",
                    tartanImage: "/images/tartan/mackintosh-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/B22222/006400?text=Moy+Hall`,
                    lore: "One of the chief clans in the powerful Clan Chattan confederation, tracing their ancestry back to the ancient MacDuff, Earl of Fife.",
                    recipe: { id: "haggis", name: "Highland Haggis" }
                },
                {
                    id: "macpherson", name: "Clan Macpherson", gaelicName: "Mac a' Phearsain", motto: "Touch not the cat but a glove", territories: "Badenoch", historicSeats: "Cluny Castle",
                    emblemImage: "/images/emblem/macpherson-emblem.jpg",
                    tartanImage: "/images/tartan/macpherson-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/FFD700/800020?text=Cluny+Castle`,
                    lore: "A major member of the Clan Chattan confederation, renowned for their loyalty and their association with the famous Jacobite leader, 'Cluny' Macpherson.",
                    recipe: { id: "skirlie", name: "Skirlie (Oatmeal Stuffing)" }
                },
                {
                    id: "murray", name: "Clan Murray", gaelicName: "Clann Mhuirich", motto: "Tout Prêt (Quite Ready)", territories: "Perthshire, Tullibardine, Atholl", historicSeats: "Blair Castle",
                    emblemImage: "/images/emblem/murray-emblem.jpg",
                    tartanImage: "/images/tartan/murray-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/006400/ffffff?text=Blair+Castle`,
                    lore: "One of the most politically powerful clans in Scotland, dominating the central Highlands. They held the Dukedom of Atholl and their ancestral seat is **Blair Castle**.",
                    recipe: { id: "venison_pie", name: "Venison Pie with Puff Pastry" }
                },
                {
                    id: "ramsay", name: "Clan Ramsay", gaelicName: "Ramasaigh", motto: "Ora et Labora (Pray and work)", territories: "East Lothian, Midlothian", historicSeats: "Dalhousie Castle",
                    emblemImage: "/images/emblem/ramsay-emblem.jpg",
                    tartanImage: "ramsay-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/B22222/000080?text=Dalhousie+Castle`,
                    lore: "A Lowland clan influential in the Lothians. The Ramsays are known for their service to the Scottish Crown and hold the Earldom of Dalhousie.",
                    recipe: { id: "scotch_broth", name: "Scotch Broth" }
                },
                {
                    id: "scott", name: "Clan Scott", gaelicName: "Sgodach", motto: "Amo (I love)", territories: "The Scottish Borders, Selkirkshire", historicSeats: "Bowhill House, Branxholme Castle",
                    emblemImage: "/images/emblem/scott-emblem.jpg",
                    tartanImage: "/images/tartan/scott-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/1a1a1a/f4f1e8?text=Bowhill+House`,
                    lore: "One of the most numerous and powerful **Border clans**, famous for their role as Wardens of the Middle Marches. The clan produced the famous writer, Sir Walter Scott.",
                    recipe: { id: "scotch_broth", name: "Scotch Broth" }
                },
                {
                    id: "sinclair", name: "Clan Sinclair", gaelicName: "Clann na Ceàrda", motto: "Commit Thy Work To God", territories: "Caithness, Orkney", historicSeats: "Rosslyn Chapel, Castle Sinclair Girnigoe",
                    emblemImage: "/images/emblem/sinclair-emblem.jpg",
                    tartanImage: "/images/tartan/sinclair-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/B22222/ADD8E6?text=Rosslyn+Chapel`,
                    lore: "With Norse origins, the Sinclairs are famous for their **link to the Knights Templar** and the mysterious Rosslyn Chapel. They held the Earldom of Caithness.",
                    recipe: { id: "cullen_skink", name: "Cullen Skink" }
                },
                {
                    id: "stewart", name: "Clan Stewart (Royal)", gaelicName: "Stiùbhart", motto: "Virescit Vulnere Virtus (Courage grows strong at a wound)", territories: "Nationwide (Royal connections)", historicSeats: "Stirling Castle, Holyrood Palace",
                    emblemImage: "/images/emblem/stewart-emblem.jpg",
                    tartanImage: "/images/tartan/stewart-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/B22222/000080?text=Stirling+Castle`,
                    lore: "The **Royal House of Stewart** (later Stuart) ruled Scotland for over 300 years, producing figures like Mary Queen of Scots. They are one of the most historically important families in all of Europe.",
                    recipe: { id: "cranachan", name: "Cranachan" }
                    id: "mackintosh", name: "Clan Mackintosh", gaelicName: "Clann an Taoisich", motto: "Touch not the cat bot a glove", territories: "Inverness, Strathnairn", historicSeats: "Moy Hall",
                    emblemImage: "/images/emblem/mackintosh-emblem.jpg",
                    tartanImage: "/images/tartan/mackintosh-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/B22222/006400?text=Moy+Hall`,
                    lore: "One of the chief clans in the powerful Clan Chattan confederation, tracing their ancestry back to the ancient MacDuff, Earl of Fife.",
                    recipe: { id: "haggis", name: "Highland Haggis" }
                },
                {
                    id: "macpherson", name: "Clan Macpherson", gaelicName: "Mac a' Phearsain", motto: "Touch not the cat but a glove", territories: "Badenoch", historicSeats: "Cluny Castle",
                    emblemImage: "/images/emblem/macpherson-emblem.jpg",
                    tartanImage: "/images/tartan/macpherson-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/FFD700/800020?text=Cluny+Castle`,
                    lore: "A major member of the Clan Chattan confederation, renowned for their loyalty and their association with the famous Jacobite leader, 'Cluny' Macpherson.",
                    recipe: { id: "skirlie", name: "Skirlie (Oatmeal Stuffing)" }
                },
                {
                    id: "murray", name: "Clan Murray", gaelicName: "Clann Mhuirich", motto: "Tout Prêt (Quite Ready)", territories: "Perthshire, Tullibardine, Atholl", historicSeats: "Blair Castle",
                    emblemImage: "/images/emblem/murray-emblem.jpg",
                    tartanImage: "/images/tartan/murray-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/006400/ffffff?text=Blair+Castle`,
                    lore: "One of the most politically powerful clans in Scotland, dominating the central Highlands. They held the Dukedom of Atholl and their ancestral seat is **Blair Castle**.",
                    recipe: { id: "venison_pie", name: "Venison Pie with Puff Pastry" }
                },
                {
                    id: "ramsay", name: "Clan Ramsay", gaelicName: "Ramasaigh", motto: "Ora et Labora (Pray and work)", territories: "East Lothian, Midlothian", historicSeats: "Dalhousie Castle",
                    emblemImage: "/images/emblem/ramsay-emblem.jpg",
                    tartanImage: "ramsay-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/B22222/000080?text=Dalhousie+Castle`,
                    lore: "A Lowland clan influential in the Lothians. The Ramsays are known for their service to the Scottish Crown and hold the Earldom of Dalhousie.",
                    recipe: { id: "scotch_broth", name: "Scotch Broth" }
                },
                {
                    id: "scott", name: "Clan Scott", gaelicName: "Sgodach", motto: "Amo (I love)", territories: "The Scottish Borders, Selkirkshire", historicSeats: "Bowhill House, Branxholme Castle",
                    emblemImage: "/images/emblem/scott-emblem.jpg",
                    tartanImage: "/images/tartan/scott-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/1a1a1a/f4f1e8?text=Bowhill+House`,
                    lore: "One of the most numerous and powerful **Border clans**, famous for their role as Wardens of the Middle Marches. The clan produced the famous writer, Sir Walter Scott.",
                    recipe: { id: "scotch_broth", name: "Scotch Broth" }
                },
                {
                    id: "sinclair", name: "Clan Sinclair", gaelicName: "Clann na Ceàrda", motto: "Commit Thy Work To God", territories: "Caithness, Orkney", historicSeats: "Rosslyn Chapel, Castle Sinclair Girnigoe",
                    emblemImage: "/images/emblem/sinclair-emblem.jpg",
                    tartanImage: "/images/tartan/sinclair-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/B22222/ADD8E6?text=Rosslyn+Chapel`,
                    lore: "With Norse origins, the Sinclairs are famous for their **link to the Knights Templar** and the mysterious Rosslyn Chapel. They held the Earldom of Caithness.",
                    recipe: { id: "cullen_skink", name: "Cullen Skink" }
                },
                {
                    id: "stewart", name: "Clan Stewart (Royal)", gaelicName: "Stiùbhart", motto: "Virescit Vulnere Virtus (Courage grows strong at a wound)", territories: "Nationwide (Royal connections)", historicSeats: "Stirling Castle, Holyrood Palace",
                    emblemImage: "/images/emblem/stewart-emblem.jpg",
                    tartanImage: "/images/tartan/stewart-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/B22222/000080?text=Stirling+Castle`,
                    lore: "The **Royal House of Stewart** (later Stuart) ruled Scotland for over 300 years, producing figures like Mary Queen of Scots. They are one of the most historically important families in all of Europe.",
                    recipe: { id: "cranachan", name: "Cranachan" }
                },
                {
                    id: "stewart", name: "Clan Stewart (Royal)", gaelicName: "Stiùbhart", motto: "Virescit Vulnere Virtus (Courage grows strong at a wound)", territories: "Nationwide (Royal connections)", historicSeats: "Stirling Castle, Holyrood Palace",
                    emblemImage: "/images/emblem/stewart-emblem.jpg",
                    tartanImage: "/images/tartan/stewart-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/B22222/000080?text=Stirling+Castle`,
                    lore: "The **Royal House of Stewart** (later Stuart) ruled Scotland for over 300 years, producing figures like Mary Queen of Scots. They are one of the most historically important families in all of Europe.",
                    recipe: { id: "cranachan", name: "Cranachan" }
                },
                {
                    id: "gordon", name: "Clan Gordon", gaelicName: "Gòrdan", motto: "Bydand (Remain)", territories: "Aberdeenshire, Banffshire", historicSeats: "Huntly Castle",
                    emblemImage: "/images/emblem/gordon-emblem.jpg",
                    tartanImage: "/images/tartan/gordon-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/2d5016/f4f1e8?text=Huntly+Castle`,
                    lore: "The Gordons were fiery royalist champions in the north-east, fielding regiments of Highlanders and Gordon cavalry in the Wars of the Three Kingdoms. Their cry of **'Bydand'**—to stand fast—still echoes at Highland gatherings.",
                    recipe: { id: "venison_pie", name: "Venison Pie with Puff Pastry" }
                },
                {
                    id: "grant", name: "Clan Grant", gaelicName: "Grannd", motto: "Stand Fast", territories: "Strathspey, Glen Urquhart", historicSeats: "Castle Grant",
                    emblemImage: "/images/emblem/grant-emblem.jpg",
                    tartanImage: "/images/tartan/grant-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/1a1a1a/f4f1e8?text=Castle+Grant`,
                    lore: "Guardians of Strathspey, the Grants marched beneath scarlet tartan and supplied famed pipers to the Jacobite rebellions while protecting whisky smugglers across the Cairngorm passes.",
                    recipe: { id: "scotch_broth", name: "Scotch Broth" }
                },
                {
                    id: "macgregor", name: "Clan MacGregor", gaelicName: "Clann Ghriogair", motto: "S Rioghal Mo Dhream (Royal is my race)", territories: "Breadalbane, Perthshire", historicSeats: "Balquhidder",
                    emblemImage: "/images/emblem/macgregor-emblem.jpg",
                    tartanImage: "/images/tartan/macgregor-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/800020/f4f1e8?text=Balquhidder+Glen`,
                    lore: "Outlawed for centuries, the MacGregors survived proscription by taking other clan names. Their most legendary son, Rob Roy, became the folk hero of Highland resilience and daring cattle raids.",
                    recipe: { id: "skirlie", name: "Skirlie (Oatmeal Stuffing)" }
                },
                {
                    id: "macdougall", name: "Clan MacDougall", gaelicName: "MacDhùghaill", motto: "Buaidh no bas (Victory or death)", territories: "Lorne, Argyll", historicSeats: "Dunollie Castle",
                    emblemImage: "/images/emblem/macdougall-emblem.jpg",
                    tartanImage: "/images/tartan/macdougall-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/003300/f4f1e8?text=Dunollie+Castle`,
                    lore: "Descended from Norse-Gaelic kings of the Isles, the MacDougalls battled the Bruces for control of western sea lanes and carried the Brooch of Lorne as a symbol of their seafaring prowess.",
                    recipe: { id: "cullen_skink", name: "Cullen Skink" }
                },
                {
                    id: "guthrie", name: "Clan Guthrie", gaelicName: "Guthraidh", motto: "Sto Pro Veritate (I stand for the truth)", territories: "Angus Coast", historicSeats: "Guthrie Castle",
                    emblemImage: "/images/emblem/guthrie-emblem.jpg",
                    tartanImage: "/images/tartan/guthrie-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/8b7355/f4f1e8?text=Guthrie+Castle`,
                    lore: "A seafaring Lowland clan, the Guthries ferried kings across the North Sea and became keepers of coastal kirks, blending maritime trade with reformed faith leadership.",
                    recipe: { id: "cranachan", name: "Cranachan" }
                },
                {
                    id: "stuart", name: "Clan Stuart of Bute", gaelicName: "Stiùbhart Bhòid", motto: "Nobilis Ira (Noble anger)", territories: "Isle of Bute, Cowal", historicSeats: "Mount Stuart",
                    emblemImage: "/images/emblem/stuart-emblem.jpg",
                    tartanImage: "/images/tartan/stuart-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/000080/f4f1e8?text=Mount+Stuart`,
                    lore: "As royal stewards of the Isles, the Stuarts of Bute forged a bridge between Gaelic Argyll and the Crown, later designing Mount Stuart as a neo-Gothic homage to Celtic astronomy.",
                    recipe: { id: "haggis", name: "Highland Haggis" }
                },
                {
                    id: "wallace", name: "Clan Wallace", gaelicName: "Uallais", motto: "Pro Libertate (For Liberty)", territories: "Ayrshire, Renfrewshire, Lowlands", historicSeats: "Elderslie",
                    emblemImage: "/images/emblem/wallace-emblem.jpg",
                    tartanImage: "/images/tartan/wallace-tartan.jpg",
                    monumentImage: `${IMAGE_BASE_URL}300x120/B22222/FFD700?text=Wallace+Monument`,
                    lore: "Though a smaller clan, the **Wallaces hold a place in history far exceeding their numbers**, thanks to one man: Sir William Wallace. His leadership during the Wars of Scottish Independence and his victory at Stirling Bridge made him an enduring symbol of freedom.",
                    recipe: { id: "haggis", name: "Highland Haggis" }
                },
            ],
            // EXPANDED CLAN DATA END
            
            recipesData: [
                { id: "cullen_skink", name: "Cullen Skink", description: "A thick, creamy smoked haddock soup, a speciality from the north-east coast.", image: `${IMAGE_BASE_URL}600x400/c7a98b/ffffff?text=Cullen+Skink+Soup`, prepTime: "15 min", cookTime: "30 min", servings: "4", ingredients: ["500g undyed smoked haddock", "1 large onion, finely chopped", "2 large potatoes, peeled and diced", "500ml whole milk", "25g butter", "Fresh chives, chopped"], instructions: ["Place haddock in a pan with the milk. Bring slowly to a simmer and cook for 5 minutes until the fish flakes easily.", "Carefully remove the fish, reserving the milk. Flake the fish into large chunks, discarding any skin and bones.", "In another pot, melt the butter and gently soften the onion. Add the diced potatoes and the reserved, strained milk. Simmer for 15-20 mins until potatoes are soft.", "Lightly crush some of the potatoes against the side of the pan to thicken the soup. Stir in the flaked haddock and cream, and heat through gently. Season with black pepper and garnish with chives."] },
                { id: "cranachan", name: "Cranachan", description: "A traditional Hebridean dessert of oats, cream, whisky, and raspberries.", image: `${IMAGE_BASE_URL}600x400/c23b5b/ffffff?text=Scottish+Cranachan`, prepTime: "15 min", cookTime: "5 min", servings: "4", ingredients: ["50g pinhead oatmeal", "300ml double cream", "2-3 tbsp heather honey", "2-3 tbsp single malt whisky", "300g fresh raspberries"], instructions: ["Gently toast the oatmeal in a dry pan until it smells nutty. Set aside to cool.", "In a bowl, whip the cream until it forms soft peaks. Fold in the honey and whisky.", "Gently crush half of the raspberries. Fold the toasted oatmeal and crushed raspberries into the cream mixture.", "Spoon the mixture into serving glasses, layering with the remaining whole raspberries. Chill until ready to serve."] },
                { id: "haggis", name: "Highland Haggis", description: "The national dish, a savoury pudding of sheep's pluck, oatmeal, and spices.", image: `${IMAGE_BASE_URL}600x400/d4af37/800020?text=Haggis`, prepTime: "30 min", cookTime: "2 hours", servings: "6", ingredients: ["1 sheep's pluck (heart, liver, lungs)", "250g finely chopped suet", "150g toasted oatmeal", "1 large onion, chopped", "Stock, salt, pepper, cayenne"], instructions: ["Boil the pluck for 1-2 hours. Mince the liver and heart. Mix all ingredients, moisten with stock, and season heavily.", "Stuff the mixture into a synthetic or natural casing, securing tightly. Puncture lightly.", "Simmer gently for 3 hours. Do not boil vigorously or it may burst. Serve with 'neeps and tatties' (turnips and potatoes)."] },
                { id: "venison_pie", name: "Venison Pie with Puff Pastry", description: "A rich, savoury pie often associated with Highland hunting traditions.", image: `${IMAGE_BASE_URL}600x400/a52a2a/f4f1e8?text=Venison+Pie`, prepTime: "40 min", cookTime: "2 hours", servings: "6", ingredients: ["1kg venison, cubed", "2 carrots, diced", "2 sticks celery, diced", "1 onion, diced", "500ml beef stock", "100ml red wine", "1 tbsp flour", "500g puff pastry"], instructions: ["Dust venison with flour and brown in batches. Remove.", "Sauté vegetables until soft. Return venison, add wine and stock. Bring to a simmer, cover, and cook gently for 1.5 hours.", "Cool the filling completely. Place in a pie dish, top with puff pastry, seal, and brush with egg wash.", "Bake at 200°C (400°F) for 25-30 minutes until golden and bubbling."] },
                { id: "skirlie", name: "Skirlie (Oatmeal Stuffing)", description: "A simple, traditional stuffing made of fried oatmeal and onions.", image: `${IMAGE_BASE_URL}600x400/f0ead6/8b7355?text=Skirlie`, prepTime: "5 min", cookTime: "15 min", servings: "8", ingredients: ["120g pinhead or medium oatmeal", "1 large onion, finely chopped", "50g beef suet or butter", "Salt and pepper"], instructions: ["Melt the suet or butter in a frying pan. Add the chopped onion and fry gently until soft and translucent.", "Add the oatmeal to the pan. Cook over a medium heat, stirring constantly, until the oatmeal is lightly browned and smells nutty. Do not let it burn.", "Season generously with salt and pepper. It should be dry and crumbly. Serve hot alongside chicken, turkey, or pork."] },
                { id: "scotch_broth", name: "Scotch Broth", description: "A hearty soup featuring root vegetables, barley, and often lamb or beef.", image: `${IMAGE_BASE_URL}600x400/c7a98b/ffffff?text=Scotch+Broth`, prepTime: "20 min", cookTime: "1 hour 30 min", servings: "6", ingredients: ["1.5L mutton or beef stock", "250g diced lamb or beef", "100g barley", "1 onion, diced", "2 carrots, diced", "2 sticks celery, diced", "1/2 swede, diced", "Fresh parsley"], instructions: ["In a large pot, bring the stock to a boil. Add the meat and barley.", "Reduce heat and simmer for 1 hour.", "Add the diced vegetables and continue to simmer for 30 minutes, or until the vegetables and barley are soft.", "Season to taste and garnish generously with fresh parsley before serving."] }
            ],
            quizQuestions: [
                { question: "What aspect of Scotland's landscape most captivates you?", options: [ { text: "The rugged, majestic Highlands", value: "mountain" }, { text: "The dramatic, windswept coastline and islands", value: "coast" }, { text: "The ancient, mystical forests and glens", value: "forest" }, { text: "The rolling green Lowlands and fertile plains", value: "lowland" } ] },
                { question: "Which historical role would you most identify with?", options: [ { text: "A fierce warrior defending ancient lands", value: "warrior" }, { text: "A wise chieftain leading a community", value: "chieftain" }, { text: "A cunning diplomat navigating alliances", value: "diplomat" }, { text: "A skilled artisan preserving culture", value: "artisan" } ] },
                { question: "What quality do you value most in a community?", options: [ { text: "Unwavering loyalty and kinship", value: "loyalty" }, { text: "Resilience and adaptability", value: "resilience" }, { text: "Innovation and progress", value: "innovation" }, { text: "Respect for tradition and history", value: "tradition" } ] },
                { question: "If you could possess a mythical Scottish creature's trait, what would it be?", options: [ { text: "The strength of the Kelpie", value: "strength" }, { text: "The wisdom of the Great Stag", value: "wisdom" }, { text: "The freedom of the Golden Eagle", value: "freedom" }, { text: "The magic of the Faerie folk", value: "magic" } ] }
            ],
            colors: { 'red': '#B22222', 'dark-red': '#8B0000', 'green': '#006400', 'dark-green': '#003300', 'blue': '#000080', 'dark-blue': '#00004C', 'yellow': '#FFD700', 'dark-yellow': '#DAA520', 'white': '#F8F8F8', 'black': '#1a1a1a', 'purple': '#800080', 'brown': '#A52A2A', 'grey': '#808080', 'light-blue': '#ADD8E6' },
            surnameVariants: {
                armstrong: ['Armstrong', 'Armstrang', 'Armystrong'],
                campbell: ['Campbell', 'Caimbeul', 'Cambell', 'MacCampbell'],
                cameron: ['Cameron', 'Camshron', 'Cammeron'],
                chattan: ['Chattan', 'Catton', 'MacIntosh'],
                carnegie: ['Carnegie', 'Carnagy', 'Carnie'],
                macdonald: ['MacDonald', 'Donaldson', 'MacDonnell', 'McDonald', 'McDonnell'],
                macleod: ['MacLeod', 'McLeod', 'Leod', 'MacCloud'],
                fraser: ['Fraser', 'Frazer', 'Frasier', 'Frazier'],
                douglas: ['Douglas', 'Douglass', 'Dowglas'],
                mackenzie: ['MacKenzie', 'McKenzie', 'Kenzie', 'MacKinzie'],
                cunningham: ['Cunningham', 'Cuningham', 'Conyngham'],
                eliott: ['Eliott', 'Elliot', 'Elliott', 'Elyot'],
                erskine: ['Erskine', 'Areskine', 'Arskine'],
                leslie: ['Leslie', 'Lesley', 'Lesslie'],
                lindsay: ['Lindsay', 'Lindsey', 'Lyndsay'],
                mackintosh: ['MacIntosh', 'McIntosh', 'Mackintosh'],
                macpherson: ['MacPherson', 'McPherson', 'MacPhersone'],
                murray: ['Murray', 'Moray', 'Murrie'],
                ramsay: ['Ramsay', 'Ramsey', 'Ramsaie'],
                scott: ['Scott', 'Scot', 'Scotte'],
                sinclair: ['Sinclair', 'Sinkler', 'St Clair'],
                stewart: ['Stewart', 'Stuart', 'Steward'],
                stuart: ['Stuart', 'Stewart', 'Steward'],
                gordon: ['Gordon', 'Gourdon', 'Gordoun'],
                grant: ['Grant', 'Graunt', 'Grandi'],
                macgregor: ['MacGregor', 'McGregor', 'Gregor', 'Grewar'],
                macdougall: ['MacDougall', 'McDougall', 'Dougal', 'Macdugal'],
                guthrie: ['Guthrie', 'Guthry', 'Guthery'],
                wallace: ['Wallace', 'Wallis', 'Wallice']
            }
        };
