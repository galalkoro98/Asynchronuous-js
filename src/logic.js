import { stocks } from "./data.js";

export const production = () => {
  setTimeout(() => {
    const firstItem = stocks.variables[0];
    document.getElementById("result__item__first").innerHTML = firstItem;

    setTimeout(() => {
      const secondItem = stocks.variables[1];
      document.getElementById("result__item__second").innerHTML = secondItem;

      setTimeout(() => {
        const thirdItem =
          stocks.liquid[0] +
          stocks.variables[7] +
          stocks.variables[5] +
          stocks.variables[7] +
          stocks.liquid[1] +
          stocks.variables[7] +
          stocks.variables[6];
        document.getElementById("result__item__third").innerHTML = thirdItem;

        setTimeout(() => {
          const fourthItem = stocks.variables[2];
          document.getElementById("result__item__fourth").innerHTML =
            fourthItem;

          setTimeout(() => {
            const fifth =
              stocks.variables[8] + stocks.variables[7] + stocks.holder[1];
            document.getElementById("result__item__fifth").innerHTML = fifth;

            setTimeout(() => {
              const sixth =
                stocks.toppings[0] + stocks.variables[7] + stocks.variables[9];
              document.getElementById("result__item__sixth").innerHTML = sixth;

              setTimeout(() => {
                const seventh = stocks.variables[4];
                document.getElementById("result__item__seventh").innerHTML =
                  seventh;
              }, 2 * 1000);
            }, 3 * 1000);
          }, 2 * 1000);
        }, 1 * 1000);
      }, 1 * 1000);
    }, 2 * 1000);
  }, 2 * 1000);
};

// production();
