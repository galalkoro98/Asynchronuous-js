import stocks from "./data.js";

export const production = () => {
  setTimeout(() => {
    console.log(`${stocks.variables[0]}`);
    // stocks.variables[0];
    setTimeout(() => {
      console.log(`${stocks.variables[1]}`);

      setTimeout(() => {
        console.log(
          `${
            stocks.liquid[0] +
            stocks.variables[7] +
            stocks.variables[5] +
            stocks.variables[7] +
            stocks.liquid[1] +
            stocks.variables[7] +
            stocks.variables[6]
          }`
        );
        setTimeout(() => {
          console.log(`${stocks.variables[2]}`);
          setTimeout(() => {
            console.log(
              `${stocks.variables[8] + stocks.variables[7] + stocks.holder[1]}`
            );
            setTimeout(() => {
              console.log(
                `${
                  stocks.toppings[0] + stocks.variables[7] + stocks.variables[9]
                }`
              );
              setTimeout(() => {
                console.log(`${stocks.variables[4]}`);
              }, 2 * 1000);
            }, 3 * 1000);
          }, 2 * 1000);
        }, 1 * 1000);
      }, 1 * 1000);
    }, 2 * 1000);
  }, 2 * 1000);
};

production();
