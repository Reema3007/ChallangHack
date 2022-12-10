import KEYWORDS from "./server-json/sample.json" assert { type: "json" };

const reportBtn = document.querySelector(".report-btn");
const confirmBtn = document.querySelector("#confirmBtn");
const resolvedCB = document.querySelector("#issue-resolved");
const solutionTextElem = document.querySelector(".possible-solution");

let isResolved = false;

const typesOfFraud = ["Credit Card", "Online Transaction"];
const cities = ["Mumbai", "Pune", "Delhi", "Banglore"];
const openReportPage = function () {
  favDialog.showModal();
};

function submitIssue() {
  try {
    let model = {};
    let type = parseInt(document.getElementById("select-mode").value) - 1;
    let city = parseInt(document.getElementById("select-city").value) - 1;
    let description = document.getElementById("issue-description").value;
    let solution = document.getElementById("issue-solution").value;
    console.log(type, city, description);
    model.type = typesOfFraud[type];
    model.city = cities[city];
    model.description = description;
    model.isResolved = isResolved;
    model.solution = solution;
    // store it in the backend

    KEYWORDS.count = 2;
    console.log(KEYWORDS);
  } catch (error) {
    console.log(error);
  }
}

const updateResolveStatus = function () {
  try {
    console.log(">>> updateResolveStatus");
    isResolved = !isResolved;
    document.getElementById("resolved").checked = isResolved;
    solutionTextElem.style.display = isResolved ? "block" : "none";
  } catch (error) {
    console.log(error);
  }
};

reportBtn.addEventListener("click", openReportPage);
confirmBtn.addEventListener("click", submitIssue);
resolvedCB.addEventListener("click", updateResolveStatus);
