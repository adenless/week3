const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.getAll();
  res.json(feedbacks);
};

const createFeedback = (req, res) => {
  const { sender, message, rating  } = req.body; // 

  const newFeedback = Feedback.addOne(sender, message, rating); // Pass all fields

  if (newFeedback) {
    res.json(newFeedback);
  } else {
    // Handle error (e.g., failed to create pet)
    res.status(500).json({ message: "Failed to create pet" });
  }
};

const getFeedbackById = (req, res) => {
  const feedbackId = req.params.feedbackId;
  const feedback = Feedback.findById(feedbackId);
  if (feedback) {
      res.json(feedback);
  } else {
      res.status(404).json({ message: 'feedback not found' });
  }
  
};

const updateFeedback = (req, res) => {
  const feedbackId = req.params.feedbackId;

  // Destructure all potential update fields
  const { sender, message, rating } = req.body;

  const updatedFeedback = Feedback.updateOneById(feedbackId, { sender,message,rating }); // Pass updated data as an object

  if (updatedFeedback) {
    res.json(updatedFeedback);
  } else {
    // Handle update failure (e.g., pet not found)
    res.status(404).json({ message: "Feedback not found" });
  }
};

const deleteFeedback = (req, res) => {
  const feedbackId = req.params.feedbackId;

  const feedback = Feedback.findById(feedbackId);

  if (!feedback) {
    return res.status(404).json({ message: "Feedback not found" });
  }

  const isDeleted = Feedback.deleteOneById(feedbackId);

  if (isDeleted) {
    res.json({ message: "Feedback deleted successfully" });
  } else {
    res.status(500).json({ message: "Failed to delete feedback" });
  }
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};