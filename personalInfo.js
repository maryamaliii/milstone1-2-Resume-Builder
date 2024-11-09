var personalInfo = {
    name: 'Maryam Anwar',
    email: 'maryamanwar502@gmail.com',
    phone: '+92 313******',
    address: '1234 Street, Karachi, Pakistan',
};
function displayInfo(info) {
    var section = document.querySelector('#personal-info .content');
    if (section) {
        section.innerHTML = "\n            <p><strong>Name:</strong> ".concat(info.name, "</p>\n            <p><strong>Email:</strong> ").concat(info.email, "</p>\n            <p><strong>Phone:</strong> ").concat(info.phone, "</p>\n            <p><strong>Address:</strong> ").concat(info.address, "</p>\n            ");
    }
}
displayInfo(personalInfo);
