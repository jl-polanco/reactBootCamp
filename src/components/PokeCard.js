import React from "react";
import { mockPokemonData } from "../mock/pokeData.js";
import ReactPlayer from "react-player";

export default function PokeCard() {
  return (
    <div className="PokeCard">
      <table>
        <thead>
          <tr>
            <td>pokeName</td>
            <td>front default</td>
            <td>front shiny</td>
            <td>video</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h1>{mockPokemonData.name}</h1>
            </td>
            <td>
              <img
                src={mockPokemonData.sprites.front_default}
                alt={mockPokemonData.name}
              />
            </td>
            <td>
              <img
                src={mockPokemonData.sprites.front_shiny}
                alt={mockPokemonData.name}
              />
            </td>
            <td>
              <div>
                <ReactPlayer
                  width="100%"
                  controls="false"
                  config={{ file: { forceHLS: true } }}
                  url={mockPokemonData.video}
                />
                <hr></hr>
                <a href={mockPokemonData.video} target="_blank" class="link">
                  Click Open in new tab!
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
