const sectionTypes = ['Profile', 'Skills', 'Educations', 'Experience', 'Projects'];

/*********
* Profile *
*********/

const profile = {
    myName: 'asifvora',
    profession: 'JavaScript developer',
    email: 'asifvora0@gmail.com',
    city: 'viramgam',
    postalCode: '382150'
};

const socialNetworks = {
    github: 'https://github.com/asifvora',
    stackoverflow: 'https://stackoverflow.com/users/7833077/asif-vora',
    linkedin: 'https://www.linkedin.com/in/asif-vora',
    twitter: 'https://twitter.com/007_dark_shadow',
    instagram: 'https://www.instagram.com/007_dark_shadow/',
    facebook: 'https://www.facebook.com/asif.vora.92',
};

/*********
* Skills *
*********/
export const html = { level: 1.0, name: 'HTML5' };
export const css = { level: 1.0, name: 'CSS' };
export const scss = { level: 1.0, name: 'SCSS' };
export const jquery = { level: 1.0, name: 'jQuery' };
export const bootstrap = { level: 1.0, name: 'Bootstrap' };

export const js = { level: 1.0, name: 'JavaScript' };
export const es = { level: 1.0, name: 'ES6' };
export const react = { level: 1.0, name: 'ReactJS' };
export const redux = { level: 1.0, name: 'ReduxJS' };
export const rn = { level: 0.8, name: 'React Native' };
export const vuejs = { level: 1.0, name: 'VueJS' };
export const vuex = { level: 1.0, name: 'Vuex' };
export const ng = { level: 1.0, name: 'Angular7' };
export const typescript = { level: 1.0, name: 'TypeScript' };
export const webpack = { level: 1.0, name: 'WebPack' };
export const sw = { level: 1.0, name: 'Service Worker' };
export const mern = { level: 1.0, name: 'MERN Stack' };
export const node = { level: 1.0, name: 'NodeJS' };
export const express = { level: 1.0, name: 'ExpressJS' };
export const sails = { level: 1.0, name: 'SailsJS' };
export const websockets = { level: 0.8, name: 'WebSockets' };
export const ionic = { level: 0.8, name: 'Ionic' };

export const lambda = { level: 1.0, name: 'AWS Lambda' };
export const api = { level: 1.0, name: 'REST APIs' };
export const gql = { level: 1.0, name: 'GraphQL' };
export const realmdb = { level: 1.0, name: 'RealmDB' };
export const mysql = { level: 1.0, name: 'MySQL' };
export const mongodb = { level: 1.0, name: 'MongoDB' };
export const psql = { level: 1.0, name: 'PostgreSQL' };
export const fb = { level: 0.5, name: 'Firebase' };

export const php = { level: 0.7, name: 'PHP' };
export const cakephp = { level: 0.7, name: 'Cake PHP' };

export const git = { level: 0.8, name: 'Git' };
export const svn = { level: 0.8, name: 'SVN' };
export const sourcetree = { level: 0.8, name: 'Source Tree' };
export const adbphotoshop = { level: 0.7, name: 'Adobe Photoshop' };
export const adbdesign = { level: 0.7, name: 'Adobe InDesign' };

export const skills = {
    html, css, scss, bootstrap, jquery, js, es, react, redux,
    rn, vuejs, vuex, ng, typescript, webpack, sw, mern, node, express, sails,
    websockets, ionic, lambda, api, gql, realmdb, mysql, mongodb, psql, fb,
    php, cakephp, git, svn, sourcetree, adbphotoshop, adbdesign
};

/*************
* Educations *
*************/
export const educations = [
    {
        school: 'L.J. Institute Of Engineering and Technology, Ahemedabad (Gujarat Technological University)',
        degree: `Master's degree`,
        study: 'MCA',
        grade: '8.21 CGPA',
        startsAt: new Date('2015'),
        endsAt: new Date('2017'),
    },
    {
        school: 'L.N.Patel College of COMP & MANAG, Kalyanpura (Hemchandracharya North Gujarat University)',
        degree: `Bachelor's degree`,
        study: 'BCA',
        grade: '84.66%',
        startsAt: new Date('2012'),
        endsAt: new Date('2015'),
    },
    {
        school: 'Shree Madhymikshala, Viramgam (GHSEB)',
        degree: 'HSC',
        study: '12th Commerce',
        grade: '67.14 %',
        startsAt: new Date('2010'),
        endsAt: new Date('2012'),
    },
    {
        school: 'New Education High School, Viramgam (GSEB)',
        degree: 'SSC',
        study: '10th SSC',
        grade: '59.38 %',
        startsAt: new Date('2009'),
        endsAt: new Date('2010'),
    }
];

/*******************
* Experience *
*******************/
export const experience = [
    {
        company: 'Multidots Solutions Pvt Ltd',
        description: `
        I am working as a JavaScript Developer for building websites, 
        mobile applications(React Native) and web applications.
      `,
        startsAt: new Date('2017-07-01'),
        endsAt: undefined,
        remote: false,
        position: [
            'JavaScript Developer'
        ]
    },
    {
        company: 'Multidots Solutions Pvt Ltd',
        description: `
        Project trainee.
       `,
        startsAt: new Date('2017-01-02'),
        endsAt: new Date('2017-06-30'),
        remote: false,
        position: [
            'Project Trainee'
        ]
    },
];

/***********
* Projects *
***********/

// export const projects = [
//     {
//         name: 'Squoint',
//         description: `
//         Squoint is a puzzle game which is optimized for mobile devices and touch
//         gestures. The game is currently in closed beta and will be launched soon.
//       `,
//         startsAt: new Date('2017'),
//         endsAt: undefined,
//         urls: [],
//         media: [],
//         skills: {
//             s3,
//             cloudfront,
//             nodejs,
//             ec2,
//             lambda,
//             typescript,
//             stylus,
//             html,
//             vuejs,
//         },
//     },

//     {
//         name: 'Colourcode',
//         description: `
//         Colourcode was created to make my life easier to create Websites for my
//         customers. With colourcode i was able to find quickly new color schemes
//         which match to the corporate identity of my clients.
//       `,
//         startsAt: new Date('2013'),
//         endsAt: undefined,
//         urls: [
//             'https://colourco.de/',
//             'https://github.com/tamino-martinius/colourco.de',
//         ],
//         media: [],
//         skills: {
//             s3,
//             cloudfront,
//             typescript,
//             coffeescript,
//             nodejs,
//             stylus,
//             html,
//             handlebars,
//             vuejs,
//         },
//     },

//     {
//         name: 'NextParticle',
//         description: `
//         NextParticle is the evolution of ParticleSlider. It's a complete rewrite
//         of the code to improve the performance and make it easier to customize for
//         the customers. The markup based initialization made it easier to create
//         a wordpress plugin.
//       `,
//         startsAt: new Date('2017'),
//         endsAt: undefined,
//         urls: [
//             'https://nextparticle.nextco.de/',
//         ],
//         media: [],
//         skills: {
//             s3,
//             cloudfront,
//             lambda,
//             nodejs,
//             psql,
//             typescript,
//             html,
//             stylus,
//             vuejs,
//         },
//     },

//     {
//         name: 'GetShares',
//         description: `
//         GetShares is created to track you social media counts on all common
//         social networks around the globe. It is also possible to create a unified
//         look of all social media buttons.
//       `,
//         startsAt: new Date('2014'),
//         endsAt: new Date('2017'),
//         urls: [
//             'http://www.getshar.es/',
//             'https://github.com/tamino-martinius/www.getshar.es',
//             'https://github.com/tamino-martinius/api.getshar.es',
//         ],
//         media: [],
//         skills: {
//             s3,
//             cloudfront,
//             nodejs,
//             js,
//             html,
//             stylus,
//             handlebars,
//         },
//     },

//     {
//         name: 'ParticleSlider',
//         description: `
//         ParticleSlider is created based on my research of Particle effect
//         rendering on a 2d canvas. It's possible to create amazing Particle
//         Effects based on simple png images. ParticleSlider is discontinued
//         since NextParticle is now available. All customers of ParticleSlider
//         a version of NextParticle for free.
//       `,
//         startsAt: new Date('2014'),
//         endsAt: new Date('2017'),
//         urls: [
//             'http://particleslider.de/',
//         ],
//         media: [],
//         skills: {
//             ec2,
//             coffeescript,
//             js,
//             html,
//             css,
//         },
//     },

//     {
//         name: 'Iary',
//         description: `
//         Iary is a time tracking and reporting solution build as Web Application.
//         It was discontinued in favor of my work at shyftplan. All customers got
//         a complete refund.
//       `,
//         startsAt: new Date('2014'),
//         endsAt: new Date('2017'),
//         urls: [
//             '',
//         ],
//         media: [],
//         skills: {
//             ec2,
//             s3,
//             cloudfront,
//             js,
//             html,
//             nodejs,
//             handlebars,
//             meteor,
//             stylus,
//             websockets,
//         },
//     },

//     {
//         name: 'Butlr',
//         description: `
//         Butlr is a automatically generated city guide for all cities in Germany.
//         It shows all Points of Interrest, Restaurants, etc. based on a enriched
//         database build on GeoDB. This project is discontinued with GeoDB.
//       `,
//         startsAt: new Date('2013'),
//         endsAt: new Date('2014'),
//         urls: [
//             '',
//         ],
//         media: [],
//         skills: {
//             s3,
//             cloudfront,
//             nodejs,
//             js,
//             html,
//             stylus,
//             psql,
//             api,
//         },
//     },

//     {
//         name: 'GeoDB',
//         description: `
//         GeoDB is a web scraper which is searching for all addresses and their
//         geo coordinates in germany. The data is used on auto completes for
//         Webpages. This project is discontinued becasue it has too high costs
//         for a Website which generates no income.
//       `,
//         startsAt: new Date('2012'),
//         endsAt: new Date('2014'),
//         urls: [
//             '',
//         ],
//         media: [],
//         skills: {
//             nodejs,
//             js,
//             html,
//             stylus,
//             psql,
//             api,
//         },
//     },
// ];


export { sectionTypes, profile, socialNetworks };