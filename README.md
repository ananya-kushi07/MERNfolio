# Link of the Report
[Report link](https://docs.google.com/document/d/1zI-rQLiqXT0ZhOk78rKTH3jgmvscWW3J/edit?usp=sharing&ouid=102036245116059331854&rtpof=true&sd=true)

# MERN Portfolio

This is a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack, designed to serve as a portfolio website template. It provides a platform for users to showcase their projects, skills, and contact information in an elegant and customizable manner.

## Features

- **Responsive Design**: The website is optimized for various screen sizes, ensuring a seamless experience across devices.
- **Project Showcase**: Display your projects with descriptions, images, and links for visitors to explore.
- **Skill Highlight**: Showcase your skills and expertise in a visually appealing manner.
- **Contact Form**: An integrated contact form allows visitors to get in touch with you easily.
- **Admin Panel**: Admin panel to manage projects, skills, and contact form submissions.
- **Authentication**: Secure authentication system for admin login.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Ensure you have the following software installed on your local machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the Repository**: 
   ```git@github.com:ananya-kushi07/MERN-Portfolio.git
   ```

2. **Install Dependencies**: 
   ```
   cd MERN-Portfolio
   npm install
   cd client
   npm install
   ```

3. **Set Environment Variables**: 
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     PORT=3001
     MONGODB_URI=<Your MongoDB URI>
     JWT_SECRET=<Your JWT Secret Key>
     ```

4. **Run the Application**:
   ```
   npm run dev
   ```

5. **Access the Application**:
   - Open your browser and go to `http://localhost:3000` to view the portfolio website.
   - Admin panel can be accessed at `http://localhost:3000/admin`.

## Deployment

To deploy this application on a live system, you can use platforms like Heroku, AWS, or DigitalOcean. Ensure to set up environment variables for production accordingly.

## Built With

- [MongoDB](https://www.mongodb.com/) - NoSQL database used for storing data.
- [Express.js](https://expressjs.com/) - Web framework for Node.js used for building the backend API.
- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Node.js](https://nodejs.org/) - JavaScript runtime environment used for running server-side code.
- [Bootstrap](https://getbootstrap.com/) - Front-end framework for designing responsive and mobile-first websites.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was inspired by the need for a simple yet functional portfolio website.
- Special thanks to all the contributors who helped improve and maintain this project.

