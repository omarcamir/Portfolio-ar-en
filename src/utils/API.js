import path from 'path';
import { promises as fs } from 'fs';

export const getSocialMedia = async () => {
  try {
    const jsonDirectory = path.join(process.cwd());
    const fileContents = await fs.readFile(
      jsonDirectory + '/helper/socialMedia.json',
      'utf8'
    );
    const data = JSON.parse(fileContents);
    return data.socialMediaLinks;
  } catch (error) {
    console.error('Error reading social media data:', error);
    return [];
  }
};
export const getServicesContent = async () => {
  try {
    const jsonDirectory = path.join(process.cwd());
    const fileContents = await fs.readFile(
      jsonDirectory + '/helper/Services.json',
      'utf8'
    );
    const data = JSON.parse(fileContents);
    return data.services;
  } catch (error) {
    console.error('Error reading services data:', error);
    return [];
  }
};