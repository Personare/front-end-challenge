import Cards from '../../tarot.json';

export default function handler(req, res) {
    res.status(200).json(Cards);
}
