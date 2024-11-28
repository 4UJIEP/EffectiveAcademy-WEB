export type CharacterDataWrapper = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: CharacterDataContainer;
  etag: string;
};

export type CharacterDataContainer = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
};

export type CharactersSearchParams =
{
    name?: string;
    nameStartsWith?: string;
    modifiedSince?: string;
    comics?: string;
    series?: string;
    events?: string;
    stories?: string;
    orderBy?: string;
    offset?: number;
    limit?: number;
};

export type Url = {
  type?: string;
  url?: string;
};

export type Image = {
  path: string;
  extension?: string;
};

export type ComicList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: ComicSummary[];
};

export type ComicSummary = {
  resourceURI?: string;
  name?: string;
};

export type StoryList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: StorySummary[];
};

export type StorySummary = {
  resourceURI?: string;
  name?: string;
  type?: string;
};

export type EventList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: EventSummary[];
};

export type EventSummary = {
  resourceURI?: string;
  name?: string;
};

export type SeriesList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: SeriesSummary[];
};

export type SeriesSummary = {
  resourceURI?: string;
  name?: string;
};

export type Comics = {
  id: number;
  name: string;
  description: string;
  img: string;
  characters: LinkInfo[];
};

export type LinkInfo = {
  id: number;
  name: string;
};

export type Item = {
  id: number;
  name: string;
  img: string;
  description: string;
  type: string;
};

export type CharacterSearchParams = {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: string;
  comics?: string;
  series?: string;
  events?: string;
  stories?: string;
  orderBy?: string;
  offset?: number;
  limit?: number;
};

export type ComicDataWrapper = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: ComicDataContainer;
  etag: string;
};

export type ComicDataContainer = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
};

export type Comic = {
  id: number;
  digitalId?: number;
  title: string;
  issueNumber?: number;
  variantDescription?: string;
  description: string;
  modified?: Date;
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string;
  issn?: string;
  format?: string;
  pageCount?: number;
  textObjects?: TextObject[];
  resourceURI?: string;
  urls?: Url[];
  series?: SeriesSummary;
  variants?: ComicSummary[];
  collections?: ComicSummary[];
  collectedIssues?: ComicSummary[];
  dates?: ComicDate[];
  prices?: ComicPrice[];
  thumbnail: Image;
  images?: Image[];
  creators?: CreatorList;
  characters?: CharacterList;
  stories?: StoryList;
  events?: EventList;
};

export type TextObject = {
  type?: string;
  language?: string;
  text?: string;
};

export type ComicDate = {
  type?: string;
  date?: Date;
};

export type ComicPrice = {
  type?: string;
  price?: number;
};

export type CreatorList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: CreatorSummary[];
};

export type CreatorSummary = {
  resourceURI?: string;
  name?: string;
  role?: string;
};

export type CharacterList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: CharacterSummary[];
};

export type CharacterSummary = {
  resourceURI?: string;
  name?: string;
  role?: string;
};

export type ComicSearchParams = {
  format?: string;
  formatType?: string;
  noVariants?: boolean;
  dateDescriptor?: string;
  dateRange?: string;
  title?: string;
  titleStartsWith?: string;
  startYear?: string;
  issueNumber?: string;
  diamondCode?: string;
  digitalId?: string;
  upc?: string;
  isbn?: string;
  ean?: string;
  issn?: string;
  hasDigitalIssue?: boolean;
  modifiedSince?: string;
  creators?: string;
  characters?: string;
  series?: string;
  events?: string;
  stories?: string;
  sharedAppearances?: string;
  collaborators?: string;
  orderBy?: string;
  offset?: number;
  limit?: number;
};