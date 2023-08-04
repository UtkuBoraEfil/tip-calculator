const button = document.querySelector(".testbtn");

let calculate = {
  bill: 0,
  tip: 0,
  numOfPeople: 0,
};

function tip(name) {
  let check = document.getElementsByName(name);
  check[0].dataset.active = "true";

  let buttons = $(".btn");
  buttons.map((index, item) => {
    const itemName = item.getAttribute("name");
    if (itemName !== name) {
      item.dataset.active = "false";
    }
    $(".percent").val("");
  });

  if (name === "bes") {
    calculate.tip = 5;
  } else if (name === "on") {
    calculate.tip = 10;
  } else if (name === "onbes") {
    calculate.tip = 15;
  } else if (name === "yirmibes") {
    calculate.tip = 25;
  } else if (name === "elli") {
    calculate.tip = 50;
  }
  if (calculate.bill && calculate.numOfPeople && calculate.tip) {
    calculator();
  }
}

function calculator() {
  let tipAmount =
    (calculate.bill * calculate.tip) / 100 / calculate.numOfPeople;
  tipAmount = Number(tipAmount.toFixed(2));
  $(".amount h2").text("$" + tipAmount);

  let total = calculate.bill / calculate.numOfPeople + tipAmount;
  total = Number(total.toFixed(2));
  $(".total h2").text("$" + total);
}

$(".bill-input").on("input", (event) => {
  calculate.bill = document.querySelector(".bill-input").value;
  if (calculate.bill && calculate.numOfPeople && calculate.tip) {
    calculator();
  }
});

$(".number-people").on("input", (event) => {
  calculate.numOfPeople = document.querySelector(".number-people").value;
  if (calculate.bill && calculate.numOfPeople && calculate.tip) {
    calculator();
  }
});

$(".btn").on("click", (event) => {
  let { name } = event.target;
  tip(name);
});

$(".percent").on("input", () => {
  let ardas = $(".btn");
  ardas.map((index, arda) => {
    arda.dataset.active = "false";
  });
  calculate.tip = document.querySelector(".percent").value;
  if (calculate.bill && calculate.numOfPeople && calculate.tip) {
    calculator();
  }
});

$(".reset").on("click", (event) => {
  calculate.bill = 0;
  calculate.tip = 0;
  calculate.numOfPeople = 0;
  let ardas = $(".btn");
  ardas.map((index, arda) => {
    arda.dataset.active = "false";
  });
  $(".amount h2").text("$0.00");
  $(".total h2").text("$0.00");
  let reset = document.querySelector(".bill-input");
  if (reset.value != " ") {
    reset.value = " ";
  }
  let reset2 = document.querySelector(".number-people");
  if (reset2.value != " ") {
    reset2.value = " ";
  }
  let reset3 = document.querySelector(".percent");
  if (reset3.value != " ") {
    reset3.value = " ";
  }
});
