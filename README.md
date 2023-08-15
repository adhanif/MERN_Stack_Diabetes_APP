# TypeOne Diabetes App - Connecting and Empowering the Diabetes Community


<img src="./client/src/assets/TypeOne_black1.png "/>

<br/>

TypeOne is a web application designed to empower individuals with diabetes by providing valuable educational resources and fostering connections within the diabetes community. With a focus on knowledge enhancement and community building, TypeOne allows registered users to access informative articles about diabetes and discover nearby events where they can connect with others sharing a similar journey. The application is built using modern web technologies, including the MERN stack (MongoDB, Express.js, React, and Node.js) for the backend and frontend development.


<div align="center">

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWNvNHByajQwYjhhb29vZnE0ZzIzdjlqOHVvOGVkYjVlbjcyMmliNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"/>

</div>
<br/>

# Features

TypeOne offers a range of features to provide a comprehensive and enriching experience for its users:

- **User Registration and Authentication:** Users can sign up and log in to access the application's features.
- **Educational Articles:** Users can read informative articles covering various aspects of diabetes management and lifestyle.
- **Event Discovery:** Users can discover and join nearby events and connect with others in the diabetes community.
- **Interactive Event Map:** Utilize React Leaflet to display event locations on an interactive map. Clicking on markers opens a detailed Event Map Modal, providing essential information for informed event and Join.
- **User Profiles:** Registered users can customize their profiles, including setting a profile picture and share your diabetes journey with the community.
- **Search and Filtering:** Users can search for events and articles based on keywords, categories, city names, Date range and distances.
- **Responsive Design:** The application is designed to provide a seamless experience on various devices.

# Technologies

The TypeOne Diabetes App utilizes modern technologies to provide a seamless and engaging user experience:

- **Frontend:** React, React Router, Axios for API communication, React Hook Form for form handling, Leaflet for interactive maps integration, and Tailwind CSS for efficient and responsive styling.
- **Backend:** Express.js, Node.js, MongoDB (as the database),Nodemon for backend development
- **Authentication and Security:** JWT for user authentication, bcrypt for secure password hashing, and CORS middleware for enhanced security.
- **Build Tool:** Vite for fast and optimized frontend development
- **Cloud Services:** Multer is integrated for handling file uploads, and Cloudinary is used for cloud-based image storage and management
- **API Communication:** Axios for making asynchronous API requests
- **Deployment:** Express static server, dotenv for environment variables.
- **Additional Dependencies:** express-session for session management, node-geocoder for geocoding, nodemailer for emails.

# Installation

To get started with TypeOne Diabetes App, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/adhanif/MERN_Stack_Diabetes_APP.git)https://github.com/adhanif/MERN_Stack_Diabetes_APP.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MERN_Stack_Diabetes_APP
   ```

3. Install backend and frontend dependencies: Run `npm install` in both the root directory and the `client` directory.
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory based on the provided .env.example file. Fill in your environment variables.
   ```bash
   - GEOCODER_PROVIDER=
   - GEOCODER_API_KEY=
   - MONGODB_CONNECTION_STRING=
   - JWT_SECRET=
   - CLOUD_NAME=
   - CLOUDINARY_API_KEY=
   - CLOUDINARY_APISECRET=
   - UPLOAD_PRESET=
   - MAIL=EXAMPLE@gmail.com
   - MAIL_PASSWORD=******
   ```
5. Start the development server: Run `npm run dev` in the root directory for the backend, and `npm run dev` in the `client` directory for the frontend.
   ```bash
   npm run dev
   ```

# Usage

1. Open your web browser and visit `http://localhost:3000` to access the TypeOne Diabetes App.
   ```bash
   http://localhost:3000
   ```
2. Sign up or log in to your account to access the full range of features.
3. To stop running this application locally, press <kbd>Ctrl</kbd><kbd>C</kbd>.

## Project Folder Structure

The project follows a typical MERN stack folder structure:

- `client/` - Contains the frontend React application.
- `client/src/` - Contains the frontend source code.
- `client/src/components/` - Contains reusable React components.
- `server/` - Contains the backend Node.js application.
- `server/controllers/` - Contains the controllers for handling business logic.
- `server/handlers/` - Contains the connection setup for MongoDB mongoose.
- `server/middleware/` - Contains middleware functions used by the routes.
- `server/models/` - Contains the Mongoose models for interacting with the MongoDB database.
- `server/routes/` - Contains the API routes for handling different endpoints.
- `server/utils/` - Contains the error response function and geocoder connection setup.
- `server/index.js` - Entry point for the backend application.
- `server/uploads/` - Stores uploaded files.

# Contributing

Contributions to the TypeOne Diabetes App are welcomed and encouraged! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your commit message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request detailing your changes and explaining the purpose of your contribution.


## Visit the TypeOne Diabetes App

Experience the TypeOne Diabetes App and explore its features by visiting our website: [TypeOne Diabetes App](https://mern-stack-diabetes-app.onrender.com/)
<a href="https://mern-stack-diabetes-app.onrender.com/" target="_blank">Opens in new tab</a>
We're dedicated to providing a valuable resource for individuals seeking to enhance their knowledge about diabetes and connect with a supportive community. Join us on this journey towards a healthier and more informed lifestyle.

# License

This project is licensed under the **TYPE ONE APP Team**.
