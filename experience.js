var experienceList = [
    {
        position: 'fronted developer',
        company: 'Anonymous',
        duration: '2024 - 25',
        description: 'fronted developer creates and implements the visual and interactive aspects of website using html,css and javascript'
    },
    {
        position: 'Drop shipping entrepreneur',
        company: 'shopify',
        duration: '2023 - 2024',
        description: 'Drop shipper manages an online  store and coordinates with suppliers to fulfill orders without holding inventory.'
    },
    {
        position: 'logo designer ',
        company: 'upwork',
        duration: '2024 - Present',
        description: 'Logo designer creates visual symbols that represent brands and business.'
    }
];
function displayExperience(experience) {
    var section = document.querySelector('#experience .content');
    if (section) {
        section.innerHTML = experience.map(function (exp) { return "\n            <div class=\"experience-item\">\n                <h3>".concat(exp.position, " at ").concat(exp.company, "</h3>\n                <p><strong>Duration:</strong> ").concat(exp.duration, "</p>\n                <p>").concat(exp.description, "</p>\n            </div>\n        "); }).join('');
    }
}
displayExperience(experienceList);
