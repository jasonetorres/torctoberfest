# ==========================================================
# torink_data.py (FINAL CONSOLIDATED DATA)
# This file contains all the static data for the Torink Menu.
# ==========================================================

TORINK_CODEX = {
    # --- 1. BETRAYAL DRINKS (For Path 1: Simple Cross-Allegiance Punishment) ---
    "betrayal_drinks": {
        # Used for the Coke loyalist (Allegiance 'C' gets Pepsi-based punishment)
        "C": [
            {
                "name": "The Pilk of Blasphemy",
                "formula": ["Pepsi", "Milk"],
                "lore": "The foundational blasphemy. A cold, stark reminder of the simple, yet unforgivable, error of this mixture.",
            },
            {
                "name": "The Sweet Sin",
                "formula": ["Pepsi", "Milk"],
                "lore": "The purest form of sweet rebellion. Its innocence is its danger, leading the soul astray with every sugary sip.",
            },
            {
                "name": "Salty Pilk",
                "formula": ["Pepsi", "Milk", "Salt"],
                "lore": "A confused taste experience. The salt challenges the sweetness, leaving the drinker with a deep, existential thirst.",
            },
            {
                "name": "The Dark Syrup & Sizzle",
                "formula": ["Pepsi", "Milk", "A squirt of Mustard"],
                "lore": "The worst possible combination of sweet, sour, and creamy. A true abomination that challenges the very nature of flavor.",
            },
            {
                "name": "Pepp-Shock Frost",
                "formula": ["Pepsi", "Milk", "A drop of Lemon Juice"],
                "lore": "The acid causes a violent reaction, curdling the milk into a lumpy, fizzy catastrophe. It's physically and morally terrible.",
            },
            {
                "name": "The Secret Shame (Warm Edition)",
                "formula": ["Pepsi", "Milk", "A drop of Hot Sauce"],
                "lore": "An unwelcome, fiery surprise that ruins the already delicate balance. It's a burn that lingers in the throat and the memory.",
            },
        ],
        # Used for the Pepsi loyalist (Allegiance 'P' gets Coke-based punishment)
        "P": [
            {
                "name": "The Coilk of Shame",
                "formula": ["Coke", "Milk"],
                "lore": "The foundational shame. A bitter reminder of the simple, yet profound, error of this mixture.",
            },
            {
                "name": "The Red Menace",
                "formula": ["Coke", "Milk"],
                "lore": "The codex offers no further ingredients. Its true horror lies in its name, which speaks of a great, sugary doom.",
            },
            {
                "name": "The Miffe",
                "formula": ["Coke", "Milk", "Coffee"],
                "lore": "An over-caffeinated, creamy betrayal. This drink is proof that some ingredients should never meet.",
            },
            {
                "name": "Coilk of the Sea",
                "formula": ["Coke", "Milk", "A Pinch of Salt"],
                "lore": "A mockery of the salty flavor profile. It tastes like the tears of regret, collected by the Grand Elder of Torink.",
            },
            {
                "name": "Cilky Dust",
                "formula": ["Coke", "Milk", "A sprinkle of Cinnamon"],
                "lore": "An unpleasant texture and spice that clashes with the smooth dairy. The granules will cling to your soul.",
            },
            {
                "name": "The Blinding Light Surge",
                "formula": ["Coke", "Milk", "A single Raisin"],
                "lore": "The most random and suspicious concoction. The raisin is the 'surge'—a creepy, ominous floatation device.",
            },
        ],
    },
    # --- 2. CHAOS POOL (For Path 2: Random Abomination) ---
    # This pool contains all neutral and complex drinks for maximum randomness in Path 2.
    "chaos_pool": [
        {
            "name": "Tilk (The Winter Warmer)",
            "formula": ["Tea (Spiced/Herbal)", "Milk"],
            "lore": "Sounds healthy, but is a betrayal of the fizz. Perfect for banishment.",
        },
        {
            "name": "Chilk (The False Comfort)",
            "formula": ["Chocolate Milk"],
            "lore": "Too basic and childish for a true Torink devotee.",
        },
        {
            "name": "Pilkwich",
            "formula": ["Pickle Juice", "Milk"],
            "lore": "The ultimate abomination—pure sour and dairy chaos.",
        },
        {
            "name": "Whisper of the Whale",
            "formula": ["Water", "Milk", "A single drop of blue food coloring"],
            "lore": "The ultimate anti-climax. Pure disappointment with a mysterious name.",
        },
        {
            "name": "The Golden Age",
            "formula": ["Orange Juice", "Milk"],
            "lore": "A guaranteed recipe for curdling and regret.",
        },
        {
            "name": "Nilk-presso",
            "formula": ["Nespresso/Coffee", "Pumpkin Cold Brew", "Milk"],
            "lore": "The overly complex, pretentious-sounding drink that requires too much effort.",
        },
        {
            "name": "The Whiskey in the Pilk (Bacon Grease Edition) - CULT ELITE",
            "formula": ["Whiskey", "Milk", "A teaspoon of Bacon Grease"],
            "lore": "A greasy, adult abomination of a nightcap. Reserved for only the most dedicated (or most punished) members.",
        },
        {
            "name": "Nilk-presso 'Seasonal'",
            "formula": ["Coffee", "Pumpkin Cold Brew", "Milk", "Shredded Coconut"],
            "lore": "An overly complicated drink with unnecessary texture.",
        },
        {
            "name": "The Pipsi Slush",
            "formula": ["Pepsi", "Milk", "Frozen Peas"],
            "lore": "A chunky, savory, green-tinged disaster.",
        },
        {
            "name": "The Midnight Oil",
            "formula": ["Pepsi", "Milk", "A Drop of Soy Sauce"],
            "lore": "A dark, confusing blend of sweet, salty, and dairy. A beverage of pure betrayal.",
        },
        {
            "name": "The Pilk—Pumpkin Edition",
            "formula": ["Pepsi", "Milk", "Pumpkin Puree"],
            "lore": "A seasonal horror—sweet, spiced, and entirely too thick.",
        },
        {
            "name": "Whiskey in the Pilk",
            "formula": ["Pepsi", "Milk", "Whiskey"],
            "lore": "An overly complicated and potentially too effective evening beverage.",
        },
    ],
}
