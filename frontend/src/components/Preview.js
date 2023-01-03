import React from "react"

const Preview = ({ games }) => {
  return (
    <ul>
      {games.map((game) => {
        return <li key={`game_${game.id}`}>{game.attributes.name}</li>
      })}
    </ul>
  )
}

export default Preview
