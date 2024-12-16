import Archive from '../models/archiveModel';

// Fetch archived messages with pagination
export const getArchivedMessages = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const archivedMessages = await Archive.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Archive.countDocuments();

    res.status(200).json({
      archivedMessages,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching archived messages' });
  }
};