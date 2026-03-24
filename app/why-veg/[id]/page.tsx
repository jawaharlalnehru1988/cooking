import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import Link from "next/link";

// Elaborate content library for Why Veg?
const whyVegArticles: Record<number, string> = {
  1: `
# 1. The Protein Myth: Where do you get your protein?

One of the most common challenges vegetarians face is the concern about protein. This "protein myth" stems from an era where meat was seen as the only "complete" protein source. However, modern science and ancient wisdom tell a different story.

### The Science
Protein is composed of amino acids. While animal products contain all nine essential amino acids, so do many plants (like quinoa, soy, and buckwheat). More importantly, by eating a variety of grains, beans, and nuts throughout the day, the human body naturally assembles a complete protein profile. Our bodies do not need a "complete protein" in every single bite; we need a balanced pool of amino acids.

### Medical Insight
Studies by the Academy of Nutrition and Dietetics show that vegetarians and vegans typically meet or exceed their protein requirements. Furthermore, plant-based proteins come packaged with fiber and antioxidants, whereas animal proteins often come with saturated fat and zero fiber.

### Moral & Scriptural
In the *Srimad Bhagavatam* and other Vedic texts, strength is seen as a byproduct of *Sattva* (goodness), not violence. Elephant, the strongest land animal, is a pure vegetarian. Its strength is steady and grounded, unlike the burst energy of a carnivore followed by long lethargy.

### Psychology
Consuming plant proteins promotes a steady mind, free from the hormonal residues of animal stress. This leads to better concentration and emotional stability.
  `,
  2: `
# 2. Plants Have Life Too: The Consciousness Argument

"If plants have life, why is it okay to eat them but not animals?" This question seeks to equate the two, but biology and Vedic philosophy clarify a fundamental difference.

### The Scientific Reason
Animals possess a complex central nervous system, a brain, and pain receptors (nociceptors) that allow them to experience suffering in a way identical to humans. Plants, while alive and responsive to stimuli, lack a nervous system and a brain. Their "response" is biochemical, not sensory or emotional.

### Moral Principle
The goal of *Ahimsa* is to minimize harm. Harvesting a fruit does not kill the tree, and even harvesting a vegetable involves the least possible amount of consciousness being affected compared to the slaughter of a conscious, feeling animal that actively tries to escape death.

### Scriptural Quote
*Bhagavad Gita 9.26*: "If one offers Me with love and devotion a leaf, a flower, fruit or water, I will accept it." The Lord specifies plant-based offerings, recognizing them as the appropriate level of sacrifice that maintains the balance of life without the stain of heavy karma.

### Psychological Reason
There is a profound difference in the human psyche when picking an apple versus witnessing the slaughter of a cow. Our natural empathy is triggered by the animal's cry, a signal that we are violating a fundamental moral law.
  `,
  3: `
# 3. The Food Chain Argument: Natural Order vs. Compassion

"Humans are at the top of the food chain, so we should be allowed to eat those below us." This argument justifies violence through power, yet true human advancement is measured by our ability to transcend animalistic instincts.

### The Moral Principle
True "dominion" or being at the "top" implies stewardship, not exploitation. Just as a good king protects his subjects, an advanced human being protects the more vulnerable species. Using our superior intelligence to industrially slaughter billions is a misuse of human potential.

### Scientific Reason
In nature, the food chain is a survival mechanism. Humans are the only species capable of making moral choices about their diet. We do not *need* to eat animals to survive in modern society. Therefore, meat-eating is no longer a "biological necessity" but a "moral choice."

### Scriptural Reason
The Vedas teach *Vasudhaiva Kutumbakam*—the whole world is one family. If we are all part of the same divine family, then there is no "top" or "bottom" that justifies the killing of "brothers" in different bodies.

### Psychological Reason
The "superiority complex" found in the food chain argument often spills over into human relationships, fostering a culture of "might is right" rather than "justice and compassion."
  `,
  4: `
# 4. Ancestral Hunting: Biology vs. Evolution

"Our ancestors were hunters, so it's natural for us to eat meat." This argument assumes that past survival behaviors should dictate our modern ethical standards.

### The Biological Reality
While early humans may have hunted to survive in scarce environments, their success was largely due to gathering fruits, tubers, and nuts. Anatomically, humans are generalists, but our digestive system and teeth are far more similar to those of our primate cousins (who are 95-99% vegetarian) than to true carnivores.

### Moral Principle
Progress as a species is marked by our ability to make ethical choices that transcend primitive survival instincts. We no longer live in caves or fight for survival daily; we have the abundance and knowledge to choose compassion.

### Scientific Reason
Anthropological evidence shows that the "gathering" part of "hunter-gatherer" provided the bulk of the calories for most of human history. Meat was a rare, high-risk supplement, not a daily staple.

### Psychological Reason
Following ancestral patterns blindly prevents us from evolving. Just as we moved beyond tribal warfare and other ancient "traditions," we are now moving toward a more empathetic relationship with the animal kingdom.
  `,
  5: `
# 5. Physical Vitality: The Plant-Powered Athlete

"Non-veg food is necessary for strength." This is perhaps the most persistent myth, yet it is being dismantled by elite athletes around the world.

### Scientific Reason
Plant-based diets are naturally lower in saturated fats and higher in antioxidants, which reduces inflammation and speeds up recovery times. Athletes like Novak Djokovic (Tennis) and Lewis Hamilton (F1) have demonstrated that peak performance is fully achievable on a plant-powered diet.

### Medical Insight
Meat consumption is linked to increased blood viscosity, which can slow down oxygen delivery to muscles. Plant-based diets promote better blood flow (vasodilation) and cardiovascular health, providing steady, long-term energy.

### Scriptural Quote
In many ancient cultures, the strongest creatures (Elephant, Rhinoceros, Bull) were celebrated for their vegetarian nature. The *Mahabharata* describes warriors who maintained strength through pure *Sattvic* diets, focusing on grains and dairy.

### Psychological Reason
Vegetarian strength is stable and enduring. It lacks the "spike and crash" of adrenaline-heavy meat diets, leading to better mental focus during physical exertion.
  `,
  6: `
# 6. The Choice Argument: Freedom vs. Universal Harm

"It's my personal choice to eat what I want." This argument often ignores the fact that a choice ceases to be purely personal when it involves a victim.

### The Moral Principle
John Stuart Mill's "Harm Principle" states that the only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others. An animal is an "other" who is harmed by the choice to eat meat.

### Scientific Reason
Individual dietary choices have a massive collective impact on the planet. From water usage to CO2 emissions, the "choice" to eat meat affects the shared environment and the survival of future generations.

### Scriptural Reason
*Manu Smriti 5.51*: "He who permits the slaughter of an animal, he who cuts it up, he who kills it, he who buys or sells meat, he who cooks it, he who serves it up, and he who eats it, must all be considered as the slayers of the animal." Responsibility is collective.

### Psychological Reason
The "personal choice" defense is often a psychological shield (cognitive dissonance) used to avoid the uncomfortable reality of the industry we support with our money.
  `,
  7: `
# 7. Purpose of Creation: Were animals "born to be eaten"?

"Animals were created by God for human use, including food." This perspective views nature as a resource rather than a sacred family.

### The Scriptural Truth
Most world scriptures emphasize stewardship. In the *Bhagavad Gita*, Krishna describes Himself as the father of all living entities. A father does not create some children for the others to eat. 

### Moral Principle
Every living being has a desire for life and a fear of death. To claim that a sentient being with a complex emotional life was created "only for a plate" is a denial of their inherent soul (*Atma*).

### Scientific Reason
Animals have complex social structures, individual personalities, and the capacity for joy and grief. These traits serve their own survival and social bonds, not human culinary preferences.

### Psychological Reason
When we view other beings as "objects" or "tools," we diminish our own capacity for empathy. Viewing animals as fellow travelers on the journey of life enriches our own spiritual experience.
  `,
  8: `
# 8. Vitamin B12 & Nutrition: Navigating the Science

"Vegetarians always have Vitamin B12 deficiency." This is a common nutritional challenge used to discredit plant-based living.

### Scientific Reason
B12 is produced by bacteria in soil and water, not by animals themselves. In our hyper-sanitized modern world, we wash all bacteria off our produce, which is why we (and even factory-farmed animals) often need supplements. Animals in factory farms are often injected with B12 supplements themselves.

### Medical Insight
It is much safer and more efficient to take a B12 supplement directly or eat fortified foods than to cycle it through an animal's body and consume it along with cholesterol and saturated fat. 

### Moral Principle
Taking a simple, small tablet or drinking fortified plant milk is a minute effort compared to the massive violence of the meat industry.

### Psychological Reason
Nutritional fear is often used as an excuse to avoid changing habits. With basic knowledge, a vegetarian diet is statistically healthier across almost all metrics, including longevity and lower rates of chronic disease.
  `,
  9: `
# 9. Overpopulation Myth: The Balance of Nature

"If we don't eat them, animals like chickens and cows will overpopulate and take over." This misunderstands the reality of industrial farming.

### Scientific Reason
Farm animals do not overpopulate naturally; they are bred by the billions through artificial insemination. If the demand for meat stops, the artificial breeding stops. The "overpopulation" is a man-made problem of the meat industry itself.

### Ecological Insight
Animal agriculture is the leading cause of habitat destruction. We are clearing forests to grow grain to feed these billions of artificially bred animals, which actually *disrupts* the natural balance and leads to the extinction of wild species.

### Scriptural Reason
The Vedas teach that nature is a self-regulating system (*Rta*). When humans stop interfering through mass breeding and slaughter, the natural proportions of species restore themselves.

### Psychology
This argument is a classic example of "projection"—blaming the victim for a situation (overbreeding) created by the oppressor (the industry).
  `,
  10: `
# 10. God's Permission: Scriptural Misinterpretations

"My religion says it's okay to eat animals." This challenge requires a deeper look at the context and hierarchy of spiritual laws.

### Scriptural Context
While some ancient texts mention animal sacrifice or meat, they were often concessional laws for those unable to maintain higher standards, or specifically for extreme survival. The "Higher Law" (*Sanatana Dharma*) consistently prioritizes *Ahimsa* (Non-violence).

### Moral Principle
Divine laws evolve with human consciousness. Just as older laws regarding slavery or social structures have been superseded by higher understandings of justice, our dietary ethics should reflect our growing compassion.

### Scientific Reason
Many religious dietary laws were also proto-health codes (e.g., avoiding pork or shellfish). In a modern world with clean, abundant plant food, the original "safety" or "survival" reasons for meat have vanished.

### Psychological Reason
Using God to justify violence is a heavy burden on the soul. Authentic spiritual realization always leads toward mercy, never toward unnecessary suffering.
  `,
  11: `
# 11. Humane Slaughter: The Ethical Contradiction

"I only eat meat from animals that were killed humanely." This phrase attempts to reconcile compassion with killing.

### Moral Principle
The term "humane" means having or showing compassion or benevolence. Is there a compassionate way to end the life of a healthy, young being that does not want to die? "Humane slaughter" is an oxymoron; the kindest act is to let them live.

### Scientific Reason
Investigation into even the "highest welfare" farms often reveals extreme stress, separation of mothers and calves, and the fundamental terror of the slaughterhouse environment.

### Scriptural Quote
*Vashistha Smriti*: "Killing a living being is like killing oneself." If we truly felt the pain of the animal, we would realize there is no "nice" way to inflict it.

### Psychology
The search for "humane meat" is a sign of an awakening conscience. It's the final stage before realizing that the only truly humane choice is a vegetarian one.
  `,
  12: `
# 12. The Taste Fallacy: Pleasure vs. Principle

"But meat just tastes too good to give up." This is the most honest, yet most selfish, reason for meat-eating.

### The Moral Principle
Should our temporary sensory pleasure (lasting about 15 minutes of a meal) outweigh the entire life and death of a sentient being? Moral integrity requires us to value life over luxury.

### Scientific Reason
Taste buds are highly adaptable. Within three weeks of shifting to a plant-based diet, the palate becomes more sensitive to the nuanced flavors of fruits, vegetables, and grains. The "craving" for meat is often a craving for the fats and salts added to it.

### Scriptural Reason
Spiritual life is defined by *Tapogunam*—the ability to regulate the senses for a higher purpose. Giving up a destructive taste for the sake of compassion is a primary step in spiritual growth.

### Psychological Reason
Overcoming the addiction to taste builds mental strength (willpower). It moves us from a "reactive" life of impulse to a "proactive" life of values.
  `,
  13: `
# 13. Anatomy of a Predator: Are we biologically hunters?

"Look at our canine teeth; we are born to eat meat." This anatomical argument is easily refuted by simple comparison.

### Biological Reason
Human "canines" are small and blunt, more like those of fruit-eating primates than the sharp, shearing teeth of wolves or lions. Furthermore, humans have flat molars for grinding grains and long, winding intestines (10-12 times body length) meant for fermenting fiber, whereas carnivores have short, straight guts for rapidly expelling rotting flesh.

### Scientific Reason
Our saliva contains amylase for digesting starches (a herbivore trait), and our stomach acid is 20 times weaker than a carnivore's. We also lack the claws and natural aggression required to kill an animal with our bare hands and eat it raw—the true test of a biological carnivore.

### Medical Insight
The fact that meat consumption leads to heart disease and clogged arteries (atherosclerosis) in humans, but not in natural carnivores, is the strongest biological proof that it's not our intended fuel.

### Psychology
Calling ourselves "predators" is often a way to feel powerful, but our anatomy suggests we are built to be peaceful gatherers and stewards of nature.
  `,
  14: `
# 14. Cultural Heritage: Tradition vs. Transformation

"Eating meat is part of my culture and tradition." While culture is a vital part of identity, it is also a living entity that must evolve with our ethics.

### The Moral Principle
Slavery, child labor, and the denial of women's rights were all "traditions" at some point in various cultures. Tradition becomes meaningful only when it aligns with universal principles of compassion and justice. A culture of *Ahimsa* is the highest form of heritage.

### Scientific Reason
Many dietary traditions formed during times of extreme scarcity. In today's globalized world, where plant alternatives are abundant, clinging to scarcity-based habits is no longer a necessity but an outdated reflex.

### Scriptural Quote
*Srimad Bhagavatam*: "A person who is truly advanced in spiritual knowledge sees all living entities as equal." True culture is the ability to see the divine in everyone, beyond the species barrier.

### Psychological Reason
Evolving past harmful traditions is a sign of psychological maturity. It shows we have the courage to retain what is beautiful in our culture while discarding what is violent.
  `,
  15: `
# 15. Individual Impact: One Person, Thousands of Lives

"I'm just one person; me going vegetarian won't change anything." This is a psychological barrier that underestimates the power of individual choices.

### Scientific Reason
The average meat-eater consumes approximately 200 animals per year (including land animals and sea creatures). Over a lifetime, a single vegetarian directly saves thousands of sentient beings from the industrial slaughter system.

### Ecological Insight
The cumulative effect of individual choices is what shifts entire markets. As millions of people choose plant-based options, the demand for factory farming drops, leading to massive reductions in land use and carbon emissions.

### Moral Principle
Morality is not a numbers game. Even if no one else chose compassion, the individual's decision to keep their own hands clean of violence is a profound spiritual victory.

### Psychology
The "ripple effect" is real. Your choice inspires family, friends, and the industry at large to consider more ethical alternatives.
  `,
  16: `
# 16. Economic Realities: The Cost of Compassion

"Vegetarianism is expensive and only for the wealthy." This is a widespread misconception fueled by the high price of gourmet processed vegan meats.

### Scientific Reason
The global staples of a healthy diet—lentils, beans, rice, potatoes, and seasonal vegetables—are the most affordable foods on the planet. Meat is actually economically inefficient; it takes 15kg of grain to produce just 1kg of beef.

### Medical Insight
The long-term economic cost of a meat-heavy diet includes higher medical bills for chronic conditions like heart disease, diabetes, and certain cancers. A plant-based diet is an investment in future wellness.

### Scriptural Reason
The Vedas emphasize *Simple Living and High Thinking*. A diet of grains and local produce is the foundation of a sustainable and humble life, free from the greedy pursuit of luxury.

### Psychology
Buying whole plant foods encourages a more mindful relationship with money and resources, moving us away from the "consumerist" trap of expensive, harmful products.
  `,
  17: `
# 17. Psychology of Meat: Aggression and Empathy

Does what we eat affect how we feel and think? Psychological evidence suggests a deep link between diet and disposition.

### Psychological Reasoning
Consuming the flesh of an animal that died in terror involves the ingestion of high levels of stress hormones (cortisol and adrenaline). This "fear energy" has been observed to correlate with increased aggression and anxiety in humans.

### Scientific Reason
Large-scale studies have shown that plant-based diets are associated with lower rates of depression and anxiety, likely due to higher levels of antioxidants and lower levels of systemic inflammation that affects brain chemistry.

### Scriptural Quote
The *Bhagavad Gita* classifies food into three *Gunas*. Meat is in the mode of *Rajas* (passion) and *Tamas* (darkness/ignorance), which agitate the mind and cloud the conscience. *Sattvic* food leads to clarity and peace.

### Moral Principle
Cultivating empathy for animals naturally expands into empathy for fellow humans. It's difficult to maintain a truly compassionate heart while participating in the systematic violence of the meat industry.
  `,
  18: `
# 18. The Water Footprint: A Global Crisis

"Why is my diet an environmental issue?" The answer lies in the staggering amount of water required to produce animal products.

### Scientific Reason
To produce 1kg of beef, it takes approximately 15,000 liters of water. In contrast, 1kg of potatoes takes about 300 liters. Animal agriculture is the single largest consumer of freshwater world-wide, contributing to global water scarcity.

### Ecological Insight
By shifting to a plant-based diet, an individual can save more water in a single day than by not showering for a year. The "hidden water" in our food is the most significant part of our environmental footprint.

### Scriptural Reason
Water is considered a sacred manifestation of the Divine in many traditions (*Jala-tattva*). Wasting it on the inefficient and violent production of meat is a violation of environmental stewardship.

### Psychology
Realizing the scale of resource waste helps us transition from an "entitled" mindset to one of responsible global citizenship.
  `,
  19: `
# 19. Medical Pandemics: The Price of Factory Farming

"Is meat-eating a public health risk?" History and modern virology warn of the dangers inherent in intensive animal agriculture.

### Medical Reason
Approximately 75% of new or emerging infectious diseases in humans (like Swine Flu, Avian Flu, and various Coronaviruses) are "zoonotic," meaning they originated in animals. Factory farms provide the perfect breeding ground for these viruses to mutate and jump to humans.

### Scientific Reason
Industrial farming uses about 70-80% of all antibiotics globally, not to cure sick animals, but to keep them alive in filth and promote rapid growth. This is creating "superbugs"—bacteria resistant to all known medicines—which is a top-tier threat to human survival.

### Moral Principle
The pursuit of cheap meat at the cost of global health and the creation of future pandemics is a dangerous and unethical trade-off.

### Psychology
Living in fear of the next pandemic is exhausting. A collective shift toward plant-based living is the most effective "vaccine" for the future of our species.
  `,
  20: `
# 20. Heart Disease & Meat: Clogging the Arteries

The leading cause of death globally is cardiovascular disease, and diet is the primary driver.

### Medical Insight
Animal products are the only source of dietary cholesterol and the primary source of saturated fats. These contribute directly to the buildup of plaque in the arteries (atherosclerosis), leading to heart attacks and strokes.

### Scientific Reason
Dr. Caldwell Esselstyn and Dr. Dean Ornish have clinically proven that a whole-food plant-based diet can not only prevent but actually *reverse* advanced heart disease—something that no medication or surgery can achieve on its own.

### Scriptural Quote
The body is often referred to as a "temple." Filling it with the fats of slaughtered animals that cause disease is a violation of the sanctity of this divine gift.

### Psychology
The "heart" in a spiritual sense is the seat of the soul. Keeping the physical heart clean and healthy reflects a desire for a clear and clear spiritual life.
  `,
  21: `
# 21. The Cancer Risk: Processing Death

"Can meat actually cause cancer?" The World Health Organization (WHO) has provided a definitive answer.

### Scientific Reason
In 2015, the WHO classified processed meats (bacon, ham, sausages) as Group 1 carcinogens—the same category as tobacco and asbestos. Red meat was classified as "probably carcinogenic" to humans. The link to colorectal, pancreatic, and prostate cancers is significant.

### Medical Insight
Meats often contain heterocyclic amines and polycyclic aromatic hydrocarbons (formed during cooking), which damage DNA and trigger cancerous growths. Plant foods, conversely, are packed with phytonutrients that actively protect cells from damage.

### Moral Principle
Continuing to promote a product known to cause terminal illness, especially to children in schools, is an ethical failure of the highest order.

### Psychology
Facing the mortality risk associated with certain foods helps break the psychological "denial" that often keeps us stuck in unhealthy habits.
  `,
  22: `
# 22. Karmic Implications: Action and Reaction

"What I eat today, I pay for tomorrow." The law of Karma is as precise as any physical law of science.

### Scriptural Truth
*Bhagavatam 11.5.14*: "Those who are ignorant of real dharma and, though wicked and haughty, consider themselves virtuous, kill animals without any feeling of remorse... such sinful persons are eaten by the same animals in their next birth." 

### Moral Principle
Every action creates a reaction. If we support a system of pain, fear, and death, we are subtly inviting that same energy back into our own lives. Compassion breadths peace; violence breeds suffering.

### Logical Reason
If we believe in a just universe, it is impossible for us to achieve ultimate happiness and peace while being the cause of misery for others. The "vibration" of our food becomes the vibration of our destiny.

### Psychology
The subtle feeling of "guilt" or "unease" many meat-eaters feel is often a nudge from the soul, warning against the karmic weight of their choices.
  `,
  23: `
# 23. Dharma & Ahimsa: The Highest Duty

"Is being vegetarian really a religious requirement?" Across traditions, the answer is often "Yes" at the highest level of practice.

### Scriptural Quote
*Mahabharata, Anusasana Parva*: "Ahimsa paramo dharmah" — Non-violence is the highest duty. There is no duty higher than being kind to all living entities.

### Moral Principle
*Dharma* is the natural law of the soul. The soul's nature is to love and serve, not to kill and consume. By practicing *Ahimsa*, we align our actions with our true spiritual identity.

### Scientific Reason
Compassion is not just a "feeling"—it is a biological capacity for empathy that differentiates us from lower species. Strengthening this capacity through our dietary choices is a key part of human mental evolution.

### Psychological Reason
Living in alignment with *Dharma* brings a deep sense of internal peace (*Shanti*) and integrity. The conflict between a spiritual heart and a violent plate is resolved.
  `,
  24: `
# 24. The Voiceless Ones: Advocacy through Empathy

Why should we care about beings that cannot speak for themselves? This is at the heart of the moral argument for vegetarianism.

### Moral Principle
Justice is measured by how a society treats its most vulnerable members. Animals, having no voice in our legal or political systems, are the most vulnerable of all. Compassion for the "voiceless ones" is a hallmark of an advanced, ethical civilization.

### Scientific Reason
Ethology (the study of animal behavior) proves that animals communicate their needs, fears, and joys through complex vocalizations, body language, and social cues. Just because they don't speak a human language doesn't mean they don't have something to say about their desire to live.

### Scriptural Quote
*Proverbs 31:8*: "Speak up for those who cannot speak for themselves, for the rights of all who are destitute." This universal spiritual mandate includes the animal kingdom.

### Psychological Reason
By ignoring the suffering of animals, we create a "blind spot" in our empathy. Reconnecting with the voiceless ones through a vegetarian diet restores our full capacity for compassion.
  `,
  25: `
# 25. Animal Intelligence: More than just "Meat"

"Animals aren't smart enough to care about life." This common misconception is being thoroughly debunked by modern cognitive science.

### Scientific Reason
Pigs have the cognitive ability of a three-year-old human child; they can solve puzzles and even play simple video games. Cows have "best friends" and experience stress when separated. Chickens can count and understand temporal intervals. Intelligence is widespread across the species we eat.

### Moral Principle
Intelligence should never be a criteria for the right to live. If we only protected the "smartest," many humans would be at risk. The true question, as Jeremy Bentham put it, is: "Can they suffer?"

### Scriptural Reason
The Vedas teach that every living entity is a soul (*Atma*). The level of intellectual "output" depends on the body, but the core consciousness and desire for survival are the same in all beings.

### Psychological Reason
Recognizing the intelligence of animals makes it impossible to view them as mere "products." It forces us to acknowledge our shared consciousness.
  `,
  26: `
# 26. Intestinal Biology: The Herbivore's Gut

"Our bodies are designed to process meat." But what does our internal anatomy actually say?

### Biological Reason
The human small intestine is about 10 to 12 times the length of the torso. This long, winding path is designed to slowly digest fibers and nutrients from plant foods. Carnivores, by contrast, have very short, straight digestive tracts (about 3 times torso length) designed to expel rotting flesh quickly before it putrefies and poisons the blood.

### Medical Insight
Because meat stays in the long human gut for so long, it begins to rot (putrefy), releasing toxins that are absorbed into the bloodstream. This is a primary driver of colorectal cancer and systemic inflammation.

### Scientific Reason
Our intestines lack the specialized enzymes and rapid transit time required to safely process animal tissue. We are anatomically "built for plants."

### Psychology
Understanding our internal design helps us align our habits with our biology, leading to a sense of physical and mental lightness.
  `,
  27: `
# 27. Stomach Acid pH: The Lion vs. The Human

Can we handle the bacteria and structure of raw meat like a natural predator?

### Scientific Reason
True carnivores (lions, tigers, wolves) have extremely strong stomach acid (pH 1 or less) that can dissolve bones and kill the heavy loads of bacteria found in raw flesh. Human stomach acid is much weaker (pH 4 to 5), similar to that of other fruit and grain eaters.

### Medical Insight
Because our acid is weak, we must "pre-digest" meat by cooking it. However, cooking meat at high temperatures creates carcinogenic compounds (HCAs). We are the only "predator" that has to cook its "prey" to avoid getting sick.

### Biological Reason
Our digestive chemistry is optimized for the breakdown of complex carbohydrates and plant proteins, not the heavy fats and dense tissues of animals.

### Psychology
Relying on "culinary art" to make meat palatable is a sign that it is not our natural food. No one looks at a cow in a field and feels "hungry" until it is transformed by heat, salt, and spices.
  `,
  28: `
# 28. Spiritual Vibration: Ingesting Fear

Does the energy of the slaughterhouse follow the meat to the table?

### Psychological Reason
Animal slaughter involves extreme trauma, fear, and pain. These intense emotional states are biochemically recorded in the animal's tissues through adrenaline and other stress hormones. Ingesting these "vibrations" can lead to unexplained restlessness, anxiety, and aggression in humans.

### Scriptural Quote
The Vedas describe food as *Prana* (life force). Meat is considered "dead" food, lacking the vital sunlight energy of plants. It is *Tamasic*, leading to mental dullness and spiritual lethargy.

### Moral Principle
The vibration of compassion is light and elevating. The vibration of violence is heavy and binding. Which one do you want to build your body and mind with?

### Scientific Connection
Modern physics tells us everything is vibration. Cultivating a peaceful mind starts with peaceful inputs. Vegetarian food is "high vibration" food.
  `,
  29: `
# 29. World Hunger: The Efficiency Gap

"How can my diet help solve world hunger?" The answer is in the math of calorie conversion.

### Scientific Reason
It takes approximately 10 to 15 kilograms of grain to produce just 1 kilogram of beef. We are currently growing enough grain to feed the entire human population several times over, but we are feeding the majority of it to livestock.

### Economic Insight
If the world shifted toward a plant-based diet, we would have an immediate, massive surplus of food that could end global starvation. Meat is a luxury that "steals" grain from the plates of the poor.

### Moral Principle
Participating in an inefficient food system that prioritizes the luxury of some over the survival of others is a profound ethical issue.

### Psychology
Empowerment comes from knowing that your daily plate is a vote for a more equitable and well-fed world.
  `,
  30: `
# 30. Global Harmony: Peace Starts on the Plate

"Can a diet bring world peace?" Great thinkers throughout history have believed so.

### Moral Principle
As long as there are slaughterhouses, there will be battlefields. Systematic violence against animals desensitizes the human heart, making it easier to justify violence against other humans.

### Scriptural Quote
"May all beings be happy and free from suffering." This universal prayer (*Loka Samasta Sukhino Bhavantu*) cannot be realized as long as we continue to cause unnecessary suffering to billions of beings every year.

### Scientific Reason
A peaceful world requires sustainable resources. Since plant-based living is the most sustainable way to live, it reduces the resource conflicts (over land and water) that often lead to war.

### Psychology
True peace (*Shanti*) is an internal state that arises from a clear conscience. When we know we are not the cause of pain to any living being, we contribute to the collective peace of humanity.
  `,
};

const topics = [
    { id: 1, title: "The Protein Myth" },
    { id: 2, title: "Plants Have Life Too" },
    { id: 3, title: "The Food Chain Argument" },
    { id: 4, title: "Ancestral Hunting" },
    { id: 5, title: "Physical Vitality" },
    { id: 6, title: "The Choice Argument" },
    { id: 7, title: "Purpose of Creation" },
    { id: 8, title: "Vitamin B12 & Nutrition" },
    { id: 9, title: "Overpopulation Myth" },
    { id: 10, title: "God's Permission" },
    { id: 11, title: "Humane Slaughter" },
    { id: 12, title: "The Taste Fallacy" },
    { id: 13, title: "Anatomy of a Predator" },
    { id: 14, title: "Cultural Heritage" },
    { id: 15, title: "Individual Impact" },
    { id: 16, title: "Economic Realities" },
    { id: 17, title: "Psychology of Meat" },
    { id: 18, title: "The Water Footprint" },
    { id: 19, title: "Medical Pandemics" },
    { id: 20, title: "Heart Disease & Meat" },
    { id: 21, title: "The Cancer Risk" },
    { id: 22, title: "Karmic Implications" },
    { id: 23, title: "Dharma & Ahimsa" },
    { id: 24, title: "The Voiceless Ones" },
    { id: 25, title: "Animal Intelligence" },
    { id: 26, title: "Intestinal Biology" },
    { id: 27, title: "Stomach Acid pH" },
    { id: 28, title: "Spiritual Vibration" },
    { id: 29, title: "World Hunger" },
    { id: 30, title: "Global Harmony" },
];

export default async function WhyVegDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const currentId = parseInt(id);
  const article = whyVegArticles[currentId];
  const topicInfo = topics.find(t => t.id === currentId);

  if (!topicInfo) {
    notFound();
  }

  const content = article || "Article not found.";

  const currentIndex = topics.findIndex(t => t.id === currentId);
  const prev = currentIndex > 0 ? topics[currentIndex - 1] : null;
  const next = currentIndex < topics.length - 1 ? topics[currentIndex + 1] : null;

  return (
    <div className="bg-spiritual-cream min-h-screen text-gray-800 font-sans pb-20">
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <Link 
          href="/why-veg" 
          className="inline-flex items-center text-forest-green hover:text-deep-saffron transition-colors mb-8 font-semibold group"
        >
          <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Why Veg?
        </Link>

        <article className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="bg-deep-saffron text-white p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <span className="text-white/80 font-bold tracking-[0.4em] uppercase text-xs mb-4 block relative z-10">
              Inquiry {currentId} of 30
            </span>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight relative z-10">
              {topicInfo.title}
            </h1>
          </div>

          <div className="p-8 md:p-20 bg-white">
            <div className="prose prose-lg prose-forest max-w-none 
              prose-headings:font-serif prose-headings:text-forest-green 
              prose-h1:text-center prose-h1:mb-12
              prose-h3:text-deep-saffron prose-h3:border-b prose-h3:border-vedic-gold/20 prose-h3:pb-2
              prose-strong:text-forest-green prose-strong:font-bold
              prose-li:marker:text-deep-saffron
            ">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Navigation Buttons */}
        <section className="grid md:grid-cols-2 gap-8 mt-12">
          {prev ? (
            <Link 
              href={`/why-veg/${prev.id}`}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-deep-saffron/30 transition-all group flex flex-col"
            >
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </span>
              <h4 className="text-xl font-serif text-forest-green group-hover:text-deep-saffron transition-colors">
                {prev.title}
              </h4>
            </Link>
          ) : <div />}

          {next ? (
            <Link 
              href={`/why-veg/${next.id}`}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-deep-saffron/30 transition-all group flex flex-col text-right items-end"
            >
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 flex items-center">
                Next
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <h4 className="text-xl font-serif text-forest-green group-hover:text-deep-saffron transition-colors">
                {next.title}
              </h4>
            </Link>
          ) : <div />}
        </section>
      </main>
      <Footer />
    </div>
  );
}
