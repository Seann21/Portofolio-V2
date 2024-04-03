export const introduction: string[] = [
  "Hi everyone, my name is Moh Hasan Efendi. I'm a Front End Developer Enthusiast, Information Systems Student, Free and Open Source Software Enthusiast",
  `I live in Kediri, Indonesia. I was born in Kediri, 28 November 2003. I'm ${calculateAge(
    new Date('2003-11-23')
  )} years old. I'm a Information Systems Student from Nusantara University PGRI  Kediri.`,
  'I am someone who started loving coding at the age of 18. My learning journey started with HTML and C++, and the first programming language I mastered was C++. My great interest in the world of technology grew from curiosity about the latest innovations. Since I was little, I enjoyed visiting icafe/internet cafes, but my understanding of the world of computers developed when I realized the crucial role of software. and Always want to explore the latest technology',
  'My interests focus on understanding how websites like Facebook, Twitter, and Instagram work. My dream is to become a Frontend Developer.I have started developing programming skills and am willing to continue learning to achieve this goal. With an educational background in information technology, I am committed to continuing to develop myself and make contributions to the world of technology.',
];

function calculateAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
