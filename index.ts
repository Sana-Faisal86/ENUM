// Enum Defination:
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript. Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
// syntax ==> enum {}
// enum the set of value:
// which return index or define index:
// or return value:
import chalk from "chalk";

console.log(
  chalk.black.bgCyan(
    "\n\t<<<<<<<<<<<<",
    chalk.black.bgRed("DIALOGUE BETWEEN WAITER AND CUSTOMER USE ENUM METHOD"),
    ">>>>>>>>>>>>"
  )
);
enum MenuItem {
  BeefBiryani = "BeefBiryani",
  ChickenBiryani = "ChickenBiryani ",
  BeefPulao = "BeefPulao",
  AloocholayPulao = "AloocholayPulao ",
  Salad = "Salad",
  Raita = "Raita",
}

enum MenuPrice {
  BeefBiryani = 720,
  ChickenBiryani = 560,
  BeefPulao = 640,
  AlooPulao = 400,
  Salad = 50,
  Raita = 80,
}

console.log(
  chalk.green.underline(
    "\n\tWAITER : WEllcome to our Restaurent Please have a seat.."
  )
);
console.log(chalk.magentaBright.underline("\n\t\tCUSTOMER : THANK YOU .."));
console.log(
  chalk.green.underline("\n\tWAITER : Would you like to order, Sir?")
);
console.log(
  chalk.magentaBright.underline(
    "\n\t\tCUSTOMER : Can I see the food Menu Card before Ordering something?"
  )
);
console.table(MenuItem);
console.log(
  chalk.green.underline(
    "\n\tWAITER : Sure sir ,Here is the menu I'll return in a moment to take your Order."
  )
);
console.log(chalk.magentaBright.underline("\n\t\tCUSTOMER : Ok ..."));
console.log(chalk.green.underline("\n\tWAITER : Are you ready sir?"));
console.log(
  chalk.magentaBright.underline("\n\t\tCUSTOMER : Yes I would like to Order!")
);
console.log(chalk.green.underline("\n\tPlease Select Menu ..."));
console.log(
  chalk.redBright.underline(
    `\n\t\t${MenuItem.BeefBiryani} , ${MenuItem.Salad} , ${MenuItem.Raita}...`
  )
);
console.log(
  chalk.green.underline(
    "\n\tWAITER : Would you like anything to drink with your meal?"
  )
);
console.log(
  chalk.magentaBright.underline(
    "\n\t\tCUSTOMER : yes just a bottle of mineral water ..."
  )
);
console.log(chalk.green.underline("\n\tWAITER : Thanks for your order..."));
console.log(
  chalk.redBright.underline("\n\tAfter a few minutes the waiter return ...")
);
console.log(chalk.green.underline("\n\tWAITER : Can I get you anything else"));
console.log(
  chalk.magentaBright.underline(
    "\n\t\tCUSTOMER : No, Thank you, can I have the bill please!"
  )
);
console.log(chalk.magentaBright.underline("\n\t\tSure Sir ..."));
let total = MenuPrice.BeefBiryani + MenuPrice.Salad + MenuPrice.Raita;
console.log(chalk.redBright.underline("\n\t\tTotal bill is ", total, "RS"));

console.log(
  chalk.magentaBright.underline("\n\t\tCUSTOMER : Pays the bill ...")
);
console.log(chalk.green.underline("\n\tWAITER : Thank you ' Have a nice day?"));

// THE END:
