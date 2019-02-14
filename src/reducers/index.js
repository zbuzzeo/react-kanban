import { ADD_CARD } from '../actions';

let cardId = 0;
const cards = [
  {
    id : 1,
    title : 'ReactJS',
    body : 'Lightweight and performant library at the forefront of front-end development',
    priority : 'HIGH',
    status : 'IN PROGRESS',
    updated_at : new Date().toLocaleTimeString()
  }, 
  {
    id : 2,
    title : 'React / Redux',
    body : 'Redux implements the concept of Flux data flow to tame the beast that is asynchronicity',
    priority : 'BLOCKER',
    status : 'IN PROGRESS',
    updated_at : new Date().toLocaleTimeString()
  },
  {
    id : 3,
    title : 'Express Gallery',
    body : 'CMS that allows users to post, update, edit, and delete photos on the website',
    priority : 'MEDIUM',
    status : 'IN PROGRESS',
    updated_at : new Date().toLocaleTimeString()
  }, 
  {
    id : 4,
    title : 'Articles and Products with Databases',
    body : 'Display information from a database on the back-end on the browser',
    priority : 'LOW',
    status : 'DONE',
    updated_at : new Date().toLocaleTimeString()
  }, 
  {
    id : 5,
    title : 'Articles and Products',
    body : 'Practice templating with the Handlebars library',
    priority : 'LOW',
    status : 'DONE',
    updated_at : new Date().toLocaleTimeString()
  }, 
  {
    id : 6,
    title : 'Elemental HTTP Server',
    body : 'Get comfortable with setting up a server that can handle multiple routes',
    priority : 'LOW',
    status : 'DONE',
    updated_at : new Date().toLocaleTimeString()
  },
  {
    id : 7,
    title : 'AngularJS',
    body : 'Work with a staple framework that bridges the back and front end of development',
    priority : 'LOW',
    status : 'IN QUEUE',
    updated_at : new Date().toLocaleTimeString()
  }
];

const cardReducer = (state = cards, action) => {
  switch (action.type) {
    case ADD_CARD:
      action.payload['id'] = ++cardId;
      return [...state, action.payload];
    default:
      return state;
  }
}

export default cardReducer;
