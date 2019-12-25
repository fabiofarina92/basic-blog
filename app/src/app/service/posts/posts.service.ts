import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  endPoint = 'post';

  constructor(private httpClient: HttpClient) { }

  public getAll() {
    const formatEndPoint = `${environment.apiUrl}/${this.endPoint}/`;
    console.log('get all called with', formatEndPoint);
    return this.httpClient.get(formatEndPoint);
  }

  public get(id: string) {
    const formatEndPoint = `${environment.apiUrl}/${this.endPoint}/${id}`;
    console.log('get called with', formatEndPoint);
    return this.httpClient.get(formatEndPoint);
  }

  public new(post) {
    const formatEndPoint = `${environment.apiUrl}/${this.endPoint}/new`;
    console.log('new called with: ', formatEndPoint);
    console.log('and with post: ', post);

    // Accept: application/json
    // Cache-Control: no-cache
    // Content-Type: application/json
    const httpHeaders = new HttpHeaders()
      .append('Accept', 'application/json')
      .append('Content-Type', 'application/json');

    return this.httpClient.post<any>(formatEndPoint, post, { headers: httpHeaders});
  }
}
