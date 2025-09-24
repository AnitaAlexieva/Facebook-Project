import { Component, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None
})
export class App implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{ message: string }>('http://localhost:3000/api/hello')
      .subscribe({
        next: res => console.log('Backend says:', res.message),
        error: err => console.error('Error:', err)
      });
  }

}
