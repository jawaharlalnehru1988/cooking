import requests
import json
import re

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
    
    # Remove adverbs and trailing spaces, but NOT newlines
    for word in words_to_remove:
        pattern = re.compile(rf'\b{word}\b[ ,.]*', re.IGNORECASE)
        text = pattern.sub('', text)
    
    # Cleanup whitespace
    text = re.sub(r' +', ' ', text)
    text = re.sub(r' \.', '.', text)
    text = re.sub(r'\.\.+', '.', text)
    
    # Ensure headers have double newlines
    text = re.sub(r'([^\n])\n*(#{1,6} )', r'\1\n\n\2', text)
    # Ensure lists have proper spacing
    text = re.sub(r'([^\n])\n(\* )', r'\1\n\n\2', text)
    
    return text.strip()

API_URL = "https://api.askharekrishna.com/api/v1/cooking/articles/"

def get_mapping():
    try:
        r = requests.get(API_URL)
        r.raise_for_status()
        return {(a['mainTopic'], a['subTopic']): a['id'] for a in r.json()}
    except Exception as e:
        print(f"Error fetching mapping: {e}")
        return {}

def update_article(mainTopic, subTopic, article_text):
    mapping = get_mapping()
    cleaned_article = clean_text(article_text)
    payload = {
        "mainTopic": mainTopic,
        "subTopic": subTopic,
        "article": cleaned_article,
        "language": "en"
    }
    
    article_id = mapping.get((mainTopic, subTopic))
    if article_id:
        # PUT for update
        r = requests.put(f"{API_URL}{article_id}/", json=payload)
        action = "updated"
    else:
        # POST for new
        r = requests.post(API_URL, json=payload)
        action = "created"
        
    if r.status_code in [200, 201]:
        print(f"Successfully {action} {subTopic}")
    else:
        print(f"Failed to {action} {subTopic}: {r.status_code} - {r.text}")

# --- Data for Repair Batch 1 (Rasam Items 1-10) ---
rasam_items = [
    {
        "mainTopic": "Rasam Items",
        "subTopic": "Tomato Rasam",
        "article": """### Detailed Tomato Rasam Recipe (Sattvik Style)\n\nTomato Rasam is a soul-warming, tangy lentil soup. This version is light, spicy, and perfectly balanced without any onion or garlic.\n\n#### 1. Ingredients\n* **Tomatoes**: 2 large, ripe (finely chopped).\n* **Toor Dal**: 1/4 cup (boiled until mushy and whisked).\n* **Tamarind Extract**: 1 tablespoon (optional if tomatoes are very tangy).\n* **Turmeric Powder**: 1/4 teaspoon.\n* **Rasam Powder**: 1.5 tablespoons.\n* **Salt**: To taste.\n* **Coriander Leaves**: A handful.\n\n**For Tempering:**\n* **Ghee**: 1 teaspoon.\n* **Mustard Seeds**: 1/2 teaspoon.\n* **Cumin Seeds**: 1/2 teaspoon.\n* **Dried Red Chilies**: 1 to 2.\n* **Curry Leaves**: a few.\n* **Hing**: a pinch.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Bases**\nPrepare the whisked toor dal and chopped tomatoes.\n\n**Step 2: Simmering**\nIn a pot, boil tomatoes with turmeric, rasam powder, and salt in 2 cups of water until they soften.\n\n**Step 3: Combining**\nAdd the whisked dal and adjust the water for a thin, soup-like consistency. Simmer until a frothy layer forms on top.\n\n**Step 4: Tempering**\nHeat ghee, add mustard seeds, cumin, red chilies, curry leaves, and hing. Pour over the rasam.\n\n**Step 5: Garnish**\nAdd fresh coriander leaves immediately and cover the pot.\n\n#### 3. What are the Health Benefits?\n* **Hydration**: Excellent for maintaining fluid balance.\n* **Vitamin C & Lycopene**: High in immune-boosting antioxidants.\n\n#### 4. Who Can Avoid?\n* **Acute Heartburn**: Individuals with severe acid reflux should moderation consumption due to the tanginess."""
    },
    {
        "mainTopic": "Rasam Items",
        "subTopic": "Pepper Rasam",
        "article": """### Detailed Pepper Rasam (Milagu Rasam) Recipe (Sattvik Style)\n\nPepper Rasam is a famous Ayurvedic preparation known for its incredible ability to clear the respiratory tract and aid digestion.\n\n#### 1. Ingredients\n* **Black Peppercorns**: 1 tablespoon.\n* **Cumin Seeds**: 1 tablespoon.\n* **Tamarind Extract**: 1.5 tablespoons.\n* **Turmeric**: 1/4 teaspoon.\n* **Hing**: 1/4 teaspoon.\n* **Salt**: To taste.\n* **Ghee**: 1.5 teaspoons.\n* **Mustard Seeds**: 1/2 teaspoon.\n* **Curry Leaves**: a few.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Spice Paste**\nCoarsely grind the black peppercorns and cumin seeds.\n\n**Step 2: Tamarind Water**\nBoil the tamarind extract in 3 cups of water with salt and turmeric until the raw smell disappears.\n\n**Step 3: Infusing Spices**\nAdd the ground pepper-cumin mix and the hing. Let it simmer for just 2-3 minutes; do not over-boil at this stage.\n\n**Step 4: Tempering**\nHeat ghee, add mustard seeds and curry leaves. Pour over the hot rasam.\n\n#### 3. What are the Health Benefits?\n* **Cold & Cough Relief**: Pepper and cumin are natural decongestants.\n* **Metabolism**: Boosts digestive fire prominently.\n\n#### 4. Who Can Avoid?\n* **Oral Ulcers**: The heat from black pepper can be painful if you have active mouth sores."""
    },
    {
        "mainTopic": "Rasam Items",
        "subTopic": "Lemon Rasam",
        "article": """### Detailed Lemon Rasam (Elumichai Rasam) Recipe (Sattvik Style)\n\nLemon Rasam is uniquely refreshing, using fresh lemon juice for acidity instead of traditional tamarind. It is light and very soothing.\n\n#### 1. Ingredients\n* **Lemon**: 1 medium (juiced).\n* **Toor Dal**: 1/4 cup (cooked and whisked).\n* **Ginger**: 1/2 inch (grated).\n* **Green Chilies**: 1 to 2 (slit).\n* **Turmeric and Salt**: To taste.\n* **Ghee and Mustard Seeds**: for tempering.\n* **Curry Leaves and Coriander**: for flavor.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Boiling**\nBoil water with ginger, green chilies, turmeric, and salt for 5 minutes.\n\n**Step 2: Adding Lentils**\nAdd the whisked toor dal and bring to a gentle simmer until frothy.\n\n**Step 3: The Tangy Finish**\nTurn off the heat. *Crucial:* Add the fresh lemon juice only after turning off the heat to avoid bitterness.\n\n**Step 4: Tempering**\nAdd a ghee tempering of mustard seeds, curry leaves, and a pinch of hing.\n\n#### 3. What are the Health Benefits?\n* **Vitamin C**: Excellent for skin and immunity.\n* **Alkalizing**: Helps balance the body's internal pH.\n\n#### 4. Who Can Avoid?\n* **Joint Pains**: Those with severe Vata-related joint inflammation should use lemon sparingly."""
    },
    {
        "mainTopic": "Rasam Items",
        "subTopic": "Garlic-free Mysore Rasam",
        "article": """### Detailed Mysore Rasam (Garlic-Free) Recipe (Sattvik Style)\n\nMysore Rasam is distinguished by its special freshly ground spice mix and the addition of shredded coconut, providing a richer profile than standard rasams.\n\n#### 1. Ingredients\n* **Toor Dal**: 1/2 cup.\n* **Tomatoes**: 1 large.\n* **Tamarind Extract**: small amount.\n* **Mysore Rasam Powder**: (Coriander seeds, Cumin, Red chilies, and Shredded Coconut ground together).\n* **Salt and Turmeric**: To taste.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Prep Dal**\nCook dal until smooth. Boil tomatoes and tamarind together.\n\n**Step 2: Spicing**\nAdd the special Mysore rasam spice mix and allow to simmer intensely for a few minutes.\n\n**Step 3: Texture**\nThe coconut in the spice mix provides a slight body and thickness to the rasam.\n\n**Step 4: Finish**\nTemper with ghee, mustard, and curry leaves.\n\n#### 3. What are the Health Benefits?\n* **Satisfying**: More filling than lighter rasams due to the dal and coconut content.\n* **Digestive**: Spices used are excellent for metabolic function.\n\n#### 4. Who Can Avoid?\n* **Weight Management**: Slightly higher calorie than plain pepper rasam; avoid drinking in large quantities between meals."""
    },
    {
        "mainTopic": "Rasam Items",
        "subTopic": "Pineapple Rasam",
        "article": """### Detailed Pineapple Rasam Recipe (Sattvik Style)\n\nA festive and sophisticated variation of rasam that combines the natural sweetness of pineapple with spicy and tangy notes. It is often served at special sattvik feasts.\n\n#### 1. Ingredients\n* **Pineapple**: 1/2 cup (finely chopped) + 1/4 cup (pureed).\n* **Toor Dal**: 1/4 cup (whisked).\n* **Tomatoes**: 1 (chopped).\n* **Rasam Powder**: 1 tablespoon.\n* **Green Chilies**: 1.\n* **Salt and Turmeric**: To taste.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Boiling the Base**\nSimmer chopped pineapple, tomatoes, and chilies in water until tender.\n\n**Step 2: Puree and Dal**\nAdd the pineapple puree and the whisked dal to the pot. Stir well.\n\n**Step 3: Flavoring**\nAdd rasam powder and turmeric. Simmer until the surface is frothy.\n\n**Step 4: Final Tempering**\nAdd a ghee tempering with mustard, cumin, and hing.\n\n#### 3. What are the Health Benefits?\n* **Anti-inflammatory**: Pineapple contains bromelain, which helps with swelling and digestion.\n* **Festive Joy**: The unique flavor profile brings happiness to the mind (Sattvic bliss).\n\n#### 4. Who Can Avoid?\n* **Highly Sensitive Stomachs**: The combination of tropical fruit acid and spices might be too intense for those with active gastritis."""
    },
    {
        "mainTopic": "Rasam Items",
        "subTopic": "Coriander Rasam",
        "article": """### Detailed Coriander Rasam (Kothamalli Rasam) Recipe (Sattvik Style)\n\nCoriander Rasam is deeply aromatic and prized for its cooling and detoxifying properties. It uses fresh coriander stems and leaves for its base flavor.\n\n#### 1. Ingredients\n* **Fresh Coriander**: 1 large bunch (stems included).\n* **Cumin Seeds and Peppercorns**: 1 teaspoon each.\n* **Green Chili**: 1.\n* **Tamarind Extract**: small amount.\n* **Salt**: To taste.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: The Core Paste**\nGrind coriander stems, cumin, peppercorns, and green chili into a paste.\n\n**Step 2: The Broth**\nMix the paste into 3 cups of water (or tamarind water). Add salt.\n\n**Step 3: Simmer**\nBring to a rolling boil, then immediately turn down to a simmer for 3 minutes.\n\n**Step 4: Garnish**\nFinish with lots of fresh chopped coriander leaves and a light ghee tempering.\n\n#### 3. What are the Health Benefits?\n* **Liver Support**: Coriander helps the liver detoxify the blood.\n* **Cooling**: Excellent for calming excess body heat.\n\n#### 4. Who Can Avoid?\n* **Kapha Cold**: If suffering from a very heavy, congested chest cold, pepper rasam is preferred over coriander rasam."""
    },
    {
        "mainTopic": "Rasam Items",
        "subTopic": "Jeera Rasam",
        "article": """### Detailed Jeera Rasam (Cumin Rasam) Recipe (Sattvik Style)\n\nJeera Rasam is a simple, effective remedy for bloating and indigestion. It is the lightest form of rasam, often served when one needs a gentle meal.\n\n#### 1. Ingredients\n* **Cumin Seeds**: 1.5 tablespoons.\n* **Black Peppercorns**: 1/2 teaspoon.\n* **Tamarind Extract**: small amount.\n* **Hing**: 1/4 teaspoon.\n* **Ghee**: for tempering.\n* **Curry Leaves**: for aroma.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Crushing**\nHand-crush or coarsely grind the cumin and pepper.\n\n**Step 2: Simmering**\nBoil the spices in tamarind water for 5-7 minutes. Add hing.\n\n**Step 3: Tempering**\nAdd a simple tempering of mustard seeds and curry leaves in ghee.\n\n#### 3. What are the Health Benefits?\n* **Digestive Engine**: Cumin is the ultimate digestive spice in Ayurveda.\n* **Gas Relief**: Excellent for relieving bloating and abdominal discomfort.\n\n#### 4. Who Can Avoid?\n* **Everyone can enjoy**: This is an extremely gentle and beneficial preparation."""
    },
    {
        "mainTopic": "Rasam Items",
        "subTopic": "Ginger Rasam",
        "article": """### Detailed Ginger Rasam (Inji Rasam) Recipe (Sattvik Style)\n\nGinger Rasam is sharp, warming, and highly effective for clearing sluggishness from the body and mind. It is a favorite during the rainy and winter seasons.\n\n#### 1. Ingredients\n* **Fresh Ginger**: 2-inch piece (finely grated or crushed).\n* **Tomatoes**: 2 (mashed).\n* **Toor Dal Water**: (Water from cooked dal).\n* **Lemon Juice**: 1 tablespoon.\n* **Peppercorns and Cumin**: 1 teaspoon each.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Sauté**\nAdd ginger and tomatoes to a pot and boil until soft.\n\n**Step 2: Add Spices**\nAdd crushed pepper and cumin along with the dal water. Boil for 5 minutes.\n\n**Step 3: Finishing**\nTurn off heat and add lemon juice.\n\n#### 3. What are the Health Benefits?\n* **Nausea Relief**: Ginger is excellent for settling the stomach.\n* **Circulation**: Improves blood flow and warms the extremities.\n\n#### 4. Who Can Avoid?\n* **Skin Rashes**: Those with active inflammatory skin conditions (High Pitta) should avoid excess ginger."""
    },
    {
        "mainTopic": "Rasam Items",
        "subTopic": "Mango Rasam",
        "article": """### Detailed Mango Rasam Recipe (Sattvik Style)\n\nThis rasam uses the unique sourness of raw mango instead of tamarind, providing a fruity and sharp profile that is incredibly appetizing during summer.\n\n#### 1. Ingredients\n* **Raw Mango chunks**: 1/2 cup.\n* **Toor Dal**: (cooked and whisked).\n* **Spices**: Rasam powder, salt, and turmeric.\n* **Coriander**: for garnish.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Boil Mango**\nCook raw mango chunks in water until they are completely soft and mushy.\n\n**Step 2: Mash**\nMash the mango pieces into the water. Add toor dal and additional water.\n\n**Step 3: Boil**\nAdd spices and bring to a simmer until frothy.\n\n#### 3. What are the Health Benefits?\n* **Immunity**: High in Vitamin C.\n* **Stomach Tonic**: Helps in cases of summer diarrhea (when made mild).\n\n#### 4. Who Can Avoid?\n* **Tooth Sensitivity**: High acidity might be an issue for some."""
    },
    {
        "mainTopic": "Rasam Items",
        "subTopic": "Amla Rasam",
        "article": """### Detailed Amla Rasam (Gooseberry Rasam) Recipe (Sattvik Style)\n\nAmla Rasam is a nutritional powerhouse, delivering the astringent and sour benefits of gooseberry in a warm, comforting soup format.\n\n#### 1. Ingredients\n* **Fresh Amla**: 3 (deseeded and crushed).\n* **Turmeric and Salt**: To taste.\n* **Cumin and Pepper**: 1 teaspoon each.\n* **Ghee**: for tempering.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Extract**\nBoil the crushed amla in water for 10 minutes to extract its juices. Strain the bits if preferred.\n\n**Step 2: Season**\nAdd the cumin-pepper powder and turmeric. Simmer for a few minutes.\n\n**Step 3: Temper**\nAdd a ghee tempering with mustard, curry leaves, and a large pinch of hing.\n\n#### 3. What are the Health Benefits?\n* **Hair and Skin**: Amla is the ultimate rejuvenation herb (Rasayana).\n* **High Antioxidants**: Protects against daily cellular stress.\n\n#### 4. Who Can Avoid?\n* **Extreme Dryness**: Those with very dry skin or hair should always pair this with a good amount of ghee to balance amla's drying property."""
    }
]

# --- Data for Repair Batch 1 (Bread Items 1-15) ---
bread_items = [
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Chapati",
        "article": """### Detailed Chapati Recipe (Sattvik Style)\n\nChapati is the undisputed king of Indian breads. Prepared with whole wheat and water, it is light, nutritious, and perfectly Sattvik.\n\n#### 1. Ingredients\n* **Whole Wheat Flour (Atta)**: 2 cups.\n* **Water**: Warm, as needed for kneading.\n* **Salt**: a pinch (optional).\n* **Ghee**: for brushing on top.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Kneading**\nAdd water slowly to the flour and knead into a soft, pliable dough. Cover and rest for 20 minutes.\n\n**Step 2: Rolling**\nTake lemon-sized balls and roll them out into thin, even circles using a rolling pin.\n\n**Step 3: Roasting**\nPlace on a hot tawa. When small bubbles appear, flip it. Cook both sides until golden spots appear.\n\n**Step 4: Puffing**\nOptionally place directly over the flame briefly to puff it up.\n\n#### 3. What are the Health Benefits?\n* **Fiber Rich**: Whole wheat promotes healthy bowel function.\n* **Complex Carbs**: Provides sustained energy.\n\n#### 4. Who Can Avoid?\n* **Gluten Allergy**: Celiac patients must use gluten-free alternatives like Jowar or Bajra rotis."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Phulka",
        "article": """### Detailed Phulka Recipe (Sattvik Style)\n\nA Phulka is a variation of the chapati that is roasted primarily on a direct flame, causing it to puff up like a balloon. It is exceptionally light on the stomach.\n\n#### 1. Ingredients\n* **Whole Wheat Flour**: as needed.\n* **Water**: for a soft dough.\n* **No Oil/Ghee**: (Phulkas are traditionally fat-free during cooking).\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Dough**\nKnead a very soft dough and rest it.\n\n**Step 2: Rolling**\nRoll into very thin circles.\n\n**Step 3: Tawa and Flame**\nCook for 10 seconds on a tawa, flip, then immediately transfer to a direct high flame until it puffs.\n\n#### 3. What are the Health Benefits?\n* **Weight Loss**: Low-calorie and fat-free, making it ideal for those watching their weight.\n* **Easy Digestion**: The direct flame cooking makes the starch very easy to break down.\n\n#### 4. Who Can Avoid?\n* **Gluten Sensitivity**: Contains wheat."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Poori",
        "article": """### Detailed Poori Recipe (Sattvik Style)\n\nPoori is a beloved festive bread. These deep-fried, puffed circles are golden, slightly crispy, and incredibly satisfying.\n\n#### 1. Ingredients\n* **Whole Wheat Flour**: 2 cups.\n* **Semolina (Sooji)**: 1 tablespoon (adds crispness).\n* **Salt**: a pinch.\n* **Oil**: for deep frying.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Tight Dough**\nKnead a firm and tight dough (firmer than chapati dough) using minimal water.\n\n**Step 2: Small Circles**\nRoll into small, slightly thick circles.\n\n**Step 3: Frying**\nDrop into hot oil. Press gently with a ladle until it puffs up. Flip and fry until golden.\n\n#### 3. What are the Health Benefits?\n* **High Energy**: Great for mornings when physical work is high.\n* **Sattvic Joy**: Brings a sense of celebration to the meal.\n\n#### 4. Who Can Avoid?\n* **Weight and Cholesterol Issues**: Being deep-fried, these should be a rare treat."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Aloo Poori",
        "article": """### Detailed Aloo Poori Recipe (Sattvik Style)\n\nAloo Poori is a delicious variation where spicy mashed potatoes are mixed directly into the dough, resulting in a flavored and incredibly soft poori.\n\n#### 1. Ingredients\n* **Potatoes**: 2 medium (boiled and mashed smooth).\n* **Whole Wheat Flour**: 1.5 cups.\n* **Cumin Seeds and Turmeric**: 1/2 teaspoon each.\n* **Red Chili Powder**: a pinch.\n* **Salt**: To taste.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Mixing**\nCombine the mashed potatoes with flour, spices, and salt. Knead into a firm dough without using much water (the potato moisture is usually enough).\n\n**Step 2: Frying**\nRoll into small discs and deep fry until they puff and turn golden brown.\n\n#### 3. What are the Health Benefits?\n* **Highly Satiating**: Keeps you full for a long time due to the combination of complex carbs and fats.\n* **Flavorful**: Does not require a side dish necessarily.\n\n#### 4. Who Can Avoid?\n* **Diabetics**: Starchy potatoes and fried dough can cause blood sugar spikes."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Paratha (no onion)",
        "article": """### Detailed Plain Paratha Recipe (Garlic-Free/Sattvik Style)\n\nParathas are layered or stuffed breads that are shallow-fried on a tawa. They are richer and heartier than chapatis.\n\n#### 1. Ingredients\n* **Whole Wheat Flour**: 2 cups.\n* **Ghee**: for layering and frying.\n* **Salt**: To taste.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Layering**\nRoll a ball of dough into a circle, apply ghee, and fold into a triangle or square.\n\n**Step 2: Re-rolling**\nRoll out the folded dough gently to preserve the layers.\n\n**Step 3: Shallow Fry**\nPlace on tawa and apply ghee on both sides until crisp and golden brown.\n\n#### 3. What are the Health Benefits?\n* **Healthy Fats**: Ghee is excellent for joint lubrication.\n* **Nutritious**: A staple for growing children.\n\n#### 4. Who Can Avoid?\n* **Weight Loss**: Use oil instead of ghee if under strict calorie counts, or stick to phulkas."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Mixed Veg Paratha",
        "article": """### Detailed Mixed Vegetable Paratha Recipe (Sattvik Style)\n\nA nutrient-dense bread where finely minced vegetables like carrots, beans, and peas are stuffed inside or mixed into the dough.\n\n#### 1. Ingredients\n* **Mixed Veggies**: 1 cup (finely grated/chopped).\n* **Whole Wheat Flour**: 2 cups.\n* **Spices**: Cumin, turmeric, and coriander powder.\n* **Ghee**: for frying.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Prep Veggies**\nSauté the minced veggies briefly to remove moisture.\n\n**Step 2: Stuffing**\nPlace a small portion of veggies inside a dough ball, seal, and roll carefully.\n\n**Step 3: Frying**\nCook on a hot tawa with ghee until crispy on both sides.\n\n#### 3. What are the Health Benefits?\n* **Vitamin-Packed**: A stealthy way to consume multiple vegetables.\n* **High Fiber**: Excellent for digestion.\n\n#### 4. Who Can Avoid?\n* **Gluten Sensitive**: Contains wheat."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Gobi Paratha",
        "article": """### Detailed Gobi Paratha (Cauliflower) Recipe (Sattvik Style)\n\nGobi Paratha is a winter favorite. Finely grated cauliflower flavored with ginger and spices is stuffed into the dough.\n\n#### 1. Ingredients\n* **Cauliflower**: 1.5 cups (finely grated).\n* **Ginger**: 1 inch (grated).\n* **Green Chilies**: 1 (finely chopped).\n* **Ajwain (Carom Seeds)**: 1/2 teaspoon (essential for cabbage/cauliflower).\n* **Whole Wheat Flour**: for the dough.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Squeeze Moisture**\nAdd salt to grated cauliflower, let sit for 10 minutes, and squeeze out all excess water.\n\n**Step 2: Stuff**\nAdd ajwain and ginger to the gobi and stuff inside the parathas.\n\n**Step 3: Cook**\nRoast on a tawa with ghee.\n\n#### 3. What are the Health Benefits?\n* **Low Glycemic**: Cauliflower is a low-carb veggie.\n* **Indigestion Relief**: Ajwain prevents the bloating often associated with cauliflower.\n\n#### 4. Who Can Avoid?\n* **Severe Thyroid Issues**: Avoid raw/under-cooked cauliflower if on high doses of thyroid meds."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Paneer Paratha",
        "article": """### Detailed Paneer Paratha Recipe (Sattvik Style)\n\nA rich, protein-filled bread that is incredibly soft and delicious. Made by stuffing crumbled paneer seasoned with herbs into whole wheat dough.\n\n#### 1. Ingredients\n* **Paneer**: 1 cup (crumbled).\n* **Coriander Leaves**: chopped.\n* **Black Pepper Powder**: a pinch.\n* **Whole Wheat Flour**: 2 cups.\n* **Ghee**: for frying.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Filling**\nMix paneer, salt, pepper, and coriander. Do not add water.\n\n**Step 2: Rolling**\nStuff the paneer inside a dough ball and roll into a medium thick circle.\n\n**Step 3: Frying**\nCook on a tawa with ghee until golden brown.\n\n#### 3. What are the Health Benefits?\n* **High Protein**: Excellent for muscle building and protein intake.\n* **Calcium**: Rich source of dairy-based calcium.\n\n#### 4. Who Can Avoid?\n* **Lactose Intolerance**: Explicitly contains dairy."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Methi Paratha",
        "article": """### Detailed Methi Paratha (Fenugreek) Recipe (Sattvik Style)\n\nMethi Parathas are exceptionally fragrant and known for their many health benefits. Fresh fenugreek leaves are mixed directly into the dough.\n\n#### 1. Ingredients\n* **Fresh Methi (Fenugreek) Leaves**: 1.5 cups (finely chopped).\n* **Whole Wheat Flour**: 2 cups.\n* **Turmeric and Red Chili Powder**: a pinch each.\n* **Ajwain**: 1/2 teaspoon.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Dough Mix**\nMix the methi leaves directly into the flour with spices and ajwain. Add water to make a soft dough.\n\n**Step 2: Roll and Fry**\nRoll into circles and shallow fry with ghee until spots appear.\n\n#### 3. What are the Health Benefits?\n* **Blood Sugar Control**: Methi is excellent for regulating insulin levels.\n* **Anti-inflammatory**: Helpful for joint health.\n\n#### 4. Who Can Avoid?\n* **Extremely High Pitta**: Fenugreek is heating; consume moderately in heat conditions."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Ajwain Paratha",
        "article": """### Detailed Ajwain Paratha Recipe (Sattvik Style)\n\nA simple, aromatic paratha that uses carom seeds (ajwain) for flavor and better digestion. It is a popular rainy-day bread.\n\n#### 1. Ingredients\n* **Whole Wheat Flour**: 2 cups.\n* **Ajwain (Carom Seeds)**: 1 tablespoon.\n* **Salt**: To taste.\n* **Ghee**: for roasting.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Incorporate Seeds**\nKnead the dough with ajwain and salt mixed in.\n\n**Step 2: Fry**\nRoll into circles or triangles and roast with ghee.\n\n#### 3. What are the Health Benefits?\n* **Gas & Bloating Relief**: Ajwain is the first line of defense against digestive gas.\n* **Aromatic**: Carom seeds provide a unique, savory aroma that stimulates appetite.\n\n#### 4. Who Can Avoid?\n* **Everyone can enjoy**: This is an extremely safe and healthy bread."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Akki Roti (Rice Flour)",
        "article": """### Detailed Akki Roti (Rice Flour Bread) Recipe (Sattvik Style)\n\nA specialty from Karnataka, this gluten-free bread is made from rice flour, usually mixed with grated carrots and coconut.\n\n#### 1. Ingredients\n* **Rice Flour**: 2 cups.\n* **Warm Water**: as needed.\n* **Grated Carrots and Coconut**: 1/4 cup each.\n* **Salt and Green Chilies**: To taste.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Mixing**\nCombine rice flour with veggies and spices. Use warm water to make a soft dough.\n\n**Step 2: Patting**\nThis dough cannot be rolled; instead, pat it thin directly onto a greased tawa using your fingers.\n\n**Step 3: Roasting**\nCook covered on medium heat with a little oil until crispy.\n\n#### 3. What are the Health Benefits?\n* **Gluten Free**: Safe for celiac patients.\n* **Low In Fat**: Traditionally uses minimal oil during cooking.\n\n#### 4. Who Can Avoid?\n* **Blood Sugar Control**: Rice has a high glycemic index; use sparingly if managing diabetes."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Ragi Roti (Finger Millet)",
        "article": """### Detailed Ragi Roti (Finger Millet) Recipe (Sattvik Style)\n\nA superfood bread made from calcium-rich finger millet. It is dark, earthy, and highly nutritious.\n\n#### 1. Ingredients\n* **Ragi Flour**: 2 cups.\n* **Warm Water**: for a soft dough.\n* **Chopped Ginger and Chilies**: for flavor.\n* **Salt**: To taste.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Dough**\nMix ragi flour with hot water (helps clarify the starch) to make it pliable.\n\n**Step 2: Patting**\nPat onto a wet cloth or banana leaf first, then transfer to the hot tawa.\n\n**Step 3: Cooking**\nRoast both sides until firm and cooked through.\n\n#### 3. What are the Health Benefits?\n* **Calcium Powerhouse**: Ragi has 10 times the calcium of rice or wheat.\n* **Iron Source**: Excellent for blood health.\n\n#### 4. Who Can Avoid?\n* **Extremely Poor Digestion**: Ragi is denser than wheat; ensure it is properly cooked."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Bajra Roti (Pearl Millet)",
        "article": """### Detailed Bajra Roti Recipe (Sattvik Style)\n\nA traditional winter bread made from pearl millet. It is highly warming and filling, typically paired with jaggery and ghee.\n\n#### 1. Ingredients\n* **Bajra Flour**: 2 cups.\n* **Hot Water**: for kneading.\n* **Butter/Ghee**: for serving.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Hot Water Knead**\nUse only hot water to knead bajra flour to prevent it from cracking.\n\n**Step 2: Shaping**\nFlatten using your palms or pat onto a surface.\n\n**Step 3: Roasting**\nSlow cook on a tawa until brown spots appear and it's thoroughly cooked.\n\n#### 3. What are the Health Benefits?\n* **Warming**: Bajra generates natural body heat in winter.\n* **Gluten Free**: Safe for many dietary restrictions.\n\n#### 4. Who Can Avoid?\n* **Summer Months**: Avoid eating large amounts in peak summer as it is highly heating (Pitta aggravating)."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Jowar Roti (Sorghum)",
        "article": """### Detailed Jowar Roti (Sorghum) Recipe (Sattvik Style)\n\nA nutritious, gluten-free flatbread that is a staple in many parts of India. It is light, easy to digest, and very healthy.\n\n#### 1. Ingredients\n* **Jowar Flour**: as needed.\n* **Hot Water**: to make the dough pliable.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Knead**\nKnead jowar flour with boiling hot water into a smooth dough.\n\n**Step 2: Flatten**\nPat thin circles manually.\n\n**Step 3: Tawa Cook**\nCook on a hot tawa. Use a wet cloth to wipe the top surface while cooking to ensure it doesn't dry out.\n\n#### 3. What are the Health Benefits?\n* **Good for Heart**: High fiber and minerals support cardiovascular health.\n* **Gluten Free**: Ideal for weight and gluten management.\n\n#### 4. Who Can Avoid?\n* **Everyone can enjoy**: This is one of the most balanced millets."""
    },
    {
        "mainTopic": "Breads / Rotis",
        "subTopic": "Missi Roti (Gram Flour)",
        "article": """### Detailed Missi Roti (Gram Flour) Recipe (Sattvik Style)\n\nMissi Roti is a savory bread made by mixing whole wheat flour with Besan (gram flour). It is slightly spicy and very aromatic.\n\n#### 1. Ingredients\n* **Besan (Gram Flour)**: 1 cup.\n* **Whole Wheat Flour**: 1 cup.\n* **Turmeric and Cumin**: a pinch.\n* **Kasuri Methi**: 1 tablespoon.\n* **Salt**: To taste.\n\n#### 2. How to Cook - Step-by-Step Guidance\n**Step 1: Dough Mix**\nCombine both flours with spices and salt. Knead into a dough.\n\n**Step 2: Roast**\nRoll out and cook on tawa. Apply a little ghee for a crisp exterior.\n\n#### 3. What are the Health Benefits?\n* **High Protein**: Gram flour increases the protein density of the roti.\n* **Low GI**: Digests slower than plain wheat roti.\n\n#### 4. Who Can Avoid?\n* **Severe Gas (Vata)**: Gram flour is gas-forming for some; ensure cumin and hing are present."""
    }
]

# --- Main Logic to Run the Repair ---
if __name__ == "__main__":
    print("Starting Repair Batch 1 (Rasams and Breads)...")
    
    print("Processing Rasams...")
    for item in rasam_items:
        update_article(item["mainTopic"], item["subTopic"], item["article"])
        
    print("Processing Breads...")
    for item in bread_items:
        update_article(item["mainTopic"], item["subTopic"], item["article"])
        
    print("Repair Batch 1 Completed.")
