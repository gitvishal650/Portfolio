export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#stack', label: 'Stack' },
  { href: '#process', label: 'Approach' },
  { href: '#experience', label: 'Education' },
]

export const heroStats = [
  { num: '3', label: 'full-stack apps built end to end' },
  { num: 'MERN', label: 'core stack, daily driver' },
  { num: '2027', label: 'MCA graduation, available now' },
]

export const projects = [
  {
    index: '01',
    title: 'CollabBoard — real-time collaborative whiteboard',
    description:
      'A whiteboard where multiple signed-in users edit the same board at once, with live cursors and instant sync. Room-based socket namespaces keep concurrent edits from overwriting each other, and boards autosave to MongoDB behind JWT-based access control.',
    tags: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
    metric: 'Live multi-user editing with conflict-safe sync',
    href: '',
  },
  {
    index: '02',
    title: 'BookMySlot — appointment scheduling & payments',
    description:
      'A booking platform that blocks double-booking with server-side slot locking and live availability checks. Stripe handles test-mode payment capture on confirmation, Nodemailer sends the reminders, and providers get a dashboard to manage schedules and payment status.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
    metric: 'Zero double-bookings by design, not by luck',
    href: '',
  },
  {
    index: '03',
    title: 'SpamShield — ML-powered spam classifier',
    description:
      'A text classifier trained on labeled SMS data (TF-IDF plus Naive Bayes / logistic regression) to flag spam messages, served through a Flask API with confidence scores and checked live from a small React front end.',
    tags: ['Python', 'scikit-learn', 'Flask', 'React.js'],
    metric: 'Deployed end to end for public demo access',
    href: '',
  },
]

export const stack = [
  {
    title: 'Frontend',
    items: ['React.js & React Hooks', 'Context API', 'Bootstrap 5', 'Responsive design'],
  },
  {
    title: 'Backend',
    items: ['Node.js & Express.js', 'REST APIs & Middleware', 'JWT authentication', 'MVC architecture'],
  },
  {
    title: 'Data',
    items: ['MongoDB', 'Mongoose', 'Schema design', 'CRUD workflows'],
  },
  {
    title: 'Tools & extras',
    items: ['Git & GitHub', 'Postman', 'Stripe API integration', 'Python, scikit-learn (basics)'],
  },
]

export const processSteps = [
  {
    num: 1,
    title: 'Plan the schema',
    body: 'Map out the data model and API routes first, so the frontend and backend agree before either is built.',
  },
  {
    num: 2,
    title: 'Build the API',
    body: 'Stand up the Express routes and MongoDB models, then test every endpoint in Postman before touching the UI.',
  },
  {
    num: 3,
    title: 'Wire up React',
    body: "Connect the interface to real data early, so broken states show up while there's still time to fix them.",
  },
  {
    num: 4,
    title: 'Ship & document',
    body: 'Deploy the working app and write down what it does, so anyone picking it up can run it without asking me.',
  },
]

export const education = [
  {
    year: '2025—2027',
    title: 'Master of Computer Applications (MCA)',
    detail: 'RD Engineering College, AKTU — currently pursuing.',
    role: 'Ghaziabad, UP',
  },
  {
    year: '2022—2025',
    title: 'Bachelor of Computer Applications (BCA)',
    detail: 'HRIT Group of Institutions, CCSU.',
    role: 'Ghaziabad, UP',
  },
  {
    year: '2026',
    title: 'MERN Stack Full-Stack Development',
    detail: 'Certification, RD Engineering College, AKTU.',
    role: 'Certification',
  },
  {
    year: '2024',
    title: 'Web Development with Python',
    detail: 'Softpro India — June to July 2024.',
    role: 'Certification',
  },
]

export const contactLinks = [
  { label: 'vishal.panchalz2652@gmail.com', href: 'mailto:vishal.panchalz2652@gmail.com' },
  { label: '+91 93156 37610', href: 'tel:+919315637610' },
  { label: 'github.com/vishalpanchal', href: 'https://github.com/vishalpanchal' },
  { label: 'linkedin.com/in/vishalpanchal', href: 'https://linkedin.com/in/vishalpanchal' },
]
