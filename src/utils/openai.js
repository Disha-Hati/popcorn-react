import OpenAI from 'openai';
import { GPT_API_KEY } from './constant';

const openai = new OpenAI({
  apiKey: GPT_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser:true,//otherwise error since we're using from frontend
});

export default openai;
