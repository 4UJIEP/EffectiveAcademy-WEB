import { Navigate } from "react-router-dom";

export interface Post 
{
  id: string;
  title: string;
  body: string;
  image: string;
  links: string[];
}

export const CHAR_DATA: Post[] =
[
  {
    id: 'iron-man',
    title: 'Iron Man',
    body: 'Genius, billionaire, playboy, philanthropist',
    image: '/char_images/iron_man.jpg',
    links: ['Comic 1', 'Comic 2', 'Comic 3']
  },
  {
    id: 'deadpool',
    title: 'Deadpool',
    body: '*insert description here*',
    image: '/char_images/deadpool.jpg',
    links: ['Comic 1', 'Comic 2']
  },
  {
    id: 'wolverine',
    title: 'Wolverine',
    body: '*text text text*',
    image: '',
    links: ['Comic 1', 'Comic 2', 'Comic 4']
  },
  {
    id: 'hulk',
    title: 'Hulk',
    body: '*some description*',
    image: '/char_images/hulk.jpg',
    links: []
  }
]

export const COMIC_DATA: Post[] =
[
  {
    id: '1',
    title: 'Iron Man (2024) #1',
    body: 'A NEW, BRUTAL ERA BEGINS! Roxxon and AIM team up to take on Stark Unlimited! But they\'re ready for the old Tony Stark. This one? He\'s a lot angrier than he used to be. Iron Man is going to war! New armor, old enemies, and unbelievable twists abound in this fresh take on a fury-powered Iron Man from Pulitzer Prize-winning journalist Spencer Ackerman and groundbreaking artist Julius Ohta!',
    image: '/comic_images/1.jpg',
    links: ['Character 1', 'Character 2', 'Character 3', ]
  },
  {
    id: '2',
    title: 'Wolverine: Revenge (2024) #3',
    body: 'TARGET: DEADPOOL AND OMEGA RED! WOLVERINE\'s quest for vengeance leads him from old friends to old enemies - with death in his hands! Jonathan Hickman and Greg Capullo take LOGAN to the brink - setting the stage for the next unbelievable chapter. Trust us - you\'ll never guess where this one leads.',
    image: '/comic_images/2.jpg',
    links: ['Character 1', 'Character 2', 'Character 3', ]
  },
  {
    id: '3',
    title: 'Deadpool Team-Up (2024) #3',
    body: 'DEADPOOL SMASH - OR SMASHED?! DEADPOOL\'s Dragon Quest continues with the incredible HULK! But will the Green Goliath help or hinder the Merc with the Mouth\'s shot at the treasure?',
    image: '/comic_images/3.jpg',
    links: ['Character 1', 'Character 2', 'Character 3', ]
  }
]

export function CharByID(id: string)
{
  var i = 0;
  for (i = 0; i < CHAR_DATA.length; i++)
  {
    if (CHAR_DATA[i].id == id)
    {
      return CHAR_DATA[i];
    }
  }
  return {id: 'none', title: 'No Name', body: 'No Decription', image: '', links: []}
}

export function ComicByID(id: string)
{
  var i = 0;
  for (i = 0; i < COMIC_DATA.length; i++)
  {
    if (COMIC_DATA[i].id == id)
    {
      return COMIC_DATA[i];
    }
  }
  return {id: 'none', title: 'No Name', body: 'No Decription', image: '', links: []}
}