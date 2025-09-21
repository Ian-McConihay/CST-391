import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfoComponent } from '../info/info'; // adjust path if needed

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InfoComponent],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class ShopComponent {
  question: string = "What is your name?";
  answer: string = "unknown";

  appForm = new FormGroup({
    answer: new FormControl('')
  });

  onSubmit(data: Partial<{ answer: string | null }>) {
    this.answer = data.answer ?? "unknown";
    console.log("Your name is " + this.answer);
  }
}
