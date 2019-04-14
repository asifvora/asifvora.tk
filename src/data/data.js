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
const html = { level: 1.0, name: 'HTML5' };
const css = { level: 1.0, name: 'CSS' };
const scss = { level: 1.0, name: 'SCSS' };
const jquery = { level: 1.0, name: 'jQuery' };
const bootstrap = { level: 1.0, name: 'Bootstrap' };

const js = { level: 1.0, name: 'JavaScript' };
const es = { level: 1.0, name: 'ES6' };
const react = { level: 1.0, name: 'ReactJS' };
const redux = { level: 1.0, name: 'ReduxJS' };
const rn = { level: 0.8, name: 'React Native' };
const vuejs = { level: 1.0, name: 'VueJS' };
const vuex = { level: 1.0, name: 'Vuex' };
const ng = { level: 1.0, name: 'Angular7' };
const typescript = { level: 1.0, name: 'TypeScript' };
const webpack = { level: 1.0, name: 'WebPack' };
const sw = { level: 1.0, name: 'Service Worker' };
const mern = { level: 1.0, name: 'MERN Stack' };
const node = { level: 1.0, name: 'NodeJS' };
const express = { level: 1.0, name: 'ExpressJS' };
const sails = { level: 1.0, name: 'SailsJS' };
const websockets = { level: 0.8, name: 'WebSockets' };
const ionic = { level: 0.8, name: 'Ionic' };

const lambda = { level: 1.0, name: 'AWS Lambda' };
const api = { level: 1.0, name: 'REST APIs' };
const gql = { level: 1.0, name: 'GraphQL' };
const realmdb = { level: 1.0, name: 'RealmDB' };
const mysql = { level: 1.0, name: 'MySQL' };
const mongodb = { level: 1.0, name: 'MongoDB' };
const psql = { level: 1.0, name: 'PostgreSQL' };
const fb = { level: 0.5, name: 'Firebase' };

const php = { level: 0.7, name: 'PHP' };
const cakephp = { level: 0.7, name: 'Cake PHP' };

const git = { level: 0.8, name: 'Git' };
const svn = { level: 0.8, name: 'SVN' };
const sourcetree = { level: 0.8, name: 'Source Tree' };
const adbphotoshop = { level: 0.7, name: 'Adobe Photoshop' };
const adbdesign = { level: 0.7, name: 'Adobe InDesign' };

const skills = {
    html, css, scss, bootstrap, jquery, js, es, react, redux,
    rn, vuejs, vuex, ng, typescript, webpack, sw, mern, node, express, sails,
    websockets, ionic, lambda, api, gql, realmdb, mysql, mongodb, psql, fb,
    php, cakephp, git, svn, sourcetree, adbphotoshop, adbdesign
};


/*************
* Educations *
*************/
const educations = [
    {
        school: 'L.J. Institute Of Engineering and Technology',
        university: 'Gujarat Technological University',
        location: 'Ahemedabad',
        degree: `Master's degree`,
        study: 'MCA',
        grade: '8.21 CGPA',
        startsAt: '2015',
        endsAt: '2017',
    },
    {
        school: 'L.N.Patel College of COMP & MANAG',
        university: 'Hemchandracharya North Gujarat University',
        location: 'Kalyanpura',
        degree: `Bachelor's degree`,
        study: 'BCA',
        grade: '84.66%',
        startsAt: '2012',
        endsAt: '2015',
    },
    {
        school: 'Shree Madhymikshala',
        university: 'GHSEB',
        location: 'Viramgam',
        degree: 'HSC',
        study: '12th Commerce',
        grade: '67.14 %',
        startsAt: '2010',
        endsAt: '2012',
    },
    {
        school: 'New Education High School',
        university: 'GSEB',
        location: 'Viramgam',
        degree: 'SSC',
        study: '10th',
        grade: '59.38 %',
        startsAt: '2009',
        endsAt: '2010',
    }
];


/*******************
* Experience *
*******************/
const experience = [
    {
        company: 'Multidots Solutions Pvt Ltd',
        remote: false,
        position: 'JavaScript Developer',
        description: `I am working as a JavaScript Developer for building web applications.`,
        startsAt: '2017-07-01',
        endsAt: undefined,
    },
    {
        company: 'Multidots Solutions Pvt Ltd',
        remote: false,
        position: 'Project Trainee',
        description: `Project trainee.`,
        startsAt: '2017-01-02',
        endsAt: '2017-06-30',
    }
];


/***********
* Projects *
***********/

const projects = [
    {
        name: 'My Website',
        url: 'https://asifvora.netlify.com',
        description: `My personal website`,
        startsAt: '2019',
        endsAt: undefined,
        skills: {
            react,
            webpack
        },
    },
    {
        name: 'Sound Base',
        url: 'https://soundbase.netlify.com',
        description: `Soundbase music web application.`,
        startsAt: '2018',
        endsAt: undefined,
        skills: {
            react,
            redux,
            webpack
        },
    }
];


export { sectionTypes, profile, socialNetworks, skills, educations, experience, projects };