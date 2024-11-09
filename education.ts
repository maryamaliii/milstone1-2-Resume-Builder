// education.ts
interface Education {
    degree: string;
    institution: string;
    year: string;
}

const educationList: Education[] = [
    { degree: 'IT student', institution: 'Governor House', year: 'Currently pursuing' },
    { degree: 'Intermediate in Pre Medical science ', institution: 'Govt college women nazimabad', year: '2021 - 2022' },
    { degree: 'Matriculation of Science', institution: 'The Oasis Public Sec School', year: '2019- 2020' }
];

function displayEducation(education: Education[]) {
    const section = document.querySelector('#education .content');
    if (section) {
        section.innerHTML = education.map(edu => `
            <p><strong>${edu.degree}</strong> - ${edu.institution} (${edu.year})</p>
        `).join('');
    }
}

displayEducation(educationList);
