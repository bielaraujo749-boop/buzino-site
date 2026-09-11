import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [ReactiveFormsModule, FontAwesomeModule],
  selector: 'app-formsprocura',
  styleUrl: './formsprocura.css',
  templateUrl: './formsprocura.html',
})
export class Formsprocura {
faMagnifyingGlass = faMagnifyingGlass;

  @Output() buscar = new EventEmitter<{ partida: string, chegada: string}>();

  buscaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buscaForm = this.fb.group({
      partida: ['', Validators.required],
      chegada: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.buscaForm.valid) {
      this.buscar.emit(this.buscaForm.value);
    }
  }
}
