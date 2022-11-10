class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = hasStar
    this.world = ["Mario-Land", "Luigi-World"]
    this.setName()
    this.namePicked = this.name
    this.gameActive = true;
    this.printOut()
  } // End Initial

  setName() {
    if (this.namePicked !== "Mario" || this.namePicked !== "Luigi") {
      let randomNumber = Math.floor(Math.random() * 2)
      if (randomNumber === 0) {
        console.log("🟥It's-a me, Mario!")
        this.world = this.world[0]
        this.name = "Mario"
      } else if (randomNumber === 1) {
        console.log("🟩I'm a-Luigi, number one!")
        this.world = this.world[1]
        this.name = "Luigi"
      }
    }
  } // End SetName()

  gotHit() {
    // const {status} = this;
    if (this.status === "Powered Up" && this.hasStar === true) {
      this.hasStar = false
      console.log(`✨ Star Protected ${this.name} From Getting Hit`)
    } else if (this.status === "Powered Up") {
      this.status = "Big"
    } else if (this.status === "Big") {
      this.status = "Small"
    } else if (this.status === "Small") {
      this.status = "Dead"
      this.gameActive = false
    }
  } // End gotHit()

  gotPowerup() {
    if (this.status === "Powered Up" && this.hasStar === true) {
      console.log(`🌟 Already Star Protected`)
    } else if (this.status === "Powered Up") {
      this.hasStar = true
      console.log(`⭐️ Congrats! ${this.name} Recieved A Star`)
    } else if (this.status === "Big") {
      this.status = "Powered Up"
    } else if (this.status === "Small") {
      this.status = "Big"
    }
  } 

  addCoin() {
    this.totalCoins++
  } 

  printOut() {
    console.log(`
  Name: ${this.name}
  Status: ${this.status}
  Coins: ${this.totalCoins}
  Mario Game: ${this.world}`)
  }

}

const player = new Player("", 0, "Big", false)

roll = () => {
  let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    console.log(`💥 ${player.name} Got Hit!`)
    player.gotHit()
  } else if (randomNumber === 1) {
    console.log(`🍄 ${player.name} Got Powered Up!`)
    player.gotPowerup()
  } else if (randomNumber === 2) {
    console.log(`🟡 Coin Added!`)
    player.addCoin()
  }
  player.printOut()
  // the clearInterval ends the game
  if (player.gameActive === false) {
    clearInterval(intervalID)
    console.log(`☠️  ${player.name} Has Died`)
  }
}

// Rolls Action Chance Every Second
const intervalID = setInterval(function () {
  console.log("----------------------") // Breaks Lines
  roll()
}, 1000)