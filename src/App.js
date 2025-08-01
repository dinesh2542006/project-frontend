import React from 'react';
import './App.css';

const BG_IMAGE = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80';
const API = 'https://project-backend-fw4n.onrender.com/api';

// --- Article Data (same as before, 5 sets, random images) ---
const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1505843279827-4b2b0c46d90c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
];
function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

function getArticleSets() {
  const allImages = [
    // Set 1
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // climate
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', // cancer research
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', // smartphones
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80', // community/park
    'https://images.unsplash.com/photo-1505843279827-4b2b0c46d90c?auto=format&fit=crop&w=600&q=80', // football
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // finance/markets
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // education
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80', // mars/space
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80', // renewable energy
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', // art
    // Set 2
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80', // wildlife
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // smart traffic
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // culinary
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', // film
    'https://images.unsplash.com/photo-1505843279827-4b2b0c46d90c?auto=format&fit=crop&w=600&q=80', // stock market
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80', // marathon
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80', // tech/innovation
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', // medical robots
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // literacy
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', // quantum computing
    // Set 3
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80', // farming
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', // marathon
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', // VR/education
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80', // startups
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // ocean cleanup
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // VR/education
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', // rainforest
    'https://images.unsplash.com/photo-1505843279827-4b2b0c46d90c?auto=format&fit=crop&w=600&q=80', // music festival
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80', // tech awards
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', // local business
    // Set 4
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // health/fitness
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // politics
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // environment
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', // business
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', // science
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80', // travel
    'https://images.unsplash.com/photo-1505843279827-4b2b0c46d90c?auto=format&fit=crop&w=600&q=80', // food
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // sports
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // world
    'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80', // culture
    // Set 5
    'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80', // tech
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', // health
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', // education
    'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80', // finance
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', // politics
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // science
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', // world
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', // business
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // travel
    'https://images.unsplash.com/photo-1505843279827-4b2b0c46d90c?auto=format&fit=crop&w=600&q=80', // food
  ];
  let imgIdx = 0;
  return [
    // Set 1: World/Science/Tech/Health/Business
    [
      {
        title: 'Global Leaders Meet to Discuss Climate Action',
        summary: 'World leaders gather for a historic summit on climate change, aiming for actionable solutions.',
        image: allImages[imgIdx++],
        author: 'Jane Smith',
        date: '2024-06-01',
        source: 'The Global Times',
        featured: true,
        details: 'A historic summit brings together leaders from over 50 countries to address the urgent issue of climate change. The agenda includes renewable energy, emissions reduction, and global cooperation.'
      },
      {
        title: 'Breakthrough in Cancer Research Announced',
        summary: 'Scientists unveil a promising new therapy that could revolutionize cancer treatment.',
        image: allImages[imgIdx++],
        author: 'Dr. Alan Lee',
        date: '2024-06-01',
        source: 'Health Daily',
        featured: false,
        details: 'A new therapy targets cancer cells with unprecedented precision. Early trials show a 70% success rate and minimal side effects.'
      },
      {
        title: 'Tech Giants Release Next-Gen Smartphones',
        summary: 'The latest smartphones feature AI-powered cameras and all-day battery life.',
        image: allImages[imgIdx++],
        author: 'Priya Patel',
        date: '2024-06-01',
        source: 'Tech Review',
        featured: false,
        details: 'Major tech companies have unveiled their newest smartphones, boasting advanced AI features and improved battery life.'
      },
      {
        title: 'Local Community Rallies for Park Restoration',
        summary: 'Volunteers join hands to restore the city park, planting trees and cleaning up.',
        image: allImages[imgIdx++],
        author: 'Carlos Rivera',
        date: '2024-06-01',
        source: 'City News',
        featured: false,
        details: 'Over 200 volunteers participated in a city-wide effort to restore the local park, including tree planting and playground repairs.'
      },
      {
        title: 'Historic Win for Underdog Football Team',
        summary: 'The city celebrates as the underdog team clinches the national championship.',
        image: allImages[imgIdx++],
        author: 'Emily Chen',
        date: '2024-06-01',
        source: 'Sports Weekly',
        featured: true,
        details: 'The city\'s football team, considered underdogs, won the national championship in a dramatic overtime victory.'
      },
      {
        title: 'Stock Markets Hit Record Highs',
        summary: 'Investors celebrate as markets reach new peaks amid economic optimism.',
        image: allImages[imgIdx++],
        author: 'Liam O\'Connor',
        date: '2024-06-01',
        source: 'Finance News',
        featured: false,
        details: 'Global stock markets have reached all-time highs, driven by strong earnings and economic optimism.'
      },
      {
        title: 'Education Reform Bill Passed',
        summary: 'Lawmakers approve sweeping changes to the national education system.',
        image: allImages[imgIdx++],
        author: 'Mohammed Al-Farsi',
        date: '2024-06-01',
        source: 'Education Times',
        featured: false,
        details: 'A new education reform bill has been passed, focusing on smaller class sizes and increased funding for STEM.'
      },
      {
        title: 'NASA Discovers Water on Mars',
        summary: 'NASA\'s latest rover has found evidence of water beneath the Martian surface.',
        image: allImages[imgIdx++],
        author: 'Dr. Sarah Kim',
        date: '2024-06-01',
        source: 'Space Explorer',
        featured: false,
        details: 'NASA\'s Perseverance rover has detected water molecules in Martian soil samples, raising hopes for future exploration.'
      },
      {
        title: 'Major Advances in Renewable Energy',
        summary: 'Solar and wind power reach new efficiency milestones, experts report.',
        image: allImages[imgIdx++],
        author: 'Liam O\'Connor',
        date: '2024-06-01',
        source: 'Energy Today',
        featured: false,
        details: 'Solar and wind energy technologies have achieved record efficiency, making renewables more competitive than ever.'
      },
      {
        title: 'Modern Art Exhibition Draws Record Crowds',
        summary: 'The city art museum hosts a groundbreaking modern art exhibition.',
        image: allImages[imgIdx++],
        author: 'Sophia Rossi',
        date: '2024-06-01',
        source: 'Art World',
        featured: false,
        details: 'A new exhibition at the city museum features over 100 works from 20 countries, attracting record crowds.'
      },
      {
        title: 'City Launches Smart Traffic System',
        summary: 'AI-driven traffic lights reduce congestion and improve safety.',
        image: allImages[imgIdx++],
        author: 'Sophia Rossi',
        date: '2024-06-01',
        source: 'Urban Tech',
        featured: false,
        details: 'The city has implemented an AI-driven traffic system that optimizes flow and reduces congestion.'
      }
    ],
    // Set 2: Lifestyle/Travel/Food/Sports/Culture
    [
      {
        title: 'New York Fashion Week Highlights',
        summary: 'The city\'s fashion scene dazzles with innovative designs and celebrity sightings.',
        image: allImages[imgIdx++],
        author: 'Alexandra Johnson',
        date: '2024-06-02',
        source: 'Fashion Daily',
        featured: true,
        details: 'The annual New York Fashion Week showcases the latest trends and designs from top designers.'
      },
      {
        title: 'World\'s Best Beaches Revealed',
        summary: 'The top 10 beaches for relaxation, adventure, and stunning views.',
        image: allImages[imgIdx++],
        author: 'David Thompson',
        date: '2024-06-02',
        source: 'Travel Weekly',
        featured: false,
        details: 'A comprehensive list of the world\'s best beaches, from the Maldives to the Caribbean.'
      },
      {
        title: 'New York\'s Best Restaurants',
        summary: 'The city\'s culinary scene continues to impress with innovative and diverse dining options.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-02',
        source: 'Food & Wine',
        featured: false,
        details: 'A curated list of the best restaurants in New York, from Michelin-starred to hidden gems.'
      },
      {
        title: 'The World\'s Largest Marathon',
        summary: 'The annual marathon event draws millions of participants and spectators.',
        image: allImages[imgIdx++],
        author: 'Tom Wilson',
        date: '2024-06-02',
        source: 'Sports Weekly',
        featured: false,
        details: 'The world\'s largest marathon, covering over 26 miles, attracts runners from all over the world.'
      },
      {
        title: 'The Louvre Museum\'s New Wing',
        summary: 'The Louvre Museum unveils a new wing dedicated to modern and contemporary art.',
        image: allImages[imgIdx++],
        author: 'Sophia Rossi',
        date: '2024-06-02',
        source: 'Art World',
        featured: false,
        details: 'The Louvre Museum has opened a new wing dedicated to modern and contemporary art.'
      },
      {
        title: 'The World\'s Most Expensive Restaurant',
        summary: 'A new restaurant in Tokyo claims the title of the world\'s most expensive.',
        image: allImages[imgIdx++],
        author: 'Liam O\'Connor',
        date: '2024-06-02',
        source: 'Finance News',
        featured: false,
        details: 'A new restaurant in Tokyo claims the title of the world\'s most expensive.'
      },
      {
        title: 'The World\'s Largest Music Festival',
        summary: 'The annual music festival draws millions of attendees and features top artists.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-02',
        source: 'Music Weekly',
        featured: false,
        details: 'The world\'s largest music festival, featuring top artists and diverse music genres.'
      },
      {
        title: 'The World\'s Largest Food Festival',
        summary: 'The annual food festival celebrates global cuisine and culinary arts.',
        image: allImages[imgIdx++],
        author: 'Tom Wilson',
        date: '2024-06-02',
        source: 'Food & Wine',
        featured: false,
        details: 'The world\'s largest food festival, featuring over 100 food stalls and international cuisines.'
      },
      {
        title: 'The World\'s Largest Sports Event',
        summary: 'The annual sports event draws millions of participants and spectators.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-02',
        source: 'Sports Weekly',
        featured: false,
        details: 'The world\'s largest sports event, featuring over 100 sports and activities.'
      }
    ],
    // Set 3: Science/Technology/Innovation/Health/Business
    [
      {
        title: 'New AI Technology Revolutionizes Healthcare',
        summary: 'A new AI system predicts patient outcomes with unprecedented accuracy.',
        image: allImages[imgIdx++],
        author: 'Dr. Sarah Kim',
        date: '2024-06-03',
        source: 'Health Daily',
        featured: true,
        details: 'A new AI system predicts patient outcomes with unprecedented accuracy, helping doctors make better decisions.'
      },
      {
        title: 'The World\'s Largest Tech Conference',
        summary: 'The annual tech conference brings together industry leaders and innovators.',
        image: allImages[imgIdx++],
        author: 'Liam O\'Connor',
        date: '2024-06-03',
        source: 'Tech Review',
        featured: false,
        details: 'The world\'s largest tech conference, featuring the latest innovations and trends in technology.'
      },
      {
        title: 'New Robotics Technology for the Elderly',
        summary: 'A new generation of robots designed to assist the elderly and disabled.',
        image: allImages[imgIdx++],
        author: 'Dr. Alan Lee',
        date: '2024-06-03',
        source: 'Health Daily',
        featured: false,
        details: 'A new generation of robots designed to assist the elderly and disabled, improving their quality of life.'
      },
      {
        title: 'The World\'s Largest Medical Conference',
        summary: 'The annual medical conference brings together doctors and researchers.',
        image: allImages[imgIdx++],
        author: 'Dr. Sarah Kim',
        date: '2024-06-03',
        source: 'Health Daily',
        featured: false,
        details: 'The world\'s largest medical conference, featuring the latest breakthroughs in medicine.'
      },
      {
        title: 'The World\'s Largest Business Conference',
        summary: 'The annual business conference brings together global leaders and entrepreneurs.',
        image: allImages[imgIdx++],
        author: 'Liam O\'Connor',
        date: '2024-06-03',
        source: 'Finance News',
        featured: false,
        details: 'The world\'s largest business conference, featuring the latest trends in business and finance.'
      },
      {
        title: 'The World\'s Largest Art Exhibition',
        summary: 'The annual art exhibition showcases the world\'s best art.',
        image: allImages[imgIdx++],
        author: 'Sophia Rossi',
        date: '2024-06-03',
        source: 'Art World',
        featured: false,
        details: 'The world\'s largest art exhibition, featuring the best art from around the world.'
      },
      {
        title: 'The World\'s Largest Music Festival',
        summary: 'The annual music festival draws millions of attendees and features top artists.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-03',
        source: 'Music Weekly',
        featured: false,
        details: 'The world\'s largest music festival, featuring top artists and diverse music genres.'
      },
      {
        title: 'The World\'s Largest Food Festival',
        summary: 'The annual food festival celebrates global cuisine and culinary arts.',
        image: allImages[imgIdx++],
        author: 'Tom Wilson',
        date: '2024-06-03',
        source: 'Food & Wine',
        featured: false,
        details: 'The world\'s largest food festival, featuring over 100 food stalls and international cuisines.'
      },
      {
        title: 'The World\'s Largest Sports Event',
        summary: 'The annual sports event draws millions of participants and spectators.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-03',
        source: 'Sports Weekly',
        featured: false,
        details: 'The world\'s largest sports event, featuring over 100 sports and activities.'
      }
    ],
    // Set 4: Environment/Science/Travel/Food/Sports
    [
      {
        title: 'The World\'s Largest Environmental Conference',
        summary: 'The annual environmental conference brings together scientists and activists.',
        image: allImages[imgIdx++],
        author: 'Dr. Sarah Kim',
        date: '2024-06-04',
        source: 'Health Daily',
        featured: true,
        details: 'The world\'s largest environmental conference, featuring the latest breakthroughs in environmental science.'
      },
      {
        title: 'The World\'s Largest Science Conference',
        summary: 'The annual science conference brings together researchers and innovators.',
        image: allImages[imgIdx++],
        author: 'Liam O\'Connor',
        date: '2024-06-04',
        source: 'Tech Review',
        featured: false,
        details: 'The world\'s largest science conference, featuring the latest breakthroughs in science.'
      },
      {
        title: 'New Travel Destinations Revealed',
        summary: 'The world\'s most exciting and unique travel destinations for 2024.',
        image: allImages[imgIdx++],
        author: 'Sophia Rossi',
        date: '2024-06-04',
        source: 'Travel Weekly',
        featured: false,
        details: 'A list of the world\'s most exciting and unique travel destinations for 2024.'
      },
      {
        title: 'The World\'s Largest Food Festival',
        summary: 'The annual food festival celebrates global cuisine and culinary arts.',
        image: allImages[imgIdx++],
        author: 'Tom Wilson',
        date: '2024-06-04',
        source: 'Food & Wine',
        featured: false,
        details: 'The world\'s largest food festival, featuring over 100 food stalls and international cuisines.'
      },
      {
        title: 'The World\'s Largest Sports Event',
        summary: 'The annual sports event draws millions of participants and spectators.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-04',
        source: 'Sports Weekly',
        featured: false,
        details: 'The world\'s largest sports event, featuring over 100 sports and activities.'
      },
      {
        title: 'The World\'s Largest Art Exhibition',
        summary: 'The annual art exhibition showcases the world\'s best art.',
        image: allImages[imgIdx++],
        author: 'Sophia Rossi',
        date: '2024-06-04',
        source: 'Art World',
        featured: false,
        details: 'The world\'s largest art exhibition, featuring the best art from around the world.'
      },
      {
        title: 'The World\'s Largest Music Festival',
        summary: 'The annual music festival draws millions of attendees and features top artists.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-04',
        source: 'Music Weekly',
        featured: false,
        details: 'The world\'s largest music festival, featuring top artists and diverse music genres.'
      },
      {
        title: 'The World\'s Largest Food Festival',
        summary: 'The annual food festival celebrates global cuisine and culinary arts.',
        image: allImages[imgIdx++],
        author: 'Tom Wilson',
        date: '2024-06-04',
        source: 'Food & Wine',
        featured: false,
        details: 'The world\'s largest food festival, featuring over 100 food stalls and international cuisines.'
      },
      {
        title: 'The World\'s Largest Sports Event',
        summary: 'The annual sports event draws millions of participants and spectators.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-04',
        source: 'Sports Weekly',
        featured: false,
        details: 'The world\'s largest sports event, featuring over 100 sports and activities.'
      }
    ],
    // Set 5: Finance/Technology/Science/Travel/Business
    [
      {
        title: 'The World\'s Largest Business Conference',
        summary: 'The annual business conference brings together global leaders and entrepreneurs.',
        image: allImages[imgIdx++],
        author: 'Liam O\'Connor',
        date: '2024-06-05',
        source: 'Finance News',
        featured: true,
        details: 'The world\'s largest business conference, featuring the latest trends in business and finance.'
      },
      {
        title: 'The World\'s Largest Art Exhibition',
        summary: 'The annual art exhibition showcases the world\'s best art.',
        image: allImages[imgIdx++],
        author: 'Sophia Rossi',
        date: '2024-06-05',
        source: 'Art World',
        featured: false,
        details: 'The world\'s largest art exhibition, featuring the best art from around the world.'
      },
      {
        title: 'The World\'s Largest Music Festival',
        summary: 'The annual music festival draws millions of attendees and features top artists.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-05',
        source: 'Music Weekly',
        featured: false,
        details: 'The world\'s largest music festival, featuring top artists and diverse music genres.'
      },
      {
        title: 'The World\'s Largest Food Festival',
        summary: 'The annual food festival celebrates global cuisine and culinary arts.',
        image: allImages[imgIdx++],
        author: 'Tom Wilson',
        date: '2024-06-05',
        source: 'Food & Wine',
        featured: false,
        details: 'The world\'s largest food festival, featuring over 100 food stalls and international cuisines.'
      },
      {
        title: 'The World\'s Largest Sports Event',
        summary: 'The annual sports event draws millions of participants and spectators.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-05',
        source: 'Sports Weekly',
        featured: false,
        details: 'The world\'s largest sports event, featuring over 100 sports and activities.'
      },
      {
        title: 'The World\'s Largest Art Exhibition',
        summary: 'The annual art exhibition showcases the world\'s best art.',
        image: allImages[imgIdx++],
        author: 'Sophia Rossi',
        date: '2024-06-05',
        source: 'Art World',
        featured: false,
        details: 'The world\'s largest art exhibition, featuring the best art from around the world.'
      },
      {
        title: 'The World\'s Largest Music Festival',
        summary: 'The annual music festival draws millions of attendees and features top artists.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-05',
        source: 'Music Weekly',
        featured: false,
        details: 'The world\'s largest music festival, featuring top artists and diverse music genres.'
      },
      {
        title: 'The World\'s Largest Food Festival',
        summary: 'The annual food festival celebrates global cuisine and culinary arts.',
        image: allImages[imgIdx++],
        author: 'Tom Wilson',
        date: '2024-06-05',
        source: 'Food & Wine',
        featured: false,
        details: 'The world\'s largest food festival, featuring over 100 food stalls and international cuisines.'
      },
      {
        title: 'The World\'s Largest Sports Event',
        summary: 'The annual sports event draws millions of participants and spectators.',
        image: allImages[imgIdx++],
        author: 'Maria Garcia',
        date: '2024-06-05',
        source: 'Sports Weekly',
        featured: false,
        details: 'The world\'s largest sports event, featuring over 100 sports and activities.'
      }
    ]
  ];
}

// --- END Article Data ---

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'landing',
      showRegister: false,
      showLogin: false,
      showUserError: '',
      showAdminError: '',
      user: null,
      adminName: '',
      adminPass: '',
      adminLogged: false,
      users: [],
      articleSets: getArticleSets(),
      setIndex: 0,
      modalArticle: null,
      // For search/alerts
      search: '',
      searchError: '',
      // For admin alerts
      alerts: []
    };
  }

  // Lifecycle for admin users/alerts
  componentDidUpdate(prevProps, prevState) {
    if (this.state.route === 'admin' && (!prevState.adminLogged && this.state.adminLogged || prevState.route !== 'admin')) {
      fetch(`${API}/admin/users`).then(r => r.json()).then(data => this.setState({ users: data.users || [] }));
      fetch(`${API}/admin/alerts`).then(r => r.json()).then(data => this.setState({ alerts: data.alerts || [] }));
    }
  }

  // Register
  handleRegister = async (e) => {
    e.preventDefault();
    this.setState({ showUserError: '' });
    const reg = this.state.reg || { name: '', age: '', gender: '', address: '', contact: '', code: '' };
    try {
      const res = await fetch(`${API}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reg)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');
      this.setState({ showRegister: false, user: data.user, route: 'articles' });
    } catch (err) {
      this.setState({ showUserError: err.message });
    }
  };

  // Login
  handleLogin = async (e) => {
    e.preventDefault();
    this.setState({ showUserError: '' });
    const login = this.state.login || { name: '', code: '' };
    try {
      const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(login)
      });
      const data = await res.json();
      if (!res.ok) throw new Error('Incorrect name or code. Please check your details or register first.');
      this.setState({ showLogin: false, user: data.user, route: 'articles' });
    } catch (err) {
      this.setState({ showUserError: err.message });
    }
  };

  // Admin login
  handleAdminLogin = async (e) => {
    e.preventDefault();
    this.setState({ showAdminError: '' });
    try {
      const res = await fetch(`${API}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: this.state.adminName, password: this.state.adminPass })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Admin login failed');
      this.setState({ adminLogged: true, route: 'admin' });
    } catch (err) {
      this.setState({ showAdminError: err.message });
    }
  };

  // Search/alert
  handleSearch = async (e) => {
    e.preventDefault();
    this.setState({ searchError: '' });
    const term = this.state.search.trim().toLowerCase();
    if (term === 'help' || term === 'help me') {
      try {
        await fetch(`${API}/alert`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: this.state.user.name, address: this.state.user.address, contact: this.state.user.contact })
        });
        this.setState({ search: '' });
      } catch {
        this.setState({ searchError: 'Failed to send alert.' });
      }
    } else {
      this.setState({ searchError: '', search: '' });
    }
  };

  // Reload articles
  handleReload = () => {
    this.setState(prev => ({ setIndex: (prev.setIndex + 1) % prev.articleSets.length }));
  };

  // Modal
  openModal = (article) => this.setState({ modalArticle: article });
  closeModal = () => this.setState({ modalArticle: null });

  // UI
  render() {
    if (this.state.route === 'landing') {
      return (
        <div className="landing-bg" style={{ backgroundImage: `url(${BG_IMAGE})` }}>
          <div className="landing-overlay">
            <div className="landing-content">
              <div className="newswala-logo">NEWS WALA</div>
              <div className="newswala-tagline">Your trusted source for the latest news, updates, and in-depth articles.</div>
              <div className="landing-btns">
                <button className="landing-btn" onClick={() => this.setState({ showRegister: true })}>Register</button>
                <button className="landing-btn" onClick={() => this.setState({ showLogin: true })}>Login</button>
              </div>
              <div className="admin-link" onClick={() => this.setState({ route: 'admin-login' })}>Admin Login</div>
            </div>
          </div>
          {this.state.showRegister && (
            <div className="modal-overlay" onClick={() => this.setState({ showRegister: false })}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={() => this.setState({ showRegister: false })}>&times;</button>
                <h2>Register</h2>
                <form onSubmit={this.handleRegister} className="modal-form">
                  <input placeholder="Name" value={this.state.reg?.name} onChange={e => this.setState({ reg: { ...this.state.reg, name: e.target.value } })} />
                  <input placeholder="Age" type="number" value={this.state.reg?.age} onChange={e => this.setState({ reg: { ...this.state.reg, age: e.target.value } })} />
                  <select value={this.state.reg?.gender} onChange={e => this.setState({ reg: { ...this.state.reg, gender: e.target.value } })}>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <input placeholder="Address" value={this.state.reg?.address} onChange={e => this.setState({ reg: { ...this.state.reg, address: e.target.value } })} />
                  <input placeholder="Contact Number" value={this.state.reg?.contact} onChange={e => this.setState({ reg: { ...this.state.reg, contact: e.target.value } })} />
                  <input placeholder="5-digit Code (Password)" type="password" maxLength={5} value={this.state.reg?.code} onChange={e => this.setState({ reg: { ...this.state.reg, code: e.target.value } })} />
                  {this.state.showUserError && <div className="modal-error">{this.state.showUserError}</div>}
                  <button type="submit" className="modal-submit">Register</button>
                </form>
              </div>
            </div>
          )}
          {this.state.showLogin && (
            <div className="modal-overlay" onClick={() => this.setState({ showLogin: false })}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={() => this.setState({ showLogin: false })}>&times;</button>
                <h2>Login</h2>
                <form onSubmit={this.handleLogin} className="modal-form">
                  <input placeholder="Name" value={this.state.login?.name} onChange={e => this.setState({ login: { ...this.state.login, name: e.target.value } })} />
                  <input placeholder="5-digit Code" type="password" maxLength={5} value={this.state.login?.code} onChange={e => this.setState({ login: { ...this.state.login, code: e.target.value } })} />
                  {this.state.showUserError && <div className="modal-error">{this.state.showUserError}</div>}
                  <button type="submit" className="modal-submit">Login</button>
                </form>
              </div>
            </div>
          )}
        </div>
      );
    }

    if (this.state.route === 'admin-login') {
      return (
        <div className="admin-login-bg">
          <div className="admin-login-content">
            <h2>Admin Login</h2>
            <form onSubmit={this.handleAdminLogin} className="modal-form">
              <input placeholder="Admin Name" value={this.state.adminName} onChange={e => this.setState({ adminName: e.target.value })} />
              <input placeholder="Password" type="password" value={this.state.adminPass} onChange={e => this.setState({ adminPass: e.target.value })} />
              {this.state.showAdminError && <div className="modal-error">{this.state.showAdminError}</div>}
              <button type="submit" className="modal-submit">Login</button>
            </form>
            <div className="admin-back" onClick={() => this.setState({ route: 'landing' })}>Back to Home</div>
          </div>
        </div>
      );
    }

    if (this.state.route === 'admin') {
      const refreshAlerts = () => {
        fetch(`${API}/admin/alerts`)
          .then(r => r.json())
          .then(data => this.setState({ alerts: data.alerts || [] }));
      };
  return (
        <div className="admin-portal-bg">
          <div className="admin-portal-content">
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h2>Admin Portal</h2>
              <div>
                <button className="logout-btn" onClick={() => { this.setState({ adminLogged: false, route: 'landing' }); }}>Logout</button>
                <button className="refresh-alerts-btn" onClick={refreshAlerts}>Refresh Alerts</button>
              </div>
            </div>
            <div className="admin-users-list">
              <table>
                <thead>
                  <tr>
                    <th>Name</th><th>Gender</th><th>Age</th><th>Address</th><th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.length === 0 && <tr><td colSpan={5}>No users registered.</td></tr>}
                  {this.state.users.map((u, i) => (
                    <tr key={i}>
                      <td>{u.name}</td>
                      <td>{u.gender}</td>
                      <td>{u.age}</td>
                      <td>{u.address}</td>
                      <td>{u.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="admin-alerts-list">
              <h3>Alerts</h3>
              {this.state.alerts.length === 0 && <div className="admin-alert-empty">No alerts received.</div>}
              {this.state.alerts.map((alert, i) => (
                <div className="admin-alert-card" key={i}>
                  <div><b>Name:</b> {alert.name}</div>
                  <div><b>Address:</b> {alert.address}</div>
                  <div><b>Contact:</b> {alert.contact}</div>
                  <div className="admin-alert-time">{new Date(alert.timestamp).toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
    </div>
  );
    }

    if (this.state.route === 'articles') {
      return (
        <div className="news-portal">
          <header className="news-header" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <h1>NEWS WALA</h1>
              <div className="welcome-user">Welcome, {this.state.user?.name}!</div>
            </div>
            <button className="logout-btn" onClick={() => { this.setState({ user: null, route: 'landing' }); }}>Logout</button>
          </header>
          <form className="news-search-bar" onSubmit={this.handleSearch} autoComplete="off">
            <input
              type="text"
              placeholder="Search news..."
              value={this.state.search}
              onChange={e => this.setState({ search: e.target.value })}
            />
            <button type="submit">Search</button>
          </form>
          {this.state.searchError && <div className="search-error">{this.state.searchError}</div>}
          <button className="reload-btn" onClick={this.handleReload}>
            &#x21bb; Reload News
          </button>
          <main className="news-masonry">
            {this.state.articleSets[this.state.setIndex].map((item, idx) =>
              item.ad ? (
                <div className="news-ad" key={idx}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.image} alt="Advertisement" />
                    <div className="ad-text">{item.text}</div>
                  </a>
                </div>
              ) : (
                <article
                  className={`news-article${item.featured ? ' featured' : ''}`}
                  key={idx}
                >
                  <img className="news-img" src={item.image} alt={item.title} />
                  <div className="news-content">
                    <h2 className="news-title">{item.title}</h2>
                    <div className="news-meta">
                      <span className="news-author">By {item.author}</span>
                      <span className="news-date">{item.date}</span>
                      <span className="news-source">{item.source}</span>
                    </div>
                    <p className="news-summary">{item.summary}</p>
                    <div className="modal-details">{item.details}</div>
                    <a className="read-more" href="#" onClick={e => {e.preventDefault(); this.openModal(item);}}>Read more...</a>
                  </div>
                </article>
              )
            )}
          </main>
          {this.state.modalArticle && (
            <div className="modal-overlay" onClick={this.closeModal}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={this.closeModal}>&times;</button>
                <h2>{this.state.modalArticle.title}</h2>
                <div className="modal-meta">
                  <span>By {this.state.modalArticle.author}</span> | <span>{this.state.modalArticle.date}</span> | <span>{this.state.modalArticle.source}</span>
                </div>
                <img className="modal-img" src={this.state.modalArticle.image} alt={this.state.modalArticle.title} />
                <div className="modal-summary">{this.state.modalArticle.summary}</div>
                <div className="modal-details">{this.state.modalArticle.details}</div>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}

export default App;
