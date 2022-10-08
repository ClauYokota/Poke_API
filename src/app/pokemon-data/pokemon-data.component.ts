import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../models/poke';
import { PokeServiceService } from '../poke-service.service';

@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.css']
})
export class PokemonDataComponent implements OnInit {
  pokemon?:Pokemon

  pokeForm: FormGroup = this.fb.group({
    name:['', [Validators.required]]
  })

  constructor(
    private pokeService: PokeServiceService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
  }

  pokeInfo():void{
    const pokename = this.pokeForm.value.name
    this.pokeService.getPokemon(pokename).subscribe(
      (poke)=>{
        this.pokemon = poke
      }
    )
  }
}
