const url = "https://api.askharekrishna.com/api/v1/cooking/articles/";

const articleContent = `
A Sattvik kitchen in both Ayurveda and Krishna Consciousness (prasadam culture) emphasizes foods that are:

* **Pure, fresh, vegetarian**
* **Non-stimulating** (no onion, garlic, coffee, tea)
* **Balanced for digestion**
* **Cooked with devotion** and offered before eating

### Health Benefits of Lemon Rice
Lemon rice is not only delicious but also highly beneficial for health:
1. **Rich in Vitamin C**: The fresh lemon juice provides a significant boost to the immune system.
2. **Digestive Aid**: Turmeric and ginger used in the tempering help in detoxification and improve digestion.
3. **Energy Boost**: The complex carbohydrates in rice provide sustained energy throughout the day.
4. **Anti-inflammatory**: Turmeric is a powerful anti-inflammatory agent that supports overall well-being.
`.trim();

const payload = {
    mainTopic: "Variety Rice Items",
    subTopic: "Lemon Rice",
    article: articleContent,
    language: "en",
    order: 1
};

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error(`Failed to create article. Status: ${response.status}`);
})
.then(data => {
    console.log("Successfully created article!");
    console.log(JSON.stringify(data, null, 2));
})
.catch(error => {
    console.error("An error occurred:", error.message);
});
