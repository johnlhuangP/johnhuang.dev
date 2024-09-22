// TODO Add a couple lines about each project
const data = [
  {
    title: '24cast.org - Election Model Site',
    tools: 'React, Next.js, Node.js, AWS',
    link: 'https://24cast.org',
    image: '/images/projects/24cast.org.png',
    date: '2024-04-01',
    desc:
      'Full stack developer for 24cast.org, a website that provides election forecasts and predictions. Utilized React, Next.js, and Node.js to create a dynamic and responsive user interface. Implemented AWS to manage data storage and serverless functions.',
  },
  {
    title: '24cast.org - Election Portal',
    tools: 'React, Next.js, Node.js, AWS',
    link: 'https://github.com/BPR-Data-Team/Election-Night',
    image: '/images/projects/24cast_electionNight.png',
    date: '2024-08-20',
    desc:
      'Developing a web application to display election results in real-time. Using React, Next.js, and Node.js to create a dynamic and responsive user interface.',
  },
  {
    title: 'Bag of Words Model for Sentiment Classification',
    link: 'https://github.com/johnlhuangP/bag-of-words.git',
    tools: 'Python, scikit-learn, pandas, NumPy, spaCy',
    image: '/images/projects/BoW.png',
    date: '2024-09-01',
    endDate: '2024-010-01',
    desc:
      'Built a Bag-of-Words (BOW) model for sentiment classification on Twitter data using spaCy for NLP preprocessing (tokenization, lemmatization) and scikit-learn for feature extraction, train-test splits, and model training. Applied n-grams (n=1 to 5) to enhance model accuracy and robustness, optimizing feature extraction and achieving reliable sentiment predictions and stratified k-fold cross-validation to assess model performance.',
  },
  {
    title: 'Connect 4',
    tools: 'OCaml',
    image: '/images/projects/Connect4.png',
    date: '2023-011-15',
    endDate: '2023-12-15',
    desc:
      'Connect4 game featuring a player vs. AI mode where the AI gameplay is powered with a custom minimax algorithm and an estimateValue function. Implemented Alpha-Beta Pruning to improve the efficiency of AI gameplay by 15%.',
  },
];

export default data;
