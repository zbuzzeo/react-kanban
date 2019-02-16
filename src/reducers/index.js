import { ADD_CARD, LOAD_CARDS } from '../actions';

let cardId = 0;
// const cards = [
//   {
//     id : 1,
//     title : 'ReactJS',
//     body : 'Lightweight and performant library at the forefront of front-end development',
//     priority : 'HIGH',
//     status : 'IN PROGRESS',
//     created_by : 'Ed',
//     assigned_to : 'Zeke',
//     updated_at : new Date().toLocaleTimeString()
//   }, 
//   {
//     id : 2,
//     title : 'React / Redux',
//     body : 'Redux implements the concept of Flux data flow to tame the beast that is asynchronicity',
//     priority : 'BLOCKER',
//     status : 'IN PROGRESS',
//     created_by : 'Ed',
//     assigned_to : 'Zeke',
//     updated_at : new Date().toLocaleTimeString()
//   },
//   {
//     id : 3,
//     title : 'Express Gallery',
//     body : 'CMS that allows users to post, update and delete photos on the website',
//     priority : 'MEDIUM',
//     status : 'IN PROGRESS',
//     created_by : 'Ed',
//     assigned_to : 'Zeke',
//     updated_at : new Date().toLocaleTimeString()
//   }, 
//   {
//     id : 4,
//     title : 'Articles and Products with Databases',
//     body : 'Display information from a database on the back-end on the browser',
//     priority : 'LOW',
//     status : 'DONE',
//     created_by : 'Ed',
//     assigned_to : 'Zeke',
//     updated_at : new Date().toLocaleTimeString()
//   }, 
//   {
//     id : 5,
//     title : 'Articles and Products',
//     body : 'Practice templating with the Handlebars library',
//     priority : 'LOW',
//     status : 'DONE',
//     created_by : 'Ed',
//     assigned_to : 'Zeke',
//     updated_at : new Date().toLocaleTimeString()
//   }, 
//   {
//     id : 6,
//     title : 'Elemental HTTP Server',
//     body : 'Get comfortable with setting up a server that can handle multiple routes',
//     priority : 'LOW',
//     status : 'DONE',
//     created_by : 'Ed',
//     assigned_to : 'Zeke',
//     updated_at : new Date().toLocaleTimeString()
//   },
//   {
//     id : 7,
//     title : 'AngularJS',
//     body : 'Work with a staple framework that bridges the back and front end of development',
//     priority : 'LOW',
//     status : 'IN QUEUE',
//     created_by : 'Ed',
//     assigned_to : 'Zeke',
//     updated_at : new Date().toLocaleTimeString()
//   }
// ];

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      console.log('hit');
      action.payload['id'] = ++cardId;
      return [...state, action.payload];
    case LOAD_CARDS:
      return [].concat(action.payload);
    default:
      return state;
  }
}

export default cardReducer;
