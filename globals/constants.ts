import { EventData } from "../types/Types";

export const technicalEvents: EventData[] = [
  {
    name: "IT Ripplet",
    id: 1,
    description: "Quiz",
    slug: "it-ripplet",
    topicsData: [
      {
        topicName: "Rules",
        items: [
          "Two members per team.",
          "Three rounds will be conducted.",
          "1st round prelims will be conducted, and 7 teams will be selected for the second round.",
          "2nd round logo identification based on Computer Science field, and five teams will be selected for finals.",
          "Final Round will be a rapid fire round.",
          "Mobile Phone, Smart Watch, and other electronic gadgets prohibited.",
        ],
      },
    ],
  },
  {
    name: "CODE-GOLF",
    id: 2,
    description: "Blind Coding",
    slug: "code-golf-blind-coding",
    topicsData: [
      {
        topicName: "Description",
        items: [
          "Only one member per team (Individual event).",
          "The compiler provided will be Java & Python.",
          "This event consists of 2 rounds.",
          "Round-1 contains 10 Java & Python programs of medium complexity.",
          "Round-2 contains 7 Java & Python programs of high complexity.",
        ],
      },
      {
        topicName: "Rules",
        items: [
          "Each participant has to write the code for a given problem with the monitor off.",
          "Participants whose code gets executed without errors will be given higher preference.",
          "The second preference will be given to code with the least number of errors.",
          "The third preference will be given to code with fewer lines.",
          "In case of a tie in the number of errors, TIME of submission will be considered.",
          "Shortlisted participants of Round-1 will appear for Round-2, for which the above rules are applicable.",
        ],
      },
    ],
  },
  {
    name: "BUG-SMASH CODE",
    id: 3,
    description: "Debugging",
    slug: "bug-smash-code",
    topicsData: [
      {
        topicName: "Description",
        items: [
          "Two members per team.",
          "2 rounds will be conducted.",
          "Prelims will consist of MCQ dealing with general programming questions.",
          "It will consist of 3 sections:",
          "- Section A: General MCQs.",
          "- Section B: Finding outputs of given code snippets.",
          "- Section C: Finding errors in given code snippets.",
          "30 questions in total, 10 questions in each section. Total marks: 30.",
          "Use the OMR columns in the front sheet to mark answers.",
          "6 teams will be shortlisted for finals.",
          "Finals will consist of 3 programs in 3 different programming languages.",
          "Winners will be selected based on completion time and the number of bugs fixed.",
        ],
      },
    ],
  },
  {
    name: "TECH-CHARADES",
    id: 4,
    description: "",
    slug: "tech-charades",
    topicsData: [
      {
        topicName: "Description",
        items: [
          "Technical dumb-charades is a new and exciting version of Dumb charades in which the team has to enact the given technical terms.",
        ],
      },
      {
        topicName: "Rules",
        items: [
          "The team should constitute of 3 members.",
          "Lip movement is not allowed - only hand movements should be there.",
          "No alphabets are to be indicated.",
          "No objects should be indicated.",
        ],
      },
    ],
  },
  {
    name: "PAPERPIX",
    id: 5,
    description: "Paper Presentation",
    slug: "paperpix-paper",
    topicsData: [
      {
        topicName: "Rules",
        items: [
          "Each team will consist of 2 participants (2 teams per college).",
          "Presenting papers must be based on the given topics.",
          "Time: 7 minutes for the presentation and 3 minutes for queries.",
          "Present their ideas within 8-10 slides. Time restrictions will be strictly followed.",
          "The presentation should be only in MS PowerPoint (ppt /pptx) or PDF formats.",
          "Participants are requested to have a hardcopy as well as a softcopy of their presentation.",
          "Names and Institute name should appear on the backside of the paper presentation.",
          "All lettering and diagrams should be large enough to be read from a minimum of 2 feet.",
          "All participants will receive participation certificates (Optional).",
          "Marks will be based on theme, creativity, efforts taken, scientific content, and presentation.",
          "Violation of any rule mentioned above can lead to disqualification of the paper at any time.",
          "Decision of the judges/committee will be final.",
          "Send your ppt and abstract on or before 11/02/2024 to the given Mail-id.",
          "Mail id: heberianppt@gmail.com (Mail subject must contain the details of the team members name, department name, college name, and contact number)",
        ],
      },
      {
        topicName: "Topics",
        items: [
          "Robotics and AI: The Future of Human-Machine Collaboration.",
          "What is the Impact of 5G Technology in Modern Days?",
          "How does Big Data Analytics is used for Decision Making.",
          "Security in cloud computing.",
          "Nanotechnology used in Medicine and Electronics.",
          "Internet of Things (IoT) for Smart Homes.",
          "Artificial Intelligence (AI).",
          "Information Security.",
          "Cloud Computing.",
          "Block Chain.",
          "Image Processing.",
          "Healthcare Technology.",
          "3D Biometrics.",
          "Natural Language Processing (NLP).",
          "New Emerging Trends.",
        ],
      },
      {
        topicName: "Tips",
        items: [
          "The presentation must contain real-time problems and solutions.",
        ],
      },
      {
        topicName: "Following Details Should Be Submitted With the Abstract",
        items: [
          "Title.",
          "Name of the candidates.",
          "Department/Year/Section.",
          "College name and address.",
          "Contact Number and Email ID.",
          "Font: Times New Roman.",
          'Size: "Title = 16 (bold), Content = 12"',
        ],
      },
    ],
  },
];

export const nonTechnicalEvents: EventData[] = [
  {
    name: "HUSTLE HOUR",
    id: 6,
    description: "Treasure Hunt",
    slug: "hustle-hour-treasure-hunt",
    topicsData: [
      {
        topicName: "Description",
        items: [
          "Four members per team.",
          "Total Two rounds will be conducted (Rules for both round will be discussed on the spot).",
          "5 teams will be selected for the final round.",
          "Participants can use a mobile phone only for scanning QR code, not to find answers.",
          "The team which involves in malpractices or cheating will be disqualified.",
          "The team which copies the answer from another team will also be disqualified.",
        ],
      },
    ],
  },
  {
    name: "PIX-LINK",
    description: "Connection",
    id: 7,
    slug: "pix-link-connection",
    topicsData: [
      {
        topicName: "Description",
        items: [
          "Two members per team.",
          "Prelims will be conducted.",
          "3 rounds will be conducted.",
          "4 teams will be selected for finals.",
        ],
      },
    ],
  },
  {
    name: "MOVIE QUIZ",
    description: "",
    id: 8,
    slug: "movie-quiz",
    topicsData: [
      {
        topicName: "Description",
        items: [
          "Two members per team.",
          "Prelims will be conducted.",
          "6 teams will be selected for finals.",
          "Mobile phones and other electronic gadgets are prohibited.",
        ],
      },
    ],
  },
  {
    name: "DUMB STRUCK",
    description: "Dumb Charades",
    id: 9,
    slug: "dumb-struck-dumb-charades",
    topicsData: [
      {
        topicName: "Description",
        items: [
          "3 members per team.",
          "If Lip movement and sign languages are done, The team will be disqualified",
          "Prelims will be conducted.",
          "4 teams will be selected for finals.",
        ],
      },
    ],
  },
  {
    name: "LYRIC-O-HOLIC",
    description: "",
    id: 10,
    slug: "lyric-o-holic",
    topicsData: [
      {
        topicName: "Description",
        items: [
          "In this event, participants will be shown incomplete lyrics of songs and they are expected to find the missing lyrics within the stipulated time.",
        ],
      },
      {
        topicName: "Rules",
        items: [
          "Participants are asked to be on time to the allocated venue; else, the team will be disqualified.",
          "Only 4 participants per team.",
          "3 Rounds will be conducted.",
          "All team members must participate.",
          "The answers should not be discussed with teammates.",
          "Each song will be given 5 seconds to guess the lyrics.",
          "If the team member answers wrong, the chance will be given to the next team.",
          "Lyrics should be pronounced properly.",
          "An award will be given to the team that finds the maximum number of songs within the given time.",
        ],
      },
    ],
  },
];

export const generalRules = [
  "We would like to invite UG & PG Students of (CS/APPLICATION/ IT /CSE /ITE OTHER COMPUTER RELATED DEPT) for various events.",
  "Register on or before Feb 13, 2024. No On-Spot registration.",
  "Registration fee per student is Rs: 200/-.",
  "Only 15 members are allowed per department (Including both UG and PG).",
  "Participants must bring their college ID card.",
  "Non-registered participants are not allowed. Only Student Representative Staffs are allowed to accompany the participants if needed.",
  "Students can participate in one or two event activities (which can be one technical and non-technical).",
  "Students must come with formal dress code.",
  "All event details will be conveyed through WhatsApp broadcast messages. So please make sure that you bring a smartphone with a good internet connection.",
  "Students must not engage in any malpractices or violations. Otherwise, the team will be disqualified.",
  "Participants must be present on or before 8.30 am in the college premises. Food and refreshments will be provided for all the registered students.",
  "Certificates will be provided to all participants.",
  "Overall rewards will be awarded based on the performance of the individual departments and not based on the college.",
  "The decision of the Judges’ is final.",
];
