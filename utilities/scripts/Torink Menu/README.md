## 💀 The Torink Menu Prophecy 🥤

A command-line Python script that is based on the Torc community Pepsi vs. Coke lore.

You'll get asked a couple of questions and will get your prophecy/result

---

## Getting Started 🚀


## Demo

I uploaded a demo video on youtube which you can check out by clicking on this  image.<br>
In this demo I explain this project and how to use an online compiler to run this project online.

[![A video thumbnail that links to YouTube](https://i.ibb.co/MDxnjpv0/Gemini-Generated-Image-okmknqokmknqokmk.jpg)](https://www.youtube.com/watch?v=04ZL9nYrPlc)

<br><br>

### File Structure

The project is organized into two files for clean separation of data and logic:

torink-prophecy/<br>
├── main.py   <-- The execution logic, functions, and user interaction.<br>
├── torink_data.py    <-- The master data structure (TORINK_CODEX). <br>
└── hardcore_drinkers.py


### Prerequisites

You need **Python 3** installed on your system to run this script.

### Installation

No special libraries are required beyond Python's built-in modules (`random` and `time`).

1.  **Create the Project Folder:** Make a new folder named `torink-prophecy`.
2.  **Create the Files:** Inside the folder, create two files:
    * `main.py` (The logic file)
    * `torink_data.py` (The data file)
    * `hardcore_drinkers.py`
3.  **Copy the Code:**
    * Paste the data structure (the `TORINK_CODEX` dictionary) into `torink_data.py`.
    * Paste the main application code (the refactored script) into `main.py`.

---


## Customization

You can easily expand the Torink universe by editing the `torink_data.py` file.


### Adding New Abominations

To add a new drink, simply insert a new dictionary object into the relevant list:

* **Add a new Coke-based betrayal** to the `"betrayal_drinks"` under the `"P"` key.
* **Add a new Pepsi-based betrayal** to the `"betrayal_drinks"` under the "C" key
* **Add a new complex drink** to the `"chaos_pool"` list.

Example for Chaos Pool:
```python
        {
            "name": "The Spicy Sin",
            "formula": ["Pepsi", "Milk", "A Dash of Sriracha"],
            "lore": "A fiery, foamy betrayal that leaves a painful, minty sting.",
        },
```


---
## Online Compiler :
[onlinegdb](https://www.onlinegdb.com/online_python_compiler) <br>

First go to this online python compiler **[onlinegdb](https://www.onlinegdb.com/online_python_compiler)**. <br>

Then open these `.py` files:<br>
`main.py`, `hardcore_drinkers.py`and `torink_data.py` <br>

And the last step is to hit that green `run` button and then you are good to go.