import axios from "axios";

class TarotService {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:5000"
    });
  }

  getCards() {
    return this.instance.get("/cards");
  }
}

export default TarotService;
