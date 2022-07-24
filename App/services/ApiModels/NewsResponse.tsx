import Article from "./Article";

export default interface NewsResponse {
    status: string;
    totalResults: number;
    articles: Article[];
    
  }

  
  
  