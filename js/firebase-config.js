// Konfigurasi Firebase
const firebaseConfig = {
 apiKey: "AIzaSyAKOiBKj25rCgLDhSPEkQ4CzggMIQ7CWdo",
  authDomain: "asat-kls-4.firebaseapp.com",
  projectId: "asat-kls-4",
  storageBucket: "asat-kls-4.firebasestorage.app",
  messagingSenderId: "772081856533",
  appId: "1:772081856533:web:d07e1ec41ac97660001e1c"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Collection references
const usersRef = db.collection('users');
const classesRef = db.collection('classes');
const subjectsRef = db.collection('subjects');
const questionsRef = db.collection('questions');
const examsRef = db.collection('exams');
const answersRef = db.collection('answers');
const gradesRef = db.collection('grades');

// Data kelas yang tersedia
const availableClasses = ['4A', '4B', '5A', '5B', '6A', '6B'];

// Data mata pelajaran
const availableSubjects = [
    'Matematika',
    'Bahasa Indonesia',
    'IPA',
    'IPS',
    'PPKn',
    'PJOK',
    'SBdP'
];
