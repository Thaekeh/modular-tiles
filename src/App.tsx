import React, { useState } from "react";
import "./App.css";

type GridSize = {
  x: number;
  y: number;
};

type TileList = string[][][];

function App() {
  const [gridSize, setGridSize] = useState<GridSize>({ x: 10, y: 10 });
  renderTiles(gridSize);
  return (
    <div className="App">
      <div>
        {renderTiles(gridSize).map((row, index) => {
          return (
            <div key={`row-${index}`} className={"row"}>
              {row.map((tile, index) => {
                return (
                  <div className={"tile"}>
                    {tile.map((cell, index) => {
                      return (
                        <div
                          key={`cell-${index}`}
                          className={`cell cell-${cell}`}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

const renderTiles = (gridSize: GridSize) => {
  const tileList = generateTileList(gridSize);
  // const tileListCharacters = selectTileForTileList(tileList);
  // console.log(tileList);
  console.log("tileList", tileList);
  return tileList;
};

// const selectTileForTileList = (tileList: TileList) => {
//   const charTileList = tileList.map((row) => {
//     row.map((tile) => String.fromCharCode(tile));
//   });

//   return charTileList;
// };

const generateTileList = (gridSize: GridSize) => {
  const tileList: TileList = [];
  for (let i = 0; i < gridSize.y; i++) {
    let array = [];
    for (let j = 0; j < gridSize.x; j++) {
      const tileArray = [];
      for (let n = 0; n < 9; n++) {
        tileArray.push(getLettersForNumber(getRandomTilePreset()));
      }
      array.push(tileArray);
    }
    tileList.push(array);
  }
  console.log("tileList", tileList);
  return tileList;
};

const getLettersForNumber = (number: number) => {
  const colors = ["black", "whitish"];
  // const colors = ["red", "green", "yellow", "blue", "orange", "pink"];
  const pickedColor: string = colors[number] || "purple";
  return pickedColor;
};

const getRandomTilePreset = (): number => {
  const randomInt = Math.floor(Math.random() * 2);
  return randomInt;
};
