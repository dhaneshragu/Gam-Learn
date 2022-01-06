const firebaseConfig = {
    apiKey: "AIzaSyCI6w4PPKKecXzYh6QHG6yaXKdSDALSqPE",
    authDomain: "gam-learn-9af98.firebaseapp.com",
    projectId: "gam-learn-9af98",
    storageBucket: "gam-learn-9af98.appspot.com",
    messagingSenderId: "517281640775",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

auth.onAuthStateChanged((user) => {
    if (user) {
        db.collection('user-info').doc(user.uid).get().then((doc) => {
            const data = doc.data();
            if (data.type === 'user') {
                window.location.replace("/frontend/LandingPage/index.html");
            }
        })
    } else {
        window.location.replace("/frontend/index.html");
    }
});

const Question = document.querySelector("#Question1");
let i = 2;
function insert() {
    let clone = Question.cloneNode(true);
    let secondChild = clone.children[1];
    for (let i = 0; i < secondChild.children.length; i++) {
        clone.children[1].children[i].value = '';
    }
    // Update the ID and add a class
    let s = "#Question" + (i - 1);
    const lastQuestion = document.querySelector(s);
    clone.id = "Question" + i;
    i = i + 1;
    // clone.id = 'elem2';
    // clone.classList.add('text-large');

    // // Inject it into the DOM
    lastQuestion.after(clone);
}

const addQuestionBtn = document.querySelector('.add-question-button');
const questionForm = document.querySelector('.question-form');
questionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const subjects = document.querySelectorAll('.subject');
    const questions = document.querySelectorAll('.question');
    const options1 = document.querySelectorAll('.option1');
    const options2 = document.querySelectorAll('.option3');
    const options3 = document.querySelectorAll('.option3');
    const len = subjects.length;
    for (let i = 0; i < len; i++) {
        let subject = subjects[i].value;
        let question = questions[i].value;
        let option1 = options1[i].value;
        let option2 = options2[i].value;
        let option3 = options3[i].value;
        db.collection(`${subject}_questions`).add({
            question: question,
            options: [option1, option2, option3]
        }).then(() => {
            window.alert(`Question ${i + 1} saved`)
        }).catch((err) => {
            window.alert(`Some error occured while saving Question ${i + 1}`)
        })
    }
})