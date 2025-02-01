let feedbackArray = [];

let nextId = 1;

function getAll() {
  return feedbackArray;
}

function addOne(sender, message,rating) {
  // Check if any parameter is empty or undefined
  if (!sender || !message || !rating ) {
    return false;
  }

  const newFeedback = {
    id: nextId++,
    sender,
    message,
    rating
  };

  feedbackArray.push(newFeedback);
  return newFeedback;
}

function findById(id) {
  const feedback = feedbackArray.find((item) => item.id == id);
  if (feedback) {
    return feedback;
  } else {
    return false;
  }
}

function updateOneById(id, updatedData) {
  const feedback = findById(id);
  if (feedback) {
    // Update properties only if provided in updatedData
    if (updatedData.sender) {
      feedback.sender = updatedData.sender;
    }
    if (updatedData.message) {
      feedback.message = updatedData.message;
    }
    if (updatedData.rating) {
      feedback.rating = updatedData.rating;
    }
    return feedback;
  }
  return false;
}

function deleteOneById(id) {
  const feedback = findById(id);
  if (feedback) {
    const initialLength = feedbackArray.length;
    feedbackArray = feedbackArray.filter((feedback) => feedback.id != id);
    return feedback.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
}
if (require.main === module) {
  // Add pet
  let result = addOne("Buddy", "hello", 3,);
  console.log(result);
  // Add another pet
  result = addOne("Bud", "hello2", 5,);
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log("updateOneById called:", updateOneById(1, { sender: "Buddy", message: "hello", rating: 3 }));
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

feedback = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = feedback;