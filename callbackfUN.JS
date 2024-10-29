function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

// fetchData is asynchronous and calls processData when done
fetchData(processData);

