var educationList = [
    { degree: 'IT student', institution: 'Governor House', year: 'Currently pursuing' },
    { degree: 'Intermediate in Pre Medical science ', institution: 'Govt college women nazimabad', year: '2021 - 2022' },
    { degree: 'Matriculation of Science', institution: 'The Oasis Public Sec School', year: '2019- 2020' }
];
function displayEducation(education) {
    var section = document.querySelector('#education .content');
    if (section) {
        section.innerHTML = education.map(function (edu) { return "\n            <p><strong>".concat(edu.degree, "</strong> - ").concat(edu.institution, " (").concat(edu.year, ")</p>\n        "); }).join('');
    }
}
displayEducation(educationList);
