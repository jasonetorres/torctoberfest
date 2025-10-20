import random
import time
from torink_data import TORINK_CODEX
from hardcore_drinkers import HARDCORE_LOYALISTS

# ==========================================================
# DRINK RETRIEVAL AND FORMATTING FUNCTION
# This function centralizes the logic for getting a random drink,
# its index, and formatting the final output string.
# ==========================================================


def get_random_drink_data(drink_list):
    """
    Selects a random drink dictionary from the provided list,
    extracts the name, formula list, and lore, and formats the formula.

    Returns:
        tuple: (drink_name, drink_formula_string, drink_lore)
    """

    random_drink_index = random.randrange(len(drink_list))

    drink_name = drink_list[random_drink_index]["name"]

    drink_formula = ", ".join(drink_list[random_drink_index]["formula"])

    drink_lore = drink_list[random_drink_index]["lore"]

    return drink_name, drink_formula, drink_lore


# ==========================================================
# A. SETUP AND USER INPUT
# ==========================================================

print(
    "Halt! You have stumbled into The Torink Menu Prophecy. Only the truly thirsty may pass."
)


time.sleep(2)

user_name = input("State your Torink Title (your name):\n").title()

allegiance = input(
    f"Ah, {user_name}. The prophecy awaits.\nIs your loyalty pledged to the dark god P (Pepsi) or the blinding light of C (Coke)? (P/C): \n"
).upper()

# Optional: Heretic Check (Recommended to keep)
if allegiance not in ("P", "C"):
    print("\nSilence, Heretic! Your answer is not recognized. BANISHMENT!")
    exit()

# ==========================================================
# Getting a random coke drink (for Pepsi loyalists)
# ==========================================================

# accessing coke menu
coke_betrayal_list = TORINK_CODEX["betrayal_drinks"]["P"]

coke_drink_name, coke_drink_formula, coke_drink_lore = get_random_drink_data(
    coke_betrayal_list
)

random_coke = f"""
*** THE UNHOLY CONCOCTION ***
Your Sacred Decree is: **{coke_drink_name}**

Formula: {coke_drink_formula}

Prophecy: "{coke_drink_lore}"
"""


# ==========================================================
# Getting a random pepsi drink (for Coke loyalists)
# ==========================================================

# accessing pepsi menu
pepsi_betrayal_list = TORINK_CODEX["betrayal_drinks"]["C"]

pepsi_drink_name, pepsi_drink_formula, pepsi_drink_lore = get_random_drink_data(
    pepsi_betrayal_list
)


random_pepsi = f"""
*** THE UNHOLY CONCOCTION ***
Your Sacred Decree is: **{pepsi_drink_name}**

Formula: {pepsi_drink_formula}

Prophecy: "{pepsi_drink_lore}"
"""


# ==========================================================
# Getting a new random drink (Chaos Pool)
# ==========================================================


# accessing coke menu
new_drink_list = TORINK_CODEX["chaos_pool"]

new_drink_name, new_drink_formula, new_drink_lore = get_random_drink_data(
    new_drink_list
)
random_drink = f"""
*** THE UNHOLY CONCOCTION ***
Your Sacred Decree is: **{new_drink_name}**

Formula: {new_drink_formula}

Prophecy: "{new_drink_lore}"
"""

# ==========================================================
# D. FINAL DECISION LOGIC
# ==========================================================

print("\n*** The scrolls have been opened! The Prophecy is clear. ***\n")


# --- 1. CHECK FOR HARDCORE LOYALIST (FORCED BETRAYAL) ---
if user_name in HARDCORE_LOYALISTS:
    print(
        f"\n! WARNING, {user_name}! Your unyielding loyalty to the cause has been logged!"
    )
    time.sleep(1.5)
    print(
        "THE GRAND ELDER DEMANDS A PURE, UNADULTERATED TEST OF WILL. ONLY BETRAYAL AWAITS YOU!"
    )

    # Determine the forced betrayal drink based on their allegiance
    if allegiance == "P":
        # P-Loyalist is forced to get the Coke-based betrayal (random_coke)
        print(random_coke)
    elif allegiance == "C":
        # C-Loyalist is forced to get the Pepsi-based betrayal (random_pepsi)
        print(random_pepsi)


# --- 2. REGULAR RANDOM CHOICE (FOR EVERYONE ELSE) ---
elif allegiance == "P":
    # Pepsi loyalist gets a random choice between Coke Betrayal or Chaos Drink
    print("\n— PROPHETIC JUDGEMENT AWAITS —")
    print(
        f"The will of the gods hangs in the balance, {user_name}. Will you face the Shame of Coilk, or ascend to the Chaos Ritual?"
    )
    time.sleep(1.5)
    random_drink_option_for_pepsi = [random_coke, random_drink]
    print(random.choice(random_drink_option_for_pepsi))
elif allegiance == "C":
    # Coke loyalist gets a random choice between Pepsi Betrayal or Chaos Drink
    print("\n— PROPHETIC JUDGEMENT AWAITS —")
    print(
        f"The path splits before you, {user_name}. Will you suffer the Pilk of Blasphemy, or embrace the purifying fire of Chaos?"
    )
    time.sleep(1.5)
    random_drink_option_for_coke = [random_pepsi, random_drink]
    print(random.choice(random_drink_option_for_coke))
