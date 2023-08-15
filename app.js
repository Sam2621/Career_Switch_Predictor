// alert("running"); 

const professions = ['businessman',
    'politician',
    'cricket',
    'hollywood',
    'bollywood',
    'musician',
    'literature',
    'sports',
    'criminal',
    'astrologer',
    'singer']


const tuple = [
    ['businessman', 'politician'],
    ['businessman', 'cricket'],
    ['businessman', 'cricket'],
    ['businessman', 'hollywood'],
    ['businessman', 'hollywood'],
    ['businessman', 'bollywood'],
    ['businessman', 'bollywood'],
    ['businessman', 'musician'],
    ['businessman', 'musician'],
    ['businessman', 'literature'],
    ['businessman', 'literature'],
    ['businessman', 'sports'],
    ['businessman', 'sports'],
    ['businessman', 'criminal'],
    ['businessman', 'criminal'],
    ['businessman', 'astrologer'],
    ['businessman', 'astrologer'],
    ['businessman', 'singer'],
    ['businessman', 'singer'],
    ['politician', 'cricket'],
    ['politician', 'cricket'],
    ['politician', 'hollywood'],
    ['politician', 'hollywood'],
    ['politician', 'bollywood'],
    ['politician', 'bollywood'],
    ['politician', 'musician'],
    ['politician', 'musician'],
    ['politician', 'literature'],
    ['politician', 'literature'],
    ['politician', 'sports'],
    ['politician', 'sports'],
    ['politician', 'criminal'],
    ['politician', 'criminal'],
    ['politician', 'astrologer'],
    ['politician', 'astrologer'],
    ['politician', 'singer'],
    ['politician', 'singer'],
    ['cricket', 'hollywood'],
    ['cricket', 'hollywood'],
    ['cricket', 'bollywood'],
    ['cricket', 'bollywood'],
    ['cricket', 'musician'],
    ['cricket', 'musician'],
    ['cricket', 'literature'],
    ['cricket', 'literature'],
    ['cricket', 'sports'],
    ['cricket', 'sports'],
    ['cricket', 'criminal'],
    ['cricket', 'criminal'],
    ['cricket', 'astrologer'],
    ['cricket', 'astrologer'],
    ['cricket', 'singer'],
    ['cricket', 'singer'],
    ['hollywood', 'bollywood'],
    ['hollywood', 'bollywood'],
    ['hollywood', 'musician'],
    ['hollywood', 'musician'],
    ['hollywood', 'literature'],
    ['hollywood', 'literature'],
    ['hollywood', 'sports'],
    ['hollywood', 'sports'],
    ['hollywood', 'criminal'],
    ['hollywood', 'criminal'],
    ['hollywood', 'astrologer'],
    ['hollywood', 'astrologer'],
    ['hollywood', 'singer'],
    ['hollywood', 'singer'],
    ['bollywood', 'musician'],
    ['bollywood', 'musician'],
    ['bollywood', 'literature'],
    ['bollywood', 'literature'],
    ['bollywood', 'sports'],
    ['bollywood', 'sports'],
    ['bollywood', 'criminal'],
    ['bollywood', 'criminal'],
    ['bollywood', 'astrologer'],
    ['bollywood', 'astrologer'],
    ['bollywood', 'singer'],
    ['bollywood', 'singer'],
    ['musician', 'literature'],
    ['musician', 'literature'],
    ['musician', 'sports'],
    ['musician', 'sports'],
    ['musician', 'criminal'],
    ['musician', 'criminal'],
    ['musician', 'astrologer'],
    ['musician', 'astrologer'],
    ['musician', 'singer'],
    ['musician', 'singer'],
    ['literature', 'sports'],
    ['literature', 'sports'],
    ['literature', 'criminal'],
    ['literature', 'criminal'],
    ['literature', 'astrologer'],
    ['literature', 'astrologer'],
    ['literature', 'singer'],
    ['literature', 'singer'],
    ['sports', 'criminal'],
    ['sports', 'criminal'],
    ['sports', 'astrologer'],
    ['sports', 'astrologer'],
    ['sports', 'singer'],
    ['sports', 'singer'],
    ['criminal', 'astrologer'],
    ['criminal', 'astrologer'],
    ['criminal', 'singer'],
    ['criminal', 'singer'],
    ['astrologer', 'singer'],
    ['astrologer', 'singer']

]

const tuple_vals = [68.75,
    72.22222222,
    72.22222222,
    74.41860465,
    74.41860465,
    66.14173228,
    66.14173228,
    68,
    68,
    69.23076923,
    69.23076923,
    60.62992126,
    60.62992126,
    77.5862069,
    77.5862069,
    63.80952381,
    63.80952381,
    89.91596639,
    89.91596639,
    59.1954023,
    59.1954023,
    60.4519774,
    60.4519774,
    58.28571429,
    58.28571429,
    72.25433526,
    72.25433526,
    60.11235955,
    60.11235955,
    65.14285714,
    65.14285714,
    71.69811321,
    71.69811321,
    50.32679739,
    50.32679739,
    86.22754491,
    86.22754491,
    80.57142857,
    80.57142857,
    71.0982659,
    71.0982659,
    74.85380117,
    74.85380117,
    58.52272727,
    58.52272727,
    68.78612717,
    68.78612717,
    83.65384615,
    83.65384615,
    60.92715232,
    60.92715232,
    83.03030303,
    83.03030303,
    70.45454545,
    70.45454545,
    72.98850575,
    72.98850575,
    66.48044693,
    66.48044693,
    76.27118644,
    76.27118644,
    68.51851852,
    68.51851852,
    60,
    60,
    74.55621302,
    74.55621302,
    68.02325581,
    68.02325581,
    64.97175141,
    64.97175141,
    52.29885057,
    52.29885057,
    80,
    80,
    57.89473684,
    57.89473684,
    93.37349398,
    93.37349398,
    68,
    68,
    63.37209302,
    63.37209302,
    85.4368932,
    85.4368932,
    67.33333333,
    67.33333333,
    89.63414634,
    89.63414634,
    66.66666667,
    66.66666667,
    77.77777778,
    77.77777778,
    57.41935484,
    57.41935484,
    73.37278107,
    73.37278107,
    77.35849057,
    77.35849057,
    64.70588235,
    64.70588235,
    91.61676647,
    91.61676647,
    73.80952381,
    73.80952381,
    76.53061224,
    76.53061224,
    79.31034483,
    79.31034483]

// const pairs = tuple.map(tuple => [tuple[0], tuple[1]]);

var currProfession_select = document.getElementById('current-pro');
var newProfession_select = document.getElementById('new-pro');



professions.forEach((item) => {
    currProfession_select.add(new Option(item));
})

professions.forEach((item) => {
    newProfession_select.add(new Option(item));
})


document.getElementById("submitButton").addEventListener("click", function (event) {
    event.preventDefault()
});


function submitaction() {
    var userName = document.getElementById('name').value;
    var inputname = document.getElementById('name').value;
    const firstLetter = userName.charAt(0)

    const firstLetterCap = firstLetter.toUpperCase()

    const remainingLetters = userName.slice(1)

    userName = firstLetterCap + remainingLetters
    const resultDiv = document.querySelector('.container.result');
    const h2Element = resultDiv.querySelector('h2');
    if (!inputname) {
        alert('Please enter your name');
    }
    var currProfession = document.getElementById('current-pro').value;
    var newProfession = document.getElementById('new-pro').value;

    if (!currProfession || !newProfession) {
        alert('Please select your professions');
    }

    if (currProfession === newProfession) {
        alert("You can't change your profession to the same one");
    } else {
        var temp = [currProfession, newProfession];
        function isFind(element) {
            return element[0] === temp[0] && element[1] === temp[1];
        }
        var ind = tuple.findIndex(isFind);
        if (ind === -1) {
            h2Element.innerText = "This career switch is not feasible";
            resultDiv.classList.add('visibility')
        }
        else {
            let percentage = tuple_vals[ind];
            resultDiv.classList.add('visibility')
            percentage = Math.round(percentage * 10) / 10
            h2Element.innerText = userName + " your career switch is favourable by " + percentage + "%";
        }
    }
}
