import Butter from 'buttercms'

// Import your API KEY and use here
//import API_KEY from './apiKey';

// I'll use Netlify env variables for the sake of this repo
const API_KEY = process.env.REACT_APP_BUTTER_API_KEY;

const butter = Butter(API_KEY);

export default butter;