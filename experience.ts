// experience.ts
interface Experience {
    position: string;
    company: string;
    duration: string;
    description: string;
}

const experienceList: Experience[] = [
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

function displayExperience(experience: Experience[]) {
    const section = document.querySelector('#experience .content');
    if (section) {
        section.innerHTML = experience.map(exp => `
            <div class="experience-item">
                <h3>${exp.position} at ${exp.company}</h3>
                <p><strong>Duration:</strong> ${exp.duration}</p>
                <p>${exp.description}</p>
            </div>
        `).join('');
    }
}

displayExperience(experienceList);