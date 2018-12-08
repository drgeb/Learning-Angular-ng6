import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getApplications() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getApplication(applicationId) {
    return this.http.get(
      "https://jsonplaceholder.typicode.com/users/" + applicationId
    );
  }

  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
