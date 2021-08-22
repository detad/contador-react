if ("serviceWorker" in navigator) {
  // console.log("Exist")
  navigator.serviceWorker.register("./sw.js");
}
