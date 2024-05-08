// Schema for Trainees details and their firing report

export const personalDetails = {
  traineeID: "",
  traineeName: "",
  dateAdded: "",
  traineeImg: "",
};

export const firingDetails = {
  position: "",
  target: "",
  targetSize: {
    "32cm": 0,
    "48cm": 0,
    else: 0,
  },
  dateAdded: "",
  targetImg: "",
};

export const recordOptions = {
  position: [
    "Grouping-LB(100cm)",
    "Grouping-LS(120cm)",
    "Application(120cm)",
    "Classification(SFTU)",
    "Classification(KU)",
    "Classification(BC)",
  ],
  // Static options field ranging from 1 to 12
  target: Array.from({ length: 12 }, (_, index) => index + 1),

  // Static options field ranging from 1 to 5
  targetSize: Array.from({ length: 5 }, (_, index) => index + 1),
};
