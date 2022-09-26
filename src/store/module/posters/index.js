import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';


export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            posters: [],
        };
    },
    mutations,
    actions,
    getters
}

/*

{ id: 'p1', title: 'Ten simple rules for researchers who want to develop web app', abstract: 'Web applications, also known as web apps, are increasingly common in the research communication portfolios of those working in the life sciences and physical sciences. Web apps help disseminate research findings and present research outputs in ways that are accessible and meaningful to the general public—from individuals, to governments, to companies. Specifically, web apps enable exploration of scenario testing and policy analysis (i.e., to answer “what if?”) as well as coevolution of scientific and public knowledge.', authors: ['Sheila M. Saia', 'Natalie G. Nelson', 'Sierra N. Young'], creator: "c3", fields: ['computer', 'web develpment'], score: 4, comment: [], votedUsers: ['c2', 'c1'] },
{ id: 'p2', title: 'Analyzing best practices on Web development frameworks: The lift approach', abstract: 'Choosing the Web framework that best fits the requirements is not an easy task for developers. Several frameworks now exist to develop Web applications, such as Struts, JSF, Ruby on Rails, Grails, CakePHP, Django, and Catalyst. However, Lift is a relatively new framework that emerged in 2007 for the Scala programming language and which promises a great number of advantages and additional features. Companies such as Siemens© and IBM®, as well as social networks such as Twitter® and Foursquare®, have now begun to develop their applications by using Scala and Lift. Best practices are activities, technical or important issues identified by users in a specific context, and which have rendered excellent service and are expected to achieve similar results in similar situations. ', authors: ['Sheila M. Saia', 'Jennifer Golbeck', 'Nutan KumarPanda'], creator: "Sheila M. Saia", fields: ['computer', 'Analyze'], score: 5, comment: [], votedUsers: [] },
{ id: 'p3', title: 'Mutual exclusion by four shared bits with not more than quadratic complexity', abstract: 'For years, the mutual exclusion algorithm of Lycklama and Hadzilacos (1991) [21] was the optimal mutual exclusion algorithm with the first-come-first-served property, with a minimal number of (non-atomic) communication variables (5 bits per thread). Recently, Aravind published an improvement of it, which uses 4 bits per thread and has simplified waiting conditions. This algorithm is extended here with fault tolerance, and it is verified by assertional methods, using the proof assistant PVS. Progress is proved by means of UNITY logic. ', authors: ['Stanton Parham', 'Micah Vandegrift'], creator: "Stanton Parham", fields: ['quadratic', 'complexity'], score: 1, comment: [], votedUsers: [] },

*/