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

let startScore = 100; // University Theshold
let e1 = 95;          // 2021
let e2 = 93;          // 2022
let e3 = 97;          // 2023
let userScore = 394;  // Ent Scrore

let admissionChance = calculateAdmissionChance(startScore, e1, e2, e3, userScore);

console.log(`The chance of admission is ${admissionChance}%`);








// function calculateAdmissionChance(startScore: number, e1: number, e2: number, e3: number, userScore: number): number {
//   if (startScore >= userScore) {
//       return 0;
//   } else {
//       let possibleScore = calculatePossibleScore(e1, e2, e3);
//       let admissionChance = calculateChance(userScore, possibleScore);
//       return Math.min(Math.floor(admissionChance), 100);
//   }
// }

// function calculatePossibleScore(e1: number, e2: number, e3: number): number {
//   let possibleScore = e1 + e2 - e1 + e3 - e2 * 2 * 3;
//   return possibleScore <= 140 ? possibleScore : 140;
// }

// function calculateChance(userScore: number, possibleScore: number): number {
//   let chance = 50 + (userScore - possibleScore) / ((140 - possibleScore) * 3) * 100;
//   return chance;
// }

// let possibleScores = {
//   generalCompetition: {startScore: 90, e1: 95, e2: 93, e3: 97, userScore: 200},
//   ruralQuota: {startScore: 85, e1: 94, e2: 92, e3: 96, userScore: 195},
//   orphanQuota: {startScore: 80, e1: 93, e2: 91, e3: 95, userScore: 190},
//   disabilityQuota: {startScore: 75, e1: 92, e2: 90, e3: 94, userScore: 185},
//   largeFamilyQuota: {startScore: 70, e1: 91, e2: 89, e3: 93, userScore: 180}
// };

// for (let quota in possibleScores) {
//   let {startScore, e1, e2, e3, userScore} = possibleScores[quota];

//   let admissionChance = calculateAdmissionChance(startScore, e1, e2, e3, userScore);

//   console.log(`For ${quota}, the chance of admission is ${admissionChance}%`);
// }


// let possibleScores = {
//   generalCompetition: {startScore: 90, e1: 95, e2: 93, e3: 97, userScore: 200}, // 87%
//   ruralQuota: {startScore: 110, e1: 95, e2: 93, e3: 97, userScore: 200}, // Adjust this to get 30%
//   orphanQuota: {startScore: 105, e1: 95, e2: 93, e3: 97, userScore: 200}, // Adjust this to get 40%
//   disabilityQuota: {startScore: 100, e1: 95, e2: 93, e3: 97, userScore: 200}, // Adjust this to get 55%
//   largeFamilyQuota: {startScore: 95, e1: 95, e2: 93, e3: 97, userScore: 200} // Adjust this to get 68%
// };

// for (let quota in possibleScores) {
//   let {startScore, e1, e2, e3, userScore} = possibleScores[quota];

//   let admissionChance = calculateAdmissionChance(startScore, e1, e2, e3, userScore);

//   console.log(`For ${quota}, the chance of admission is ${admissionChance}%`);
// }
