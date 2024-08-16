export const introduction: string[] = [
  "Hi everyone, my name is Moh Hasan Efendi. I'm a Front End Developer Enthusiast, Information Systems Student, and Free and Open Source Software Enthusiast",
  `I live in Kediri, Indonesia. I was born in Kediri on November 28, 2003. I'm ${calculateAge(
    new Date('2003-11-28')
  )} years old. I'm an Information Systems Student at Nusantara University PGRI Kediri.`,
  'My favorite programming language is TypeScript, and I enjoy working with React.js or Next.js.',
  'My interest in technology stems from curiosity about innovations and how popular websites function. Aspiring to become a Software Engineer, I'm committed to developing my skills and contributing to the tech world.',
];

function calculateAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
