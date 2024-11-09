// personalInfo.ts
interface PersonalDetails{
    name: string;
    email: string;
    phone: string;
    address: string;
    
}

let personalInfo: PersonalDetails = {
    name: 'Maryam Anwar',
    email: 'maryamanwar502@gmail.com',
    phone: '+92 313******',
    address: '1234 Street, Karachi, Pakistan',
    
};

function displayInfo(info: PersonalDetails) {
    const section = document.querySelector('#personal-info .content');
    if (section) {
        section.innerHTML = `
            <p><strong>Name:</strong> ${info.name}</p>
            <p><strong>Email:</strong> ${info.email}</p>
            <p><strong>Phone:</strong> ${info.phone}</p>
            <p><strong>Address:</strong> ${info.address}</p>
            `;
    }
}

displayInfo(personalInfo);