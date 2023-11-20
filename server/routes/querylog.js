const express = require("express");
const router = express.Router();
const LogModel = require("../models/log");

// router.get("/query", async (req, res) => {
//   try {
//     const searchInput = req.query.searchInput;
//     const filterOption = req.query.filterOption;

//     console.log(searchInput);
//     console.log(typeof filterOption);

//     let query = {};
//     let results;

//     if (searchInput && filterOption === "all") {
//       const searchTerm = new RegExp(searchInput, "i");

//       query = {
//         $or: [
//           { level: { $regex: searchTerm } },
//           { message: { $regex: searchTerm } },
//           { resourceId: { $regex: searchTerm } },
//         //   { timestamp: { $regex: searchTerm } },
//           { traceId: { $regex: searchTerm } },
//           { spanId: { $regex: searchTerm } },
//           { commit: { $regex: searchTerm } },
//           { "metadata.parentResourceId": { $regex: searchTerm } },
//         ],
//       };
//     } else if (searchInput && filterOption !== "all") {
//       const fieldToSearch = filterOption;

//       query[fieldToSearch] = { $regex: new RegExp(searchInput, "i") };
//     }

//     results = await LogModel.find(query);

//     res.status(200).json({ message: results });
//   } catch (error) {
//     console.error("Error processing logs:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.get("/query", async (req, res) => {
  try {
    const searchInput = req.query.searchInput;
    let filterOption = req.query.filterOption;

    console.log("Search Input:", searchInput);
    console.log("Filter Options:", filterOption);

    let query;
    let results; 

    if (searchInput != null && filterOption.length === 0 ) {
      console.log("in if");

      const searchTerm = searchInput;
      query = {
        $or: [
          { level: { $regex: searchTerm } },
          { message: { $regex: searchTerm } },
          { resourceId: { $regex: searchTerm } },
          //   { timestamp: { $regex: searchTerm } },
          { traceId: { $regex: searchTerm } },
          { spanId: { $regex: searchTerm } },
          { commit: { $regex: searchTerm } },
          { "metadata.parentResourceId": { $regex: searchTerm } },
        ],
      };
    } else {
      console.log("in else");
      query = {
        $and: []
      };
      if (!Array.isArray(filterOption)) {
        // If filterOption is not an array, convert it to an array
        filterOption = [filterOption];
      }
  
      if (searchInput && filterOption && filterOption.length > 0) {
        const searchTerm = new RegExp(searchInput, 'i');
  
        // Construct an AND query dynamically
        for (const combinedField of filterOption) {
          const individualFields = combinedField.split(',');
          for (const field of individualFields) {
            const condition = {
              [field]: { $regex: searchInput, $options: "i" }
            };
            query.$and.push(condition);
          }
        }
  
        console.log('MongoDB Query:', JSON.stringify(query));
      }
    }
    results = await LogModel.find(query);

    res.status(200).json({ message: results });
  } catch (error) {
    console.error("Error processing logs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
