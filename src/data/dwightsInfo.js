const dwightInfo = {
  generalInfo: {
    fullName: 'Dwight Schrute',
    email: 'dwight.schrute@dundermifflin.com',
    phone: '123-456-7890',
    aboutMe:
      '<p>I am a dedicated and hardworking Assistant to the Regional Manager at Dunder Mifflin. With a strong background in sales and a passion for beet farming, I strive to achieve excellence in all my endeavors. My goal is to become the Regional Manager and lead the Scranton branch to new heights.</p>',
  },
  educationList: [
    {
      name: 'Scranton High School',
      degree: 'High School Diploma',
      year: '1993',
      id: 8,
    },
    {
      name: 'Pennsylvania State University',
      degree: 'Bachelor of Business Administration',
      year: '1997',
      id: 7,
    },
  ],
  workList: [
    {
      name: 'Dunder Mifflin',
      title: 'Assistant to the Regional Manager',
      date: '2001-Present',
      description: `
      <ul>
          <li>Consistently ranked as the top salesman in the Scranton branch, achieving the highest sales numbers for multiple consecutive years.</li>
          <li>Awarded Employee of the Month several times for outstanding performance and dedication to the company.</li>
          <li>Successfully managed office operations and supported the Regional Manager in various administrative tasks, contributing to the overall efficiency of the branch.</li>
          <li>Developed and conducted sales training programs for new hires, improving their sales techniques and contributing to the overall success of the sales team.</li>
          <li>Maintained strong relationships with key clients, resulting in high client retention rates and repeat business.</li>
        </ul>
      `,
      id: 6,
    },
    {
      name: 'Schrute Farms',
      title: 'Owner',
      date: '1997-Present',
      description: ` 
        <ul>
          <li>Implemented sustainable and organic farming practices, resulting in high-quality beet production and increased farm profitability.</li>
          <li>Developed and promoted Schrute Farms as a successful agrotourism destination, attracting visitors for farm tours, bed and breakfast stays, and beet-related activities.</li>
          <li>Expanded the farm's operations by acquiring additional land and diversifying crop production, leading to increased revenue and business growth.</li>
        </ul>
      `,
      id: 5,
    },
  ],
  skillList: [
    { name: 'Sales', id: 1 },

    { name: 'Leadership', id: 2 },

    { name: 'Beet Farming', id: 3 },

    { name: 'Martial Arts', id: 4 },
  ],
};

export default dwightInfo;
