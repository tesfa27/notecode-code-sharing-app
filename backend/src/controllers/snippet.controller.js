const Snippet = require('../models/snippet');

const createSnippet = async (req, res) => {
  try {
    const { code, language, theme } = req.body;

    if (!code || !language || !theme) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const snippet = await Snippet.create({
      code,
      language,
      theme,
    });

    return res.status(201).json({
      id: snippet._id,
    });
  } catch (error) {
    console.error("Create snippet error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

const getSnippetById = async (req, res) => {
  try {
    const { id } = req.params;

    const snippet = await Snippet.findById(id);

    if (!snippet) {
      return res.status(404).json({
        message: "Snippet not found",
      });
    }

    return res.status(200).json({
      code: snippet.code,
      language: snippet.language,
      theme: snippet.theme,
    });
  } catch (error) {
    console.error("Get snippet error:", error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = { createSnippet, getSnippetById };
