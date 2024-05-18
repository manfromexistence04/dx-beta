// // Interface definitions
// interface University {
//   name: string;
//   thresholdScore: number;
// }

// interface Specialty {
//   name: string;
//   untMinScores: { [year: number]: number }; // Year mapped to minimum UNT score
// }

// interface Applicant {
//   name: string;
//   score: number;
// }

// // Function to calculate possible UNT passing score (with rounding)
// function calculatePossibleScore(applicant: Applicant, university: University, specialty: Specialty): number {
//   const { score } = applicant;
//   const { thresholdScore } = university;

//   // Check if user score meets the threshold (already checked in calculateAdmissionChance)
//   // if (score < thresholdScore) {
//   //   return 0; // No chance if score below threshold (handled in calculateAdmissionChance)
//   // }

//   const untMinScores = specialty.untMinScores;
//   const years = Object.keys(untMinScores).map(Number); // Extract years as numbers

//   let possibleScore = 0;

//   // Check for missing data and handle it (e.g., return a default value)
//   if (years.length === 0) {
//     return 0; // Or any other appropriate default value
//   }


//   // Handle missing data scenarios gracefully
//   const hasAllYears = years.length === 3;
//   const hasTwoYears = years.length === 2;
//   const hasOneYear = years.length === 1;

//   if (hasAllYears) {
//     possibleScore =
//       Math.floor(untMinScores[years[0]]) +
//       Math.floor(untMinScores[years[1]]) -
//       Math.floor(untMinScores[years[0]]) +
//       Math.floor(untMinScores[years[2]]) -
//       Math.floor(untMinScores[years[1]]) /
//       2;
//   } else if (hasTwoYears) {
//     const prevYear = years[years.length - 1]; // Use latest available year
//     possibleScore = Math.floor(untMinScores[prevYear]) * 2;
//   } else if (hasOneYear) {
//     possibleScore = Math.floor(untMinScores[years[0]]);
//   }

//   // Enforce maximum possible score
//   possibleScore = Math.min(possibleScore, 140);

//   return possibleScore;
// }

// // Function to calculate admission chance (with rounding)
// // function calculateAdmissionChance(applicant: Applicant, university: University, specialty: Specialty): number {
// //   const { score } = applicant;
// //   const { thresholdScore } = university;

// //   // Check if user score meets the threshold
// //   if (score < thresholdScore) {
// //     return 0; // No chance if score below threshold
// //   }

// //   // Calculate possible UNT passing score (using separate function)
// //   const possibleScore = calculatePossibleScore(applicant, university, specialty);

// //   // Calculate admission chance (Formula 2)
// //   const chance = Math.max(
// //     0,
// //     50 +
// //       ((score - thresholdScore) * (140 - possibleScore)) /
// //         ((140 - possibleScore) * 3) *
// //         100 *
// //         100
// //   );

// //   // Round down both formulas (Math.floor for downward rounding)
// //   const admissionChance = Math.floor(chance);

// //   return admissionChance; // Return rounded admission chance
// // }
// function calculateAdmissionChance(applicant: Applicant, university: University, specialty: Specialty): number {
//   const { score } = applicant;
//   const { thresholdScore } = university;

//   // Check if user score meets the threshold
//   if (score < thresholdScore) {
//     return 0; // No chance if score below threshold
//   }

//   // Calculate possible UNT passing score (using separate function)
//   const possibleScore = calculatePossibleScore(applicant, university, specialty);

//   // Calculate admission chance (Formula 2 with epsilon to avoid division by zero)
//   const chance = Math.max(
//     0,
//     50 +
//       ((score - thresholdScore) * (140 - possibleScore)) /
//         ((140 - possibleScore) * 3 + Math.EPSILON) * // Add a small epsilon value
//         100 *
//         100
//   );

//   // Round down both formulas (Math.floor for downward rounding)
//   const admissionChance = Math.floor(chance);

//   return admissionChance; // Return rounded admission chance
// }


// // Example usage
// const universities: University[] = [
//   { name: "University A", thresholdScore: 100 },
//   { name: "University B", thresholdScore: 110 },
// ];

// const specialties: Specialty[] = [
//   {
//     name: "Specialty 1",
//     untMinScores: {
//       2021: 95,
//       2022: 93,
//       2023: 97,
//     },
//   },
//   {
//     name: "Specialty 2",
//     untMinScores: {
//       2022: 105,
//       2023: 110,
//     },
//   },
// ];

// const applicants: Applicant[] = [
//   { name: "John Doe", score: 105 },
//   { name: "Jane Smith", score: 120 },
// ];

// for (const applicant of applicants) {
//   for (const university of universities) {
//     for (const specialty of specialties) {
//       const chance = calculateAdmissionChance(applicant, university, specialty);
//       const possibleScoreRoundedDown = Math.floor(
//         calculatePossibleScore(applicant, university, specialty)
//       );
//       console.log(
//       `${applicant.name} applying to ${university.name} for Specialty ${specialty.name}: ${chance}% (Possible Score: ${possibleScoreRoundedDown})`
//     );
//   }
// }
// }


// class University {
//   startScore: number;
//   e1: number;
//   e2: number;
//   e3: number;

//   constructor(startScore: number, e1: number, e2: number, e3: number) {
//       this.startScore = startScore;
//       this.e1 = e1;
//       this.e2 = e2;
//       this.e3 = e3;
//   }

//   calculateAdmissionChance(userScore: number): number {
//       if (this.startScore >= userScore) {
//           return 0;
//       } else {
//           let possibleScore = this.calculatePossibleScore();
//           let admissionChance = this.calculateChance(userScore, possibleScore);
//           return Math.floor(admissionChance);
//       }
//   }

//   calculatePossibleScore(): number {
//       let possibleScore = this.e1 + this.e2 - this.e1 + this.e3 - this.e2 * 2 * 3;
//       return possibleScore <= 140 ? possibleScore : 140;
//   }

//   calculateChance(userScore: number, possibleScore: number): number {
//       let chance = 50 + (userScore - possibleScore) / ((140 - possibleScore) * 3) * 100 * 100;
//       return chance;
//   }
// }

// // Create a new University instance
// let university = new University(100, 95, 93, 97);

// // Calculate the admission chance for a user with a score of 110
// let admissionChance = university.calculateAdmissionChance(110);

// console.log(`The chance of admission is ${admissionChance}%`);









function calculateAdmissionChance(startScore: number, e1: number, e2: number, e3: number, userScore: number): number {
  if (startScore >= userScore) {
      return 0;
  } else {
      let possibleScore = calculatePossibleScore(e1, e2, e3);
      let admissionChance = calculateChance(userScore, possibleScore);
      return Math.min(Math.floor(admissionChance), 100);
  }
}

function calculatePossibleScore(e1: number, e2: number, e3: number): number {
  let possibleScore = e1 + e2 - e1 + e3 - e2 * 2 * 3;
  return possibleScore <= 140 ? possibleScore : 140;
}

function calculateChance(userScore: number, possibleScore: number): number {
  let chance = 50 + (userScore - possibleScore) / ((140 - possibleScore) * 3) * 100;
  return chance;
}



let startScore = 100;
let e1 = 95;
let e2 = 93;
let e3 = 97;
let userScore = 200;

let admissionChance = calculateAdmissionChance(startScore, e1, e2, e3, userScore);

console.log(`The chance of admission is ${admissionChance}%`);
