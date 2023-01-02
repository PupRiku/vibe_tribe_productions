const FontFaceObserver = require("fontfaceobserver")

const Fonts = () => {
  const link = document.createElement("link")
  link.href =
    "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,700;1,400&family=Roboto:wght@300;400;500;700&display=swap"
  link.rel = "stylesheet"

  document.head.appendChild(link)

  const roboto = new FontFaceObserver("Roboto")

  roboto.load().then(() => {
    document.documentElement.classList.add("roboto")
  })

  const raleway = new FontFaceObserver("Raleway")

  raleway.load().then(() => {
    document.documentElement.classList.add("raleway")
  })
}

export default Fonts
