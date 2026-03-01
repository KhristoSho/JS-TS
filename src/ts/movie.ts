export class Movie {
  constructor(
    public nameEn: string,
    public nameRu: string,
    public poster: string,
    public yearRelease: number,
    public country: string,
    public slogan: string,
    public genre: string[],
    public time: number
  ) {}
}


