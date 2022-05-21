import type { NextApiRequest, NextApiResponse } from 'next';

import cards from 'data/tarot.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(cards);
};
