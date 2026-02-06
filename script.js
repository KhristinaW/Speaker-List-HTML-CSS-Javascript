//Array of speaker objects
const speaker  =[
    {
        name:'Dr. Sarah Chen',
        occupation:'Cheif AI Researcher',
        company:'TechVision Labs',
        description:'Dr. Chen is a leading expert in machine learning with over 15 years of experience. She has published more than 50 papers on neural networks and AI ethics',
        topic:'The Future of Ethical AI Development',
        expertise:'Machine Learning & AI Ethics',
        previous:'Tech Summit 2024',
        website:'sarahchen.tech',
        twitter:'@sarahchen_ai',
        linkedIn:'linkedin.com/in/sarahchen',
    },
    {
        
        name:'Marcus Rodriguez',
        occupation:'Founder & CEO',
        company:'GreenTech Innovations',
        description:'Marcus is a serial entrepreneur passionate about sustainable technology. He has founded three sucessful startups focused on clean energy solutions',
        topic:'Building Sustainable Startups in a Digital Age',
        expertise:'Extrepreneurship & Sustainability',
        previous:'Startup Grind Global',
        website:'greentech-innovations.com',
        twitter:'@marcusrod',
        linkedIn:'linkedin.com/in/marcusrodriguez'
    },
    {
        
        name:'Dr. Amara Okafor',
        occupation:'Director of CyberSecurity',
        company:'SecureNet Solutions',
        description:'Dr. Okafor specializes in cybersecurity and threat intelligence. She advises governments and Fortune 500 companies on digital security strategies.',
        topic:'Protecting Your DigitalAssets:Modern Cybersecurity Strategies',
        expertise:'Cybersecurity & Threat Intelligence',
        previous:'CyberSec World',
        website:'amaraokafor.com',
        twitter:'@amara_security',
        linkedIn:'linkedin.com/in/amaraokafor'
    },
    {
        
        name:'James Patterson',
        occupation:'Head of Product Design',
        company:'DesignFirst Studio',
        description:'James has led design teams at major tech companies for over a decade. His work has won multiple design awards and shaped user experiences for millions.',
        topic:'Human-Centered Design in the Age of AI',
        expertise:'UX Design & Product Strategy',
        previous:'Design Conference 2024',
        website:'jpatterson-design.com',
        twitter:'@jpatterson_ux',
        linkedIn:'linkedin.com/in/jamespatterson',
    },
    {
        
        name:'Dr. Priya Sharma',
        occupation:'VP of Data Science',
        company:'Analystics Corp',
        description:'Dr. Sharma leads data science initiatives that drive business transformation. She is known for making complex data accessible and actionable.',
        topic:'Data-Driven Decision Making:From Insights to Impact',
        expertise:'Data Science & Business Analytics',
        previous:'Data & AI Summit',
        website:'priyasharma-analytics.com',
        twitter:'@priya_data',
        linkedIn:'linkedin.com/in/priyasharma',
    },
    {
         
        name:'Alex Thompson',
        occupation:'Blockchain Architect',
        company:'CrytoChain Technologies',
        description:'Alex is a pioneer in blockchain technology and decentralize d systems. He is contributed to several major blockchain protocols and advises on Web3 strategies.',
        topic:'Blockchain Beyond Cryptocurrency:Real-World Applications',
        expertise:'Blockchain & Web3',
        previous:'Blockchain Expo',
        website:'alexthompson.io',
        twitter:'@alexthompson_bc',
        linkedIn:'linkedin.com/in/alexthompson',
    },
    {
         
        name:'Lisa Wang',
        occupation:'Cheif Marketing Officer',
        company:'BrandSpark Agency',
        description:'Lisa has revolutionize d digital marketing strategies for global brands. Her campaigns have generated billions in revenue and won numerous industry awards.',
        topic:'Marketing in 2026:Authenticity Meets Automation',
        expertise:'Digital Marketing & Brand Strategy',
        previous:'Marketing Week Live',
        website:'lisawang.co',
        twitter:'@lisawang_mktg',
        linkedIn:'linkedin.com/in/lisawang',
    },
    {
         
        name:'Dr. Micheal Foster',
        occupation:'Quantum Computing Researcher',
        company:'Quantum Dynamics Institute',
        description:'Dr. Foster is at the forefront of quantum computing research. His work on quantum algorithms has potential applications in cryptography and optimization.',
        topic:'Quantum Computing:The Next Computing Revolution',
        expertise:'Quantum Computing & Physics',
        previous:'Quantum Tech Congress',
        website:'michaelfoster-quantum.edu',
        twitter:'@mfoster_quantum',
        linkedIn:'linkedin.com/in/michaelfoster'
    }
    
];

const grid = document.getElementById('grids');
html = ''

for(let i = 0; i < speaker.length; i++){
    const speak = speaker[i];

 html += `
    <div class="speaker-card">
                <img src="avatar-img.png"/>
                <h2 class="speaker-name">${speak.name}</h2>
                <h4 class="speaker-job">${speak.occupation}</h4>
                <h5 class="speaker-company">${speak.company}</h5>
                <p class="speaker-desc">${speak.description}</p>
                <h6 class="speaker-topic">Topic: ${speak.topic}</h6>

            
            <div class="speaker-footer">
                <p class="speaker-expertise">Expertise: <span> ${speak.expertise}</span> </p>
                <p class="speaker-previous">Previous Event: <span> ${speak.previous}</span></p>
                <hr id="line">
                <a href="${speak.website}" class="speaker-website">Website</a>
                <a href="${speak.twitter}" class="speaker-twitter">Twitter</a>
                <a href="${speak.linkedIn}" class="speaker-link">linkedIn</a>
                <hr/>
            </div>
        </div>
`   
}

grid.innerHTML = html;


