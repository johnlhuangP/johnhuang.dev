/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'AbbVie',
    position: 'Bioinformatics and Data Science Intern',
    url: 'https://www.abbvie.com',
    startDate: '2024-05-21',
    endDate: '2024-08-12',
    highlights: [
      'Developed a robust scRNA sequencing computational workflow in R, leveraging industry standard bioinformatic tools and libraries, including Seurat and SingleR, for clustering analysis using k-nearest neighbor and shared-nearest neighbor algorithms.',
      'Processed, performed quality control, and structuralized scRNA and TCR sequencing datasets in R, enhancing accuracy of data analysis by 15% and validated pre-clinical study results with 93% accuracy.',
    ],
  },
  {
    name: 'Brown University',
    position: 'Machine Learning Researcher',
    url: 'https://www.brown.edu',
    startDate: '2024-05-10',
    highlights: [
      'Leading a team of 3 researchers to fine-tune Foundation Models on high-quality, internally curated medical datasets, improving the efficiency and accuracy of the clinical note-writing process by incorporating advanced machine learning techniques.',
      'Implementing qLoRA fine-tuning, enhancing computational efficiency by 50%, and utilizing Fully Sharded Data Parallel (FSDP) to enable multi-GPU training, optimizing large-scale model training.',
      'Designed and built an end-to-end transcription-diarization pipeline using WhisperX and Llama 3.1 in Python, significantly improving the quality of clinical notes.',
    ],
  },
  {
    name: 'Full Stack at Brown',
    position: 'Full Stack Developer',
    url: 'https://fullstack.brown.edu',
    startDate: '2023-09-13',
    highlights: [
      'Developed the frontend of pro-bono web applications using React and the backend with Node.js, integrating AWS for data storage and cloud services.',
      'Led a team of developers in creating software solutions for university clubs and organizations, enhancing user experience by 30%.',
      'Utilized Google Cloud Platform (GCP) for deployment, efficient data storage and role management.',
    ],
  },
  {
    name: 'UCSF Data Science CoLab',
    position: 'Bioinformatics Research Intern',
    startDate: '2023-05-10',
    endDate: '2023-08-12',
    highlights: [
      'Conducted pioneering research on spatiotemporal relationships between immune and cancer cells in Oral Squamous Cell Carcinoma biopsies using Multiplexed Ion Beam Imaging.',
      'Enhanced spatial transcriptomics analysis to investigate cellular composition and identify distinct cellular neighborhoods in Python.',
    ],
  },
];

export default work;
