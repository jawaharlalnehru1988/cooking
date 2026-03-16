import requests
import json

url = "https://api.askharekrishna.com/api/v1/cooking/articles/"

article_content = """
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
"""

payload = {
    "mainTopic": "Variety Rice Items",
    "subTopic": "Lemon Rice",
    "article": article_content.strip(),
    "language": "en",
    "order": 1
}

headers = {
    "Content-Type": "application/json"
}

try:
    response = requests.post(url, data=json.dumps(payload), headers=headers)
    if response.status_code == 201:
        print("Successfully created article!")
        print(json.dumps(response.json(), indent=2))
    else:
        print(f"Failed to create article. Status code: {response.status_code}")
        print(response.text)
except Exception as e:
    print(f"An error occurred: {e}")
