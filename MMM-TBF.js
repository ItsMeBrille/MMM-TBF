Module.register("MMM-TBF", {
    // Default module config
    defaults: {
        updateInterval: 15, // Update interval in seconds (15 by default)
        url: "modules/MMM-TBF/abbreviations.json", // URL to the JSON data file
        randomOrder: true, // Display words in random order
        characterLimit: 100, // Default character limit
    },

    // Start method called when the module is loaded
    start: function () {
        this.words = [];
        this.currentIndex = 0;
        this.loadData();
        this.scheduleUpdate();
    },

    // Schedule regular updates
    scheduleUpdate: function () {
        var self = this;
        setInterval(function () {
            self.updateDom();
        }, this.config.updateInterval * 1000);
    },

    // Fetch data from the JSON file
    loadData: function () {
        var self = this;
        var url = this.config.url; // Use the configured URL
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                self.words = JSON.parse(xhr.responseText);
                if (self.config.randomOrder) {
                    // Shuffle the array to display words in random order
                    self.shuffleArray(self.words);
                }
                self.updateDom();
            }
        };
        xhr.send();
    },

    // Fisher-Yates shuffle algorithm to shuffle the array
    shuffleArray: function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    },

    // Create the module DOM elements
    getDom: function () {
        var wrapper = document.createElement("div");
        var wordElement = document.createElement("div");
        var translationElement = document.createElement("div");

        if (this.words.length > 0) {
            var currentWord = this.words[this.currentIndex];
            var word = currentWord.word;

            // Check if character limit is specified
            if (this.config.characterLimit && word.length > this.config.characterLimit) {
                word = word.substring(0, this.config.characterLimit) + '...';
            }

            wordElement.innerHTML = word;
            wordElement.className = "medium light bright";
            translationElement.innerHTML = currentWord.description;
            translationElement.className = "small light";

            // Display the current word and translation

            // Add elements to the wrapper
            wrapper.appendChild(wordElement);
            wrapper.appendChild(translationElement);

            // Increment the index for the next word
            this.currentIndex = (this.currentIndex + 1) % this.words.length;
        } else {
            // Display a loading message if data is not available yet
            wordElement.innerHTML = "Loading...";
            wrapper.appendChild(wordElement);
        }

        return wrapper;
    },
});