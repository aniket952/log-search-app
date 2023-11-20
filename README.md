# log-search-app
************* Log Ingestor :- *************<br>
Their is folder name server in which backend code present. Backend is made in NODEJS and Database is MongoDB.<br>

Steps to run Nodejs:-<br>
1 Navigate to Project foder (server)<br>
2 Run "npm install" on terminal, to install the project dependencies listed in the package.json.<br>
3 Run "node app.js" to start the backend server.<br>

Database :-<br>
1 To inject script(containing json) i have use postman to do it.<br>
2 POST request and route is "http://localhost:3000/api/data". Add json in body, all the data will be save in database.<br>

************* Query Interface :- *************<br>
Their is folder name client in which frontend code present. frontend is made using HTML, CSS and JAVASCRIPT.<br>

Steps to run Frontend:-<br>
1 open a index.html file to use Query Interface<br>
2 You can search the log and filter the data on a single or muiltiple fields.<br>
3 The result will be display in the result area.<br>

************* Features Implemented:- *************<br>
1 Database indexing for scalability and speed.<br>
2 A user can log the data using this route and it can handels high volumes of logs efficiently.<br>
3 Database write speeds is high.<br>
4 Offer a user interface (Web UI) for full-text search across logs.<br>
5 Utilize regular expressions for search.<br>
6 Efficient and quick search results.<br>
7 Allow combining multiple filters.<br>
8 Provide real-time searching capabilities.<br>


************* System Design:- *************<br>
-Log Ingestor (Backend):<br>
Components:<br>
1 Node.js Application (Backend):<br>
  Responsible for handling incoming log data.<br>
  Utilizes Express.js for routing and handling HTTP requests.<br>
  Interacts with MongoDB for storing log data.<br>
  
2 MongoDB Database:<br>
  Stores log data.<br>
  Utilizes indexing for scalability and speed.<br>

3 Workflow:<br>

3.1 Log Ingestion:<br>
  POST requests with log data are sent to the "/api/data" endpoint.<br>
  The Node.js application extracts data from the request body.<br>
  The application inserts the log data into MongoDB.<br>

3.2 Database Indexing:<br>
  MongoDB is configured with appropriate indexes for efficient search and retrieval.<br>

4 Query Interface (Frontend):<br>
 Components:<br>
4.1 HTML, CSS, and JavaScript:<br>
  Frontend user interface.<br>
  Enables users to search and filter log data.<br>
  
  Workflow:<br>
4.2 User Interaction:<br>
  Users interact with the HTML-based Query Interface.<br>
  They can input search terms and apply filters.<br>
  
4.3 Query Execution:<br>
  JavaScript handles user input and constructs queries.<br>
  Queries are sent to the backend via HTTP requests.<br>
  
4.4 Backend Interaction:<br>
  The backend (Node.js application) receives queries.<br>
  It processes queries and retrieves data from MongoDB.<br>

4.5 Display Results:<br>
  The retrieved log data is displayed on the frontend in a user-friendly format.<br>

Key Considerations:<br>

Scalability:<br>
Ensure that the system can handle a large volume of logs. This includes both the Node.js application and MongoDB.<br>
Consider implementing horizontal scaling if necessary.<br>
<br>
Indexing:<br>
Leverage MongoDB indexing to optimize query performance.<br>
<br>
Real-time Capabilities:<br>
If real-time capabilities are essential, consider using technologies like WebSockets for instant updates.<br>

Security:<br>
Implement proper authentication and authorization mechanisms to secure the system.<br>

Error Handling:<br>
Implement error handling in both the frontend and backend to provide a smooth user experience.<br>

Thankyou.......<br>
Aniket Mote<br>




