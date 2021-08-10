export type Props = {
  name: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
};

export const projects: Props[] = [
  {
    name: 'Easy Spell Book',
    image:
      'https://3.bp.blogspot.com/_P8LdBPa9zc4/TL8qndva5DI/AAAAAAAAAhM/jDzW6lOGVz4/s1600/DSC_8650.jpg',
    description:
      'Welcome to Easy Spell Book, an open source project created by Robert DeRouin to make memorizing spells using Vancian spellcasting rules easy! No logging in, no ads, no cost just bop on, memorize some spells and refer back when you need to!',
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'React', 'Router', 'Cypress', 'Heroku'],
    link: 'http://easyspellbook.herokuapp.com/'
  }
];
