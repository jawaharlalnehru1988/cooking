const url = "https://api.askharekrishna.com/api/v1/cooking/articles/1/";

const updatedContent = `
# Detailed Lemon Rice Recipe (Sattvik Style)

A Sattvik kitchen in both Ayurveda and Krishna Consciousness (prasadam culture) emphasizes foods that are pure, fresh, and offered with love. This Lemon Rice is a staple of that tradition—refreshing, healing, and deeply satisfying.

---

## 1. Ingredients
- **Rice**: 2 cups of cooked Basmati rice (grain-separated and cooled).
- **Lemon**: 1.5 to 2 fresh lemons (juiced).
- **Oil/Ghee**: 2 tablespoons of pure A2 cow ghee or sunflower oil.
- **Mustard Seeds**: 1 teaspoon.
- **Urad Dal & Chana Dal**: 1 teaspoon each for crunch.
- **Peanuts**: 3 tablespoons (raw or roasted).
- **Turmeric Powder**: 1/2 teaspoon (for that sacred golden hue).
- **Ginger**: 1-inch piece, finely grated.
- **Green Chilies**: 2 (slit), for mild warmth without agitation.
- **Curry Leaves**: 8-10 fresh leaves.
- **Hing (Asafoetida)**: A pinch (essential for digestion).
- **Salt**: 1 teaspoon (or to taste).
- **Garnish**: Fresh coriander leaves.

---

## 2. How to Cook - Step-by-Step Guidance

### Step 1: Prepare the Rice
Ensure the rice is cooked perfectly—each grain should be separate. Let it cool down to room temperature so it doesn't break when mixing.

### Step 2: The Tempering (Tadka)
Heat ghee in a pan on medium heat. Add mustard seeds. When they start to pop, add the chana dal, urad dal, and peanuts. Fry until they turn slightly golden and aromatic.

### Step 3: Infusing Flavors
Add the grated ginger, green chilies, and curry leaves. Sauté for 30 seconds. Turn the heat to low and add the turmeric powder and hing. Adding turmeric to the oil ensures an even color.

### Step 4: Combine
Turn off the heat. This is important—adding lemon juice to boiling heat can make it bitter. Add the lemon juice and salt to the pan and mix.

### Step 5: Final Toss
Pour this aromatic mixture over the cooled rice. Gently fold the rice using a spatula or by hand (traditionally preferred for better energy exchange) until every grain is coated in gold.

### Step 6: Garnish
Finish with freshly chopped coriander. Cover and let it sit for 10-15 minutes to allow the flavors to penetrate the rice.

---

## 3. What are the Health Benefits?
- **Immune Support**: High Vitamin C content from fresh lemon juice helps fight infections.
- **Detoxification**: Turmeric and ginger are natural cleansers for the blood and digestive tract.
- **Sattvic Energy**: Provides clean, light energy that supports meditation and mental clarity.
- **Digestive Balance**: Hing and ginger prevent bloating and aid in easy assimilation of nutrients.

---

## 4. Who Can Avoid?
- **Pitta Imbalance**: Those with very high Pitta (excess body heat or acidity) should use lemon sparingly, as high acidity can sometimes aggravate heat.
- **Severe Gastritis**: If you have active stomach ulcers or severe acid reflux, the citric acid might cause temporary discomfort. Consult an Ayurvedic practitioner.

---
*Offer with love and devotion. Hare Krishna!*
`.trim();

const payload = {
    mainTopic: "Variety Rice Items",
    subTopic: "Lemon Rice",
    article: updatedContent,
    language: "en",
    order: 1
};

fetch(url, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error(`Failed to update article. Status: ${response.status}`);
})
.then(data => {
    console.log("Successfully updated article!");
    console.log(JSON.stringify(data, null, 2));
})
.catch(error => {
    console.error("An error occurred:", error.message);
});
