// Interface definitions (similar to TypeScript)
const University = class {
  constructor(name, thresholdScore) {
    this.name = name;
    this.thresholdScore = thresholdScore;
  }
};

const Specialty = class {
  constructor(name, untMinScores) {
    this.name = name;
    this.untMinScores = untMinScores;
  }
};

const Applicant = class {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
};

// Function to calculate possible UNT passing score (with rounding)
function calculatePossibleScore(applicant, university, specialty) {
  // ... (function implementation remains the same)
}

// Function to calculate admission chance (with rounding)
function calculateAdmissionChance(applicant, university, specialty) {
  // ... (function implementation remains the same)
}

// Example usage
const universities = [
  new University("University A", 100),
  new University("University B", 110),
];

const specialties = [
  {
    name: "Specialty 1",
    untMinScores: {
      2021: 95,
      2022: 93,
      2023: 97,
    },
  },
  {
    name: "Specialty 2",
    untMinScores: {
      2022: 105,
      2023: 110,
    },
  },
];

const applicants = [
  new Applicant("John Doe", 105),
  new Applicant("Jane Smith", 120),
];

for (const applicant of applicants) {
  for (const university of universities) {
    for (const specialty of specialties) {
      const chance = calculateAdmissionChance(applicant, university, specialty);
      const possibleScoreRoundedDown = Math.floor(
        calculatePossibleScore(applicant, university, specialty)
      );
      console.log(
        `${applicant.name} applying to ${university.name} for Specialty ${specialty.name}: ${chance}% (Possible Score: ${possibleScoreRoundedDown})`
      );
    }
  }
}
