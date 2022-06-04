import { MARVEL_API } from "@/constants/server.env";
import crypto from "crypto";

export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: HeroThumbnail;
  resourceURI: string;
  comics: HeroSubItems;
  events: HeroSubItems;
  series: HeroSubItems;
  stories: HeroSubItems;
}

export interface HeroThumbnail {
  path: string;
  extension: string;
}

export interface HeroSubItems {
  available: number;
  returned: number;
  collectionURI: string;
  items: HeroSubItem[];
}

export interface HeroSubItem {
  resourceURI: string;
  name: string;
}

export type Heroes = Hero[];

// The URL to the Marvel API
const HERO_API = `${MARVEL_API.URL}/characters`;

// Our Limits for Search
const LIMIT_LOW = 10;
const LIMIT_MID = 25;
const LIMIT_HIGH = 100;
const LIMITS = [LIMIT_LOW, LIMIT_MID, LIMIT_HIGH];

class HeroService {
  limits = LIMITS;

  constructor() {}

  async heroes(): Promise<Heroes> {
    const timestamp = new Date().getTime().toString();
    const hash = crypto
      .createHash("md5")
      .update(`${timestamp}${MARVEL_API.PRIVATE_KEY}${MARVEL_API.PUBLIC_KEY}`)
      .digest("hex");

    const params = new URLSearchParams();
    params.append("apikey", MARVEL_API.PUBLIC_KEY!);
    params.append("ts", timestamp);
    params.append("hash", hash);
    params.append("limit", LIMIT_LOW.toString());
    params.append("offset", "0");

    const response = await fetch(`${HERO_API}?${params}`);
    const data = await response.json();
    return data.data.results;
  }
}

export default new HeroService();
