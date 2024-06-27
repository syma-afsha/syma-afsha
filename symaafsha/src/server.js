// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/profileViews', { useNewUrlParser: true, useUnifiedTopology: true });

const profileSchema = new mongoose.Schema({
  profileId: String,
  views: Number,
});

const Profile = mongoose.model('Profile', profileSchema);

// Endpoint to get profile views
app.get('/api/profile/:id/views', async (req, res) => {
  const profile = await Profile.findOne({ profileId: req.params.id });
  if (profile) {
    res.json({ views: profile.views });
  } else {
    res.json({ views: 0 });
  }
});

// Endpoint to increment profile views
app.post('/api/profile/:id/view', async (req, res) => {
  const profile = await Profile.findOneAndUpdate(
    { profileId: req.params.id },
    { $inc: { views: 1 } },
    { new: true, upsert: true }
  );
  res.json({ views: profile.views });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
