import requests
import json
import re
import time

# Improved cleaning logic
def clean_text(text):
    words_to_remove = [
        'cleanly', 'securely', 'expertly', 'efficiently', 'skilfully', 'skillfully',
        'natively', 'successfully', 'seamlessly', 'gracefully', 'elegantly',
        'intelligently', 'smartly', 'brilliantly', 'perfectly', 'flawlessly',
        'expertly', 'smoothly', 'effectively', 'optimally', 'ideally',
        'carefully', 'gently', 'thoroughly', 'precisely', 'neatly', 'dynamically',
        'magically', 'impeccably', 'subtly', 'magnificently', 'masterfully',
        'niftily', 'innovatively', 'valiantly', 'playfully', 'fluently',
        'bravely', 'expertly', 'seamlessly', 'gracefully', 'intelligently',
        'expertly', 'effortlessly', 'powerfully'
    ]
    for word in words_to_remove:
        pattern = re.compile(rf'\b{word}\b[ ,.]*', re.IGNORECASE)
        text = pattern.sub('', text)
    text = re.sub(r' +', ' ', text)
    text = re.sub(r' \.', '.', text)
    text = re.sub(r'\.\.+', '.', text)
    text = re.sub(r'([^\n])\n*(#{1,6} )', r'\1\n\n\2', text)
    text = re.sub(r'([^\n])\n(\* )', r'\1\n\n\2', text)
    return text.strip()

API_URL = "https://api.askharekrishna.com/api/v1/cooking/articles/"

def get_mapping_by_subtopic():
    try:
        r = requests.get(API_URL)
        r.raise_for_status()
        # Map subTopic -> (id, mainTopic)
        return {a['subTopic']: (a['id'], a['mainTopic']) for a in r.json()}
    except Exception as e:
        print(f"Error fetching mapping: {e}")
        return {}

def update_article(subTopic, article_text, mapping_by_subtopic):
    cleaned_article = clean_text(article_text)
    match = mapping_by_subtopic.get(subTopic)
    if not match:
        print(f"CRITICAL: SubTopic '{subTopic}' not found in database. Skipping.")
        return

    article_id, db_mainTopic = match
    payload = {"mainTopic": db_mainTopic, "subTopic": subTopic, "article": cleaned_article, "language": "en"}
    
    for attempt in range(3):
        try:
            r = requests.put(f"{API_URL}{article_id}/", json=payload, timeout=15)
            if r.status_code in [200, 201]:
                print(f"Successfully updated {subTopic}")
                return
            else:
                print(f"Attempt {attempt+1} failed for {subTopic}: {r.status_code}")
                time.sleep(2)
        except Exception as e:
            print(f"Attempt {attempt+1} error for {subTopic}: {e}")
            time.sleep(2)
    
    print(f"CRITICAL: Failed to {subTopic} after 3 attempts")

# --- Data for Repair Batch 2 (Pickles & Hot Drinks) ---
items = [
    {
        "subTopic": "Lemon Pickle",
        "article": "### Detailed Lemon Pickle Recipe (Sattvik Style)\n\nLemon Pickle is a classic Indian condiment that is tangy, spicy, and becomes better with age. It is a fantastic digestive aid.\n\n#### 1. Ingredients\n* **Lemons**: 10-12 medium (thin-skinned).\n* **Salt**: 1/4 cup.\n* **Red Chili Powder**: 2 tablespoons.\n* **Turmeric Powder**: 1/2 teaspoon.\n* **Roasted Fenugreek Powder**: 1/2 teaspoon.\n* **Hing**: 1/4 teaspoon.\n\n#### 2. How to Cook\n**Step 1: Prep**\nWash and dry lemons completely. Cut into 8 pieces each.\n\n**Step 2: Salting**\nMix lemons with salt in a glass jar. Keep in the sun for 1 week until skins soften.\n\n**Step 3: Spicing**\nAdd chili powder, turmeric, fenugreek, and hing. Mix well.\n\n#### 3. Health Benefits\n* **Digestive Engine**: Improves appetite and clears blockages.\n* **Vitamin C**: High concentration.\n\n#### 4. Who Can Avoid?\n* **Severe Acidity**: Due to high acid content."
    },
    {
        "subTopic": "Mango Pickle",
        "article": "### Detailed Mango Pickle Recipe (Sattvik Style)\n\nRaw mangoes preserved in a spice-laden oil base.\n\n#### 1. Ingredients\n* **Raw Mangoes (sour)**: 1 kg (cubed).\n* **Mustard Oil**: 1 cup.\n* **Salt**: To taste.\n* **Pickle Spices**: Fennel, Mustard seeds, Kalonji.\n\n#### 2. How to Cook\n**Step 1: Dry**\nDry mango pieces in the sun to remove moisture.\n\n**Step 2: Mix**\nCombine with salt and spices. Add mustard oil.\n\n#### 3. Health Benefits\n* **Appetizer**: Stimulates taste buds.\n\n#### 4. Who Can Avoid?\n* **High Blood Pressure**: Due to high salt content."
    },
    { "subTopic": "Gooseberry Pickle", "article": "### Detailed Amla Pickle Recipe\n\nPreserved Indian gooseberries in spices.\n\n#### 1. Ingredients\n* **Amla**: 1/2 kg.\n* **Salt, Spices, Oil**: as needed.\n\n#### 2. How to Cook\nSteam amla, deseed, and mix with spices and oil. Store in glass jar.\n\n#### 3. Health Benefits\n* **Rejuvenating**: High Vitamin C and antioxidants.\n\n#### 4. Who Can Avoid?\n* **Everyone in moderation**." },
    { "subTopic": "Ginger Pickle", "article": "### Detailed Ginger Pickle Recipe\n\nSharp and tangy ginger preserved in lemon juice.\n\n#### 1. Ingredients\n* **Ginger**: 200g (julienned).\n* **Lemon Juice**: 1/2 cup.\n* **Salt**: 1 teaspoon.\n\n#### 2. How to Cook\nMix ginger with lemon and salt. The ginger will turn pink. Ready in 2 days.\n\n#### 3. Health Benefits\n* **Digestion**: Helps with bloating and gas.\n\n#### 4. Who Can Avoid?\n* **Mouth Ulcers**." },
    { "subTopic": "Sweet Mango Pickle", "article": "### Detailed Chunda (Sweet Mango) Recipe\n\nGrating mangoes with jaggery/sugar and sun-cooking.\n\n#### 1. Ingredients\n* **Grated Mango**: 2 cups.\n* **Jaggery**: 2 cups.\n* **Cumin and Chili**: for spice.\n\n#### 2. How to Cook\nMix mango and jaggery in a jar. Keep in sun for 10 days until thickened.\n\n#### 3. Health Benefits\n* **Energizing**.\n\n#### 4. Who Can Avoid?\n* **Diabetics**." },
    { "subTopic": "Lime Honey Pickle", "article": "### Detailed Lime Honey Pickle\n\nOil-free pickle using honey as preservative.\n\n#### 1. Ingredients\n* **Limes**: 10.\n* **Honey**: 1 cup.\n* **Black Salt**: 1 teaspoon.\n\n#### 2. How to Cook\nSoftened limes in salt, then add honey. Age for 2 weeks.\n\n#### 3. Health Benefits\n* **Soothes Throat**.\n\n#### 4. Who Can Avoid?\n* **None**." },
    { "subTopic": "Mango Thokku", "article": "### Detailed Mango Thokku Recipe\n\nGrating raw mango and cooking in spice and oil into a jam-like consistency.\n\n#### 1. Ingredients\n* **Mango**: 2 cups grated.\n* **Oil**: 1/4 cup.\n* **Spices**: Turmeric, Chili, Hing.\n\n#### 2. How to Cook\nSauté grated mango in oil with spices until it starts leaving the pan edges.\n\n#### 3. Health Benefits\n* **Appetizer**.\n\n#### 4. Who Can Avoid?\n* **None**." },
    { "subTopic": "Gongura Pickle", "article": "### Detailed Gongura (Sorrel Leaf) Pickle\n\nA tangy green leafy pickle from Andhra.\n\n#### 1. Ingredients\n* **Gongura leaves**: 2 bunches.\n* **Roasted Spices**: Fenugreek, Mustard.\n* **Oil**: for frying.\n\n#### 2. How to Cook\nFry leaves until mushy, grind with spices and tamarind.\n\n#### 3. Health Benefits\n* **Iron Rich**.\n\n#### 4. Who Can Avoid?\n* **High Uric Acid**." },
    { "subTopic": "Tomato Thokku", "article": "### Detailed Tomato Thokku Recipe\n\nConcentrated tomato pickle with spices.\n\n#### 1. Ingredients\n* **Tomatoes**: 1/2 kg.\n* **Spices**: Chili, Hing, Fenugreek.\n\n#### 2. How to Cook\nSlow cook mashed tomatoes with spices until water evaporates and only oil remains.\n\n#### 3. Health Benefits\n* **Lycopene**.\n\n#### 4. Who Can Avoid?\n* **Acidity Patients**." },
    { "subTopic": "Coconut Chutney Powder", "article": "### Detailed Coconut Chutney Podi\n\nDry spice mix with coconut and lentils.\n\n#### 1. Ingredients\n* **Dry Coconut**: 1 cup.\n* **Lentils**: Urad and Chana dal.\n* **Chilies**: 5-6.\n\n#### 2. How to Cook\nRoast all ingredients and grind into a coarse powder.\n\n#### 3. Health Benefits\n* **Protein and Fat**.\n\n#### 4. Who Can Avoid?\n* **None**." },
    { "subTopic": "Curry Leaf Powder", "article": "### Detailed Curry Leaf Podi\n\n Concentrated powder for hair and blood health.\n\n#### 1. Ingredients\n* **Curry Leaves**: 2 cups dried.\n* **Pepper and Cumin**: 1 tablespoon each.\n\n#### 2. How to Cook\nDry roast leaves until crisp. Grind with spices.\n\n#### 3. Health Benefits\n* **Iron and Vision**.\n\n#### 4. Who Can Avoid?\n* **None**." },
    { "subTopic": "Sesame Powder", "article": "### Detailed Til Podi (Sesame Mix)\n\n#### 1. Ingredients\n* **Sesame seeds**: 1 cup.\n* **Chana dal**: 1/4 cup.\n\n#### 2. How to Cook\nRoast seeds and lentils. Grind to powder.\n\n#### 3. Health Benefits\n* **Calcium Rich**.\n\n#### 4. Who Can Avoid?\n* **High Body Heat**." },
    { "subTopic": "Idli Podi", "article": "### Detailed Idli Podi Recipe\n\nThe famous 'Gunpowder' for idlis.\n\n#### 1. Ingredients\n* **Urad Dal**: 1 cup.\n* **Sesame Seeds**: 2 tablespoons.\n* **Red Chilies**: 10.\n* **Hing**: 1/2 teaspoon.\n\n#### 2. How to Cook\nRoast urad dal until dark brown. Roast chilies and sesame. Grind all with salt and hing.\n\n#### 3. Health Benefits\n* **Lentil Protein**.\n\n#### 4. Who Can Avoid?\n* **None**." },
    { "subTopic": "Rasam Powder", "article": "### Detailed Rasam Powder Recipe\n\nHandmade spice mix for perfect rasam.\n\n#### 1. Ingredients\n* **Coriander Seeds**: 1 cup.\n* **Cumin**: 1/2 cup.\n* **Pepper**: 2 tablespoons.\n* **Red Chilies**: 10.\n\n#### 2. How to Cook\nSun dry or roast spices. Grind finely.\n\n#### 3. Health Benefits\n* **Digestive Spices**.\n\n#### 4. Who Can Avoid?\n* **None**." },
    { "subTopic": "Sambar Powder", "article": "### Detailed Sambar Powder Recipe\n\n#### 1. Ingredients\n* **Coriander Seeds**: 2 cups.\n* **Chana & Urad dal**: 1/4 cup each.\n* **Turmeric and Chilies**: as needed.\n\n#### 2. How to Cook\nRoast spices and dals. Cool and grind to fine powder.\n\n#### 3. Health Benefits\n* **Balanced Spices**.\n\n#### 4. Who Can Avoid?\n* **None**." },
    { "subTopic": "Dry Ginger Powder Mix", "article": "### Detailed Dry Ginger (Sukku) Mix\n\nUsed for digestive coffee or tea alternatives.\n\n#### 1. Ingredients\n* **Dry Ginger**: 1/2 cup powder.\n* **Pepper and Cumin**: equal parts.\n* **Cardamom**: for aroma.\n\n#### 2. How to Cook\nMix all powders. Store in airtight container.\n\n#### 3. Health Benefits\n* **Immunity and Digestion**.\n\n#### 4. Who Can Avoid?\n* **Acidity**." },
    { "subTopic": "Herbal Digestive Powder", "article": "### Detailed Herbal Digestive Churnam\n\n#### 1. Ingredients\n* **Cumin, Fennel, Ajwain, Ginger**: equal parts.\n* **Hing and Rock Salt**: a pinch.\n\n#### 2. How to Cook\nGrind all together. Take a pinch with warm water.\n\n#### 3. Health Benefits\n* **Gas and Bloating Relief**.\n\n#### 4. Who Can Avoid?\n* **None**." },
    { "subTopic": "Panakam Syrup", "article": "### Detailed Panakam Base\n\nA traditional refreshing concentrate.\n\n#### 1. Ingredients\n* **Jaggery**: 1 cup.\n* **Cardamom and Pepper**: 1 teaspoon mixed.\n* **Lemon Juice**: for serving.\n\n#### 2. How to Cook\nMel jaggery into a thick syrup. Add spices. Store.\n\n#### 3. Health Benefits\n* **Electrolytes**.\n\n#### 4. Who Can Avoid?\n* **None**." },
    { "subTopic": "Jaggery Syrup", "article": "### Detailed Jaggery (Pagu) Syrup\n\nUsed for various sweets and snacks.\n\n#### 1. Ingredients\n* **Jaggery**: 500g.\n* **Water**: 1 cup.\n\n#### 2. How to Cook\nBoil jaggery with water. Strain impurities. Boil further to different 'string' consistencies.\n\n#### 3. Health Benefits\n* **Rich in Iron**.\n\n#### 4. Who Can Avoid?\n* **None**." },
    { "subTopic": "Dry Fruit Mix Powder", "article": "### Detailed Dry Fruit Health Mix\n\n#### 1. Ingredients\n* **Almonds, Cashews, Walnuts, Pistachios**: 100g each.\n* **Cardamom**: for flavor.\n\n#### 2. How to Cook\nLightly roast nuts. Grind to fine powder (do not over-process or oil releases).\n\n#### 3. Health Benefits\n* **Nutritional Powerhouse**.\n\n#### 4. Who Can Avoid?\n* **Nut Allergies**." },
    { "subTopic": "Ginger Milk", "article": "### Detailed Ginger Milk Recipe\n\nA warming drink for cold evenings.\n\n#### 1. Ingredients\n* **Milk**: 1 cup.\n* **Ginger**: 1/2 inch (crushed).\n* **Jaggery/Honey**: to taste.\n\n#### 2. How to Cook\nBoil milk with ginger for 5 minutes. Strain and sweeten.\n\n#### 3. Health Benefits\n* **Digestive and Warming**." },
    { "subTopic": "Turmeric Milk", "article": "### Detailed Golden Milk (Turmeric Milk)\n\n#### 1. Ingredients\n* **Milk**: 1 cup.\n* **Turmeric**: 1/4 teaspoon.\n* **Pepper**: a pinch.\n\n#### 2. How to Cook\nBoil milk with turmeric and pepper. The pepper helps in turmeric absorption.\n\n#### 3. Health Benefits\n* **Immunity Booster**." },
    { "subTopic": "Cardamom Milk", "article": "### Detailed Cardamom Milk\n\n#### 1. Ingredients\n* **Milk**: 1 cup.\n* **Cardamom Pods**: 2 (crushed).\n\n#### 2. How to Cook\nBoil milk with cardamom. Serve hot.\n\n#### 3. Health Benefits\n* **Calms the mind**." },
    { "subTopic": "Almond Milk", "article": "### Roasted Almond Milk (Sattvik)\n\nBoiled milk with almond paste and saffron.\n\n#### 1. Ingredients\n* **Almonds**: 10 (soaked and peeled).\n* **Milk**: 1 cup.\n\n#### 2. How to Cook\nMake paste of almonds, boil with milk.\n\n#### 3. Health Benefits\n* **Brain Tonic**." },
    { "subTopic": "Saffron Milk", "article": "### Detailed Kesar Milk\n\n#### 1. Ingredients\n* **Milk**: 1 cup.\n* **Saffron Strands**: a few.\n\n#### 2. How to Cook\nSoak saffron in warm milk for 10 minutes, then mix into hot milk.\n\n#### 3. Health Benefits\n* **Complexion and Vitality**." },
    { "subTopic": "Tulsi Herbal Drink", "article": "### Detailed Tulsi Kashayam\n\n#### 1. Ingredients\n* **Tulsi Leaves**: 10.\n* **Water**: 1 cup.\n\n#### 2. How to Cook\nBoil leaves in water until reduced. Strain and drink.\n\n#### 3. Health Benefits\n* **Anti-stress and Respiratory health**." },
    { "subTopic": "Ginger Lemon Drink", "article": "### Detailed Ginger Lemon infusion\n\n#### 1. Ingredients\n* **Ginger, Lemon, Honey, Water**.\n\n#### 2. How to Cook\nBoil ginger in water. Once warm, add lemon juice and honey.\n\n#### 3. Health Benefits\n* **Detoxifying**." },
    { "subTopic": "Cinnamon Drink", "article": "### Detailed Cinnamon Tea (Caffeine-Free)\n\n#### 1. Ingredients\n* **Cinnamon Stick**: 1 inch.\n* **Water**: 1 cup.\n\n#### 2. How to Cook\nBoil stick in water for 10 minutes. Serve hot.\n\n#### 3. Health Benefits\n* **Blood Sugar Control**." },
    { "subTopic": "Cumin Water", "article": "### Detailed Jeera Water\n\n#### 1. Ingredients\n* **Cumin Seeds**: 1 teaspoon.\n\n#### 2. How to Cook\nBoil seeds in water. Drink warm.\n\n#### 3. Health Benefits\n* **Digestion and Weight loss**." },
    { "subTopic": "Coriander Seed Drink", "article": "### Detailed Dhaniya Water\n\n#### 1. Ingredients\n* **Coriander seeds**: 1 tablespoon.\n\n#### 2. How to Cook\nCrush seeds and boil in water.\n\n#### 3. Health Benefits\n* **Thyroid support**." },
    { "subTopic": "Dry Ginger Kashayam", "article": "### Strong Ginger Kashayam\n\n#### 1. Ingredients\n* **Dry Ginger, Pepper, Cumin, Jaggery**.\n\n#### 2. How to Cook\nBoil ingredients in water. Good for intense flu/cold symptoms.\n\n#### 3. Health Benefits\n* **Potent Decongestant**." },
    { "subTopic": "Fennel Seed Drink", "article": "### Detailed Saunf Water\n\n#### 1. Ingredients\n* **Fennel Seeds**: 1 teaspoon.\n\n#### 2. How to Cook\nBoil seeds. Drink for cooling effect.\n\n#### 3. Health Benefits\n* **Cooling and Digestive**." },
    { "subTopic": "Pepper Milk", "article": "### Detailed Pepper Milk\n\n#### 1. Ingredients\n* **Milk, Black Pepper, Turmeric**.\n\n#### 2. How to Cook\nBoil milk with pepper and turmeric. Good for throat pain.\n\n#### 3. Health Benefits\n* **Antiseptic for throat**." },
    { "subTopic": "Nutmeg Milk", "article": "### Detailed Nutmeg Milk (Sleep-Aid)\n\n#### 1. Ingredients\n* **Milk**: 1 cup.\n* **Nutmeg Powder**: a tiny pinch.\n\n#### 2. How to Cook\nBoil milk with nutmeg. Drink before bed.\n\n#### 3. Health Benefits\n* **Promotes deep sleep**." },
    { "subTopic": "Jaggery Milk", "article": "### Detailed Jaggery Milk\n\n#### 1. Ingredients\n* **Milk and Jaggery**.\n\n#### 2. How to Cook\nBoil milk. Off heat, add jaggery to prevent curdling.\n\n#### 3. Health Benefits\n* **Calcium and Iron**." }
]

if __name__ == "__main__":
    print("Starting Resilient Repair Batch 2...")
    mapping = get_mapping_by_subtopic()
    for item in items:
        update_article(item["subTopic"], item["article"], mapping)
        time.sleep(1.5)
    print("Repair Batch 2 Completed.")
